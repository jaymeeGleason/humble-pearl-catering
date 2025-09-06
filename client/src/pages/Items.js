import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Pagination,
  Chip,
  Button,
  CircularProgress,
  InputAdornment
} from '@mui/material';
import {
  Search as SearchIcon,
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon
} from '@mui/icons-material';
import { useAuth } from '../contexts/AuthContext';
import { useItems } from '../contexts/ItemContext';

const Items = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { user } = useAuth();
  const { items, loading, pagination, fetchItems, deleteItem, fetchCategories } = useItems();
  
  const [search, setSearch] = useState(searchParams.get('search') || '');
  const [category, setCategory] = useState(searchParams.get('category') || '');
  const [categories, setCategories] = useState([]);
  const [page, setPage] = useState(parseInt(searchParams.get('page')) || 1);

  useEffect(() => {
    fetchCategories().then(setCategories);
  }, [fetchCategories]);

  useEffect(() => {
    const params = {
      page,
      limit: 12,
      ...(search && { search }),
      ...(category && { category })
    };
    fetchItems(params);
  }, [page, search, category, fetchItems]);

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
    setSearchParams({ 
      ...(search && { search }), 
      ...(category && { category }),
      page: 1
    });
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setPage(1);
    setSearchParams({ 
      ...(search && { search }), 
      ...(newCategory && { category: newCategory }),
      page: 1
    });
  };

  const handlePageChange = (event, value) => {
    setPage(value);
    setSearchParams({ 
      ...(search && { search }), 
      ...(category && { category }),
      page: value
    });
  };

  const handleDelete = async (itemId) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      try {
        await deleteItem(itemId);
      } catch (error) {
        console.error('Failed to delete item:', error);
      }
    }
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ mb: 4 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h4" component="h1">
            Items
          </Typography>
          {user && (
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              component={Link}
              to="/items/create"
            >
              Create Item
            </Button>
          )}
        </Box>

        {/* Search and Filter */}
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Box component="form" onSubmit={handleSearch} sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Search items..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{ minWidth: 200 }}
              />
              <FormControl sx={{ minWidth: 150 }}>
                <InputLabel>Category</InputLabel>
                <Select
                  value={category}
                  label="Category"
                  onChange={(e) => handleCategoryChange(e.target.value)}
                >
                  <MenuItem value="">All Categories</MenuItem>
                  {categories.map((cat) => (
                    <MenuItem key={cat} value={cat}>
                      {cat}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Button type="submit" variant="outlined">
                Search
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>

      {/* Items Grid */}
      {loading ? (
        <Box display="flex" justifyContent="center" py={4}>
          <CircularProgress />
        </Box>
      ) : items.length === 0 ? (
        <Card>
          <CardContent sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              No items found
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              {search || category 
                ? 'Try adjusting your search criteria' 
                : 'Be the first to create an item!'
              }
            </Typography>
            {user && (
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                component={Link}
                to="/items/create"
              >
                Create Item
              </Button>
            )}
          </CardContent>
        </Card>
      ) : (
        <>
          <Grid container spacing={3}>
            {items.map((item) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                <Card 
                  sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    '&:hover': { boxShadow: 4 }
                  }}
                >
                  {item.image_url && (
                    <CardMedia
                      component="img"
                      height="200"
                      image={item.image_url}
                      alt={item.title}
                      sx={{ objectFit: 'cover' }}
                    />
                  )}
                  <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="h6" component="h3" gutterBottom noWrap>
                      {item.title}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="text.secondary" 
                      sx={{ 
                        flexGrow: 1,
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}
                    >
                      {item.description || 'No description'}
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                      <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                        {item.category && (
                          <Chip label={item.category} size="small" variant="outlined" />
                        )}
                        {item.price && (
                          <Typography variant="h6" color="primary">
                            ${item.price}
                          </Typography>
                        )}
                      </Box>
                      <Typography variant="caption" color="text.secondary">
                        by {item.author_name}
                      </Typography>
                      {user && (user.id === item.user_id || user.role === 'admin') && (
                        <Box sx={{ mt: 1, display: 'flex', gap: 1 }}>
                          <Button
                            size="small"
                            startIcon={<EditIcon />}
                            component={Link}
                            to={`/items/${item.id}/edit`}
                          >
                            Edit
                          </Button>
                          <Button
                            size="small"
                            color="error"
                            startIcon={<DeleteIcon />}
                            onClick={() => handleDelete(item.id)}
                          >
                            Delete
                          </Button>
                        </Box>
                      )}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Pagination */}
          {pagination.pages > 1 && (
            <Box display="flex" justifyContent="center" mt={4}>
              <Pagination
                count={pagination.pages}
                page={page}
                onChange={handlePageChange}
                color="primary"
                size="large"
              />
            </Box>
          )}
        </>
      )}
    </Container>
  );
};

export default Items;

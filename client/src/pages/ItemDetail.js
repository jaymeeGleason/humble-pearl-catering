import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  CircularProgress,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material';
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  ArrowBack as ArrowBackIcon
} from '@mui/icons-material';
import { useAuth } from '../contexts/AuthContext';
import { useItems } from '../contexts/ItemContext';

const ItemDetail = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const { fetchItem, deleteItem } = useItems();
  const navigate = useNavigate();
  
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [deleteDialog, setDeleteDialog] = useState(false);

  useEffect(() => {
    const loadItem = async () => {
      try {
        setLoading(true);
        const itemData = await fetchItem(id);
        setItem(itemData);
      } catch (error) {
        setError('Failed to load item');
        console.error('Error loading item:', error);
      } finally {
        setLoading(false);
      }
    };

    loadItem();
  }, [id, fetchItem]);

  const handleDelete = async () => {
    try {
      await deleteItem(id);
      setDeleteDialog(false);
      navigate('/items');
    } catch (error) {
      console.error('Failed to delete item:', error);
    }
  };

  const canEdit = user && (user.id === item?.user_id || user.role === 'admin');

  if (loading) {
    return (
      <Container maxWidth="md">
        <Box display="flex" justifyContent="center" py={4}>
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  if (error || !item) {
    return (
      <Container maxWidth="md">
        <Alert severity="error" sx={{ mt: 4 }}>
          {error || 'Item not found'}
        </Alert>
        <Box textAlign="center" mt={2}>
          <Button component={Link} to="/items">
            Back to Items
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="md">
      <Box sx={{ mb: 3 }}>
        <Button
          startIcon={<ArrowBackIcon />}
          component={Link}
          to="/items"
          sx={{ mb: 2 }}
        >
          Back to Items
        </Button>

        <Card>
          {item.image_url && (
            <CardMedia
              component="img"
              height="400"
              image={item.image_url}
              alt={item.title}
              sx={{ objectFit: 'cover' }}
            />
          )}
          
          <CardContent sx={{ p: 4 }}>
            <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={2}>
              <Typography variant="h4" component="h1" gutterBottom>
                {item.title}
              </Typography>
              {canEdit && (
                <Box>
                  <Button
                    startIcon={<EditIcon />}
                    component={Link}
                    to={`/items/${item.id}/edit`}
                    sx={{ mr: 1 }}
                  >
                    Edit
                  </Button>
                  <Button
                    color="error"
                    startIcon={<DeleteIcon />}
                    onClick={() => setDeleteDialog(true)}
                  >
                    Delete
                  </Button>
                </Box>
              )}
            </Box>

            <Box display="flex" gap={2} mb={3}>
              {item.category && (
                <Chip label={item.category} color="primary" />
              )}
              {item.price && (
                <Chip 
                  label={`$${item.price}`} 
                  color="secondary" 
                  variant="outlined"
                />
              )}
            </Box>

            <Typography variant="body1" paragraph sx={{ whiteSpace: 'pre-wrap' }}>
              {item.description || 'No description provided.'}
            </Typography>

            <Box mt={4} pt={2} borderTop={1} borderColor="divider">
              <Typography variant="body2" color="text.secondary">
                Created by {item.author_name} on{' '}
                {new Date(item.created_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialog} onClose={() => setDeleteDialog(false)}>
        <DialogTitle>Delete Item</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to delete "{item.title}"? This action cannot be undone.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialog(false)}>Cancel</Button>
          <Button onClick={handleDelete} color="error" variant="contained">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default ItemDetail;

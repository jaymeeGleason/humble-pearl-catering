import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  Grid,
  CircularProgress,
  Alert
} from '@mui/material';
import { useItems } from '../contexts/ItemContext';

const EditItem = ({ showSnackbar }) => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    imageUrl: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { fetchItem, updateItem } = useItems();
  const navigate = useNavigate();

  useEffect(() => {
    const loadItem = async () => {
      try {
        setLoading(true);
        const item = await fetchItem(id);
        setFormData({
          title: item.title || '',
          description: item.description || '',
          price: item.price || '',
          category: item.category || '',
          imageUrl: item.image_url || ''
        });
      } catch (error) {
        setError('Failed to load item');
        console.error('Error loading item:', error);
      } finally {
        setLoading(false);
      }
    };

    loadItem();
  }, [id, fetchItem]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const itemData = {
        ...formData,
        price: formData.price ? parseFloat(formData.price) : null
      };
      
      await updateItem(id, itemData);
      showSnackbar('Item updated successfully!', 'success');
      navigate(`/items/${id}`);
    } catch (error) {
      showSnackbar('Failed to update item', 'error');
      console.error('Error updating item:', error);
    } finally {
      setLoading(false);
    }
  };

  if (error) {
    return (
      <Container maxWidth="sm">
        <Alert severity="error" sx={{ mt: 4 }}>
          {error}
        </Alert>
        <Box textAlign="center" mt={2}>
          <Button onClick={() => navigate('/items')}>
            Back to Items
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          marginTop: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Paper elevation={3} sx={{ padding: 4, width: '100%' }}>
          <Typography component="h1" variant="h4" align="center" gutterBottom>
            Edit Item
          </Typography>

          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="title"
                  label="Title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  disabled={loading}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  id="description"
                  label="Description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  disabled={loading}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="price"
                  label="Price"
                  name="price"
                  type="number"
                  inputProps={{ step: "0.01", min: "0" }}
                  value={formData.price}
                  onChange={handleChange}
                  disabled={loading}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="category"
                  label="Category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  disabled={loading}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="imageUrl"
                  label="Image URL"
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleChange}
                  disabled={loading}
                />
              </Grid>
            </Grid>
            <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={loading || !formData.title}
              >
                {loading ? <CircularProgress size={24} /> : 'Update Item'}
              </Button>
              <Button
                fullWidth
                variant="outlined"
                onClick={() => navigate(`/items/${id}`)}
                disabled={loading}
              >
                Cancel
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default EditItem;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  Grid,
  CircularProgress
} from '@mui/material';
import { useItems } from '../contexts/ItemContext';

const CreateItem = ({ showSnackbar }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    imageUrl: ''
  });
  const [loading, setLoading] = useState(false);

  const { createItem } = useItems();
  const navigate = useNavigate();

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
      
      await createItem(itemData);
      showSnackbar('Item created successfully!', 'success');
      navigate('/items');
    } catch (error) {
      showSnackbar('Failed to create item', 'error');
      console.error('Error creating item:', error);
    } finally {
      setLoading(false);
    }
  };

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
            Create New Item
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
                {loading ? <CircularProgress size={24} /> : 'Create Item'}
              </Button>
              <Button
                fullWidth
                variant="outlined"
                onClick={() => navigate('/items')}
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

export default CreateItem;

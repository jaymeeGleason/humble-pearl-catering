import React from 'react';
import { Box, Grid, Card, CardMedia, Typography } from '@mui/material';
import { images } from '../assets/images';

const ImageGallery = () => {
  // This is a sample component showing how to use images from the assets folder
  // You can modify this based on your actual image needs

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Image Gallery
      </Typography>
      
      <Grid container spacing={3}>
        {/* Logo Example */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image={images.logo.humblePearl}
              alt="Humble Pearl Logo"
              sx={{ objectFit: 'contain' }}
            />
            <Typography variant="h6" sx={{ p: 2, textAlign: 'center' }}>
              Company Logo
            </Typography>
          </Card>
        </Grid>

        {/* Placeholder for food images */}
        <Grid item xs={12} md={6}>
          <Card sx={{ height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant="body1" color="text.secondary">
              Add your food photos to assets/images/food/
            </Typography>
          </Card>
        </Grid>

        {/* Placeholder for event images */}
        <Grid item xs={12} md={6}>
          <Card sx={{ height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant="body1" color="text.secondary">
              Add your event photos to assets/images/events/
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ImageGallery;

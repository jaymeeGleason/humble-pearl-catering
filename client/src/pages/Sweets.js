import React from 'react';
import {
  Container,
  Typography,
  Box,
  Button
} from '@mui/material';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Sweets = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#F8F8F8' }}>
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/')}
          sx={{ mb: 4, textTransform: 'none' }}
        >
          Back to Home
        </Button>

        <Typography 
          variant="h2" 
          component="h1" 
          gutterBottom
          sx={{ 
            color: '#2C2C2C', 
            fontWeight: 'bold',
            mb: 4,
            textAlign: 'center'
          }}
        >
          Sweets
        </Typography>

        <Box sx={{ 
          backgroundColor: 'white',
          borderRadius: 2,
          p: 4,
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <Typography variant="h5" gutterBottom sx={{ color: '#2C2C2C', mb: 3 }}>
            Homemade Desserts & Sweet Treats
          </Typography>
          
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#666', mb: 4 }}>
            Indulge in our delectable selection of homemade desserts, pastries, and sweet treats crafted with love and the finest ingredients.
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ color: '#2C2C2C', mt: 4, mb: 2 }}>
            Our Sweet Offerings:
          </Typography>
          
          <Box sx={{ textAlign: 'left', maxWidth: 400, mx: 'auto' }}>
            <Typography variant="body1" sx={{ mb: 1 }}>• Custom Cakes</Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>• Cupcakes & Muffins</Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>• Cookies & Brownies</Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>• Filipino Desserts</Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>• Seasonal Treats</Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>• Custom Orders</Typography>
          </Box>

          <Button
            variant="contained"
            href="mailto:humblepearl2018@gmail.com"
            sx={{
              backgroundColor: '#4A90E2',
              color: 'white',
              textTransform: 'none',
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 600,
              borderRadius: '25px',
              mt: 4,
              '&:hover': {
                backgroundColor: '#357ABD',
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px rgba(74, 144, 226, 0.3)'
              }
            }}
          >
            Order Your Sweets
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Sweets;

import React from 'react';
import {
  Container,
  Typography,
  Box,
  Button
} from '@mui/material';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const FridayPlates = () => {
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
          Friday Plates
        </Typography>

        <Box sx={{ 
          backgroundColor: 'white',
          borderRadius: 2,
          p: 4,
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <Typography variant="h5" gutterBottom sx={{ color: '#2C2C2C', mb: 3 }}>
            Weekly Special Dishes
          </Typography>
          
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#666', mb: 4 }}>
            Join us every Friday for our special weekly plates featuring fresh, seasonal ingredients and our signature Filipino-American comfort food.
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ color: '#2C2C2C', mt: 4, mb: 2 }}>
            What to Expect:
          </Typography>
          
          <Box sx={{ textAlign: 'left', maxWidth: 400, mx: 'auto' }}>
            <Typography variant="body1" sx={{ mb: 1 }}>• Fresh, seasonal ingredients</Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>• Filipino-American fusion dishes</Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>• Rotating weekly menu</Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>• Made from scratch daily</Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>• Available for pickup</Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>• $15 dollars a plate</Typography>
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
            Get This Week's Menu
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default FridayPlates;

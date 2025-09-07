import React from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Divider,
  Button
} from '@mui/material';
import {
  Email as EmailIcon,
  Language as LanguageIcon
} from '@mui/icons-material';
import { grilledPineapples, humblePearlLogo } from '../assets/images';

const Home = () => {
  return (
    <Box>
      {/* DEBUG: This should be visible at the top of the page */}
      <Box sx={{ background: 'lime', color: 'black', p: 2, textAlign: 'center', fontSize: '2rem', fontWeight: 'bold' }}>
        🚨 DEBUG: CHANGES ARE WORKING! 🚨
      </Box>
      {/* Hero Section */}
      <Paper
        sx={{
          background: 'linear-gradient(135deg, #1A3D3D 0%, #2D4A4A 50%, #0F2A2A 100%)',
          color: '#F4EAD5',
          py: 3,
          mb: 4,
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', minHeight: '600px' }}>
            {/* Logo centered */}
            <Box
              component="img"
              src={humblePearlLogo}
              alt="Humble Pearl Logo"
              sx={{
                width: 1000,
                height: 1000,
                objectFit: 'contain',
                objectPosition: 'center center',
                flexShrink: 0,
                border: '5px solid red' // Temporary debug border
              }}
            />
          </Box>
          
          {/* Tagline below logo */}
          <Typography variant="h6" component="p" sx={{ 
            fontStyle: 'italic', 
            opacity: 0.9,
            fontWeight: 'medium',
            color: '#E6D7B8', // Gentle Gold from palette
            textAlign: 'center',
            mb: 4
          }}>
            Food is love made visible
          </Typography>
        </Container>
      </Paper>

      {/* Main Content */}
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ color: '#1A3D3D', fontWeight: 'bold' }}>
            Our Story
          </Typography>
        </Box>

        <Box sx={{ mb: 6 }}>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
            At Humble Pearl, we believe that food is love made visible. Founded on the simple joy of bringing people together through exceptional cuisine, we specialize in comfort food with a Filipino twist that warms both the heart and soul.
          </Typography>

          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
            Our passion lies in creating memorable dining experiences that celebrate life's precious moments. Whether you're hosting an intimate gathering or a grand celebration, we craft each dish with the same care and attention we'd give to our own family table. Our menu blends beloved comfort food classics with the rich, vibrant flavors of Filipino cuisine, creating something truly special that honors tradition while embracing innovation.
          </Typography>

          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
            Food has always been our love language – a way to show care, build connections, and create lasting memories. Every meal we prepare carries this intention, transforming ordinary occasions into extraordinary experiences through the power of thoughtfully prepared, delicious food.
          </Typography>

          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, fontWeight: 'bold' }}>
            Let Humble Pearl bring warmth, flavor, and joy to your next event. Because when food is made with love, every bite tells a story.
          </Typography>
        </Box>

        {/* Featured Food Image */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Box
            component="img"
            src={grilledPineapples}
            alt="Grilled Pineapples - A taste of our delicious offerings"
            sx={{
              maxWidth: '100%',
              height: 'auto',
              maxHeight: '400px',
              borderRadius: '12px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
              border: '3px solid rgba(45, 90, 90, 0.1)',
            }}
          />
          <Typography variant="h6" component="p" sx={{ 
            mt: 2, 
            color: '#2D5A5A', 
            fontStyle: 'italic',
            fontWeight: 'medium'
          }}>
            Grilled Pineapples - A taste of our delicious offerings
          </Typography>
        </Box>

        <Divider sx={{ my: 6, borderColor: '#E6D7B8' }} />

        {/* Contact Section */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ color: '#1A3D3D', fontWeight: 'bold' }}>
            Contact Us
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <EmailIcon sx={{ color: '#2D5A5A' }} />
            <Typography variant="h6" component="span" sx={{ color: '#1A3D3D' }}>
              humblepearl2018@gmail.com
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <LanguageIcon sx={{ color: '#2D5A5A' }} />
            <Typography variant="h6" component="span" sx={{ color: '#1A3D3D' }}>
              humblepearl.com
            </Typography>
          </Box>
        </Box>
      </Container>

      {/* Footer - BIG RED FOOTER FOR DEBUGGING */}
      <Box
        sx={{
          background: 'red', // Temporary red background for debugging
          color: 'white',
          py: 8,
          mt: 6,
          border: '10px solid yellow' // Temporary debug border
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 4 }}>
            <Typography variant="h6" sx={{ color: '#E6D7B8', fontWeight: 'bold' }}>
              Ready to work with us?
            </Typography>
            <Button
              startIcon={<EmailIcon />}
              href="mailto:humblepearl2018@gmail.com"
              sx={{
                textTransform: 'none',
                color: '#E6D7B8',
                borderColor: '#E6D7B8',
                border: '2px solid',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                '&:hover': {
                  backgroundColor: 'rgba(230, 215, 184, 0.1)',
                  borderColor: '#F4EAD5',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
                }
              }}
              variant="outlined"
            >
              Contact Us
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;

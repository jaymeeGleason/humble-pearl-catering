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
import { carrotPotato, humblePearlLogo, joeChristina } from '../assets/images';

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Paper
        sx={{
          background: 'linear-gradient(135deg, #1A3D3D 0%, #2D4A4A 50%, #0F2A2A 100%)',
          color: '#F4EAD5',
          py: 1,
          mb: 4,
          textAlign: 'center'
        }}
      >
        <Box sx={{ position: 'relative', width: '100%', minHeight: '152px', px: 2 }}>
          {/* Logo all the way to the left */}
          <Box
            component="img"
            src={humblePearlLogo}
            alt="Humble Pearl Logo"
            sx={{
              position: 'absolute',
              left: 16,
              top: '50%',
              transform: 'translateY(-50%)',
              width: 280,
              height: 280,
              objectFit: 'contain',
              objectPosition: 'center center',
              zIndex: 1
            }}
          />
          
          {/* Tagline centered on the whole page */}
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            width: '100%', 
            height: '152px' 
          }}>
            <Typography variant="h3" component="p" sx={{ 
              fontStyle: 'italic', 
              opacity: 0.9,
              fontWeight: 'medium',
              color: '#E6D7B8', // Gentle Gold from palette
              textAlign: 'center',
              mb: 0,
              fontSize: { xs: '2.5rem', md: '3.5rem' }
            }}>
              Food is love made visible
            </Typography>
          </Box>
        </Box>
      </Paper>

        {/* Main Content */}
        <Container maxWidth="md">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 4, mb: 6, flexDirection: { xs: 'column', md: 'row' } }}>
            <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
              <Typography variant="h4" component="h2" gutterBottom sx={{ color: '#1A3D3D', fontWeight: 'bold' }}>
                Our Story
              </Typography>
            </Box>
            <Box
              component="img"
              src={joeChristina}
              alt="Joe & Christina - Founders of Humble Pearl Catering"
              sx={{
                width: { xs: 200, md: 250 },
                height: { xs: 200, md: 250 },
                objectFit: 'cover',
                objectPosition: 'center 30%', // Focus on faces
                borderRadius: '12px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                border: '3px solid rgba(45, 90, 90, 0.1)',
                flexShrink: 0
              }}
            />
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
              src={carrotPotato}
              alt="Carrot and Potato Dish - A taste of our delicious offerings"
              sx={{
                maxWidth: '100%',
                maxHeight: '400px',
                borderRadius: '12px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                border: '3px solid rgba(45, 90, 90, 0.1)',
                transform: 'rotate(90deg)',
                objectFit: 'cover',
                objectPosition: 'center',
                width: '300px',
                height: '400px',
              }}
            />
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

      {/* Footer - CONTACT US */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1A3D3D 0%, #2D4A4A 50%, #0F2A2A 100%)',
          color: '#F4EAD5',
          py: 8,
          mt: 8,
          minHeight: '200px'
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

import React from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
  Grid,
  Card,
  CardContent
} from '@mui/material';
import {
  Email as EmailIcon,
  Language as LanguageIcon
} from '@mui/icons-material';
import { 
  carrotPotato, 
  humblePearlLogo, 
  joeChristina,
  baconShrimp,
  flowerCupcakes,
  grilledPineapples,
  chickenRiceBowl
} from '../assets/images';

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: '70vh',
          minHeight: '500px',
          backgroundImage: `url(${baconShrimp})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            zIndex: 1
          }
        }}
      >
        {/* Logo in upper left corner */}
        <Box
          component="img"
          src={humblePearlLogo}
          alt="Humble Pearl Logo"
          sx={{
            position: 'absolute',
            top: 20,
            left: 20,
            width: 240,
            height: 240,
            objectFit: 'contain',
            zIndex: 3,
            filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.5))'
          }}
        />
        <Box sx={{ 
          position: 'relative', 
          zIndex: 2, 
          textAlign: 'center',
          color: 'white',
          maxWidth: '800px',
          px: 3
        }}>
          <Typography 
            variant="h2" 
            component="h1"
            sx={{ 
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 'bold',
              fontFamily: '"Playfair Display", serif',
              textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
            }}
          >
            Made from scratch using only the freshest ingredients
          </Typography>
        </Box>
      </Box>

      {/* Services Section */}
      <Box sx={{ py: 8, backgroundColor: 'white' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            {/* Menus Section */}
            <Grid item xs={12} md={4}>
              <Card sx={{ 
                textAlign: 'center', 
                height: '100%',
                boxShadow: 'none',
                border: '1px solid #f0f0f0',
                '&:hover': {
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                  transform: 'translateY(-4px)',
                  transition: 'all 0.3s ease'
                }
              }}>
                <CardContent sx={{ p: 4 }}>
                  <Box
                    component="img"
                    src={flowerCupcakes}
                    alt="Our Menu - Delicious Filipino-American Cuisine"
                    sx={{
                      width: 200,
                      height: 200,
                      borderRadius: '50%',
                      objectFit: 'cover',
                      objectPosition: 'center',
                      mb: 3,
                      border: '4px solid #f8f8f8'
                    }}
                  />
                  <Typography 
                    variant="h4" 
                    component="h2"
                    sx={{ 
                      fontWeight: 'bold',
                      color: '#2C2C2C',
                      mb: 2,
                      fontSize: '2rem'
                    }}
                  >
                    Menus
                  </Typography>
                  <Typography 
                    variant="body1" 
                    paragraph
                    sx={{ 
                      fontSize: '1rem',
                      lineHeight: 1.6,
                      color: '#666',
                      mb: 3
                    }}
                  >
                    Humble Pearl Catering provides a wide selection of food items for Breakfast, Lunch, Dinner, Dessert and more! Our menu options stop at your imagination.
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#4A90E2',
                      color: 'white',
                      textTransform: 'none',
                      px: 4,
                      py: 1.5,
                      fontSize: '1rem',
                      fontWeight: 600,
                      borderRadius: '25px',
                      '&:hover': {
                        backgroundColor: '#357ABD',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 12px rgba(74, 144, 226, 0.3)'
                      }
                    }}
                  >
                    VIEW MENUS
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            {/* Event Catering Section */}
            <Grid item xs={12} md={4}>
              <Card sx={{ 
                textAlign: 'center', 
                height: '100%',
                boxShadow: 'none',
                border: '1px solid #f0f0f0',
                '&:hover': {
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                  transform: 'translateY(-4px)',
                  transition: 'all 0.3s ease'
                }
              }}>
                <CardContent sx={{ p: 4 }}>
                  <Box
                    component="img"
                    src={chickenRiceBowl}
                    alt="Event Catering - Professional Service"
                    sx={{
                      width: 200,
                      height: 200,
                      borderRadius: '50%',
                      objectFit: 'cover',
                      objectPosition: 'center',
                      mb: 3,
                      border: '4px solid #f8f8f8'
                    }}
                  />
                  <Typography 
                    variant="h4" 
                    component="h2"
                    sx={{ 
                      fontWeight: 'bold',
                      color: '#2C2C2C',
                      mb: 2,
                      fontSize: '2rem'
                    }}
                  >
                    Event Catering
                  </Typography>
                  <Typography 
                    variant="body1" 
                    paragraph
                    sx={{ 
                      fontSize: '1rem',
                      lineHeight: 1.6,
                      color: '#666',
                      mb: 3
                    }}
                  >
                    Corporate Events, Weddings, Funerals, Fundraisers, Special Events - Humble Pearl Catering is here to assist you with your catering needs.
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#4A90E2',
                      color: 'white',
                      textTransform: 'none',
                      px: 4,
                      py: 1.5,
                      fontSize: '1rem',
                      fontWeight: 600,
                      borderRadius: '25px',
                      '&:hover': {
                        backgroundColor: '#357ABD',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 12px rgba(74, 144, 226, 0.3)'
                      }
                    }}
                  >
                    LEARN MORE
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            {/* Services Section */}
            <Grid item xs={12} md={4}>
              <Card sx={{ 
                textAlign: 'center', 
                height: '100%',
                boxShadow: 'none',
                border: '1px solid #f0f0f0',
                '&:hover': {
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                  transform: 'translateY(-4px)',
                  transition: 'all 0.3s ease'
                }
              }}>
                <CardContent sx={{ p: 4 }}>
                  <Box
                    component="img"
                    src={carrotPotato}
                    alt="Our Services - Complete Catering Solutions"
                    sx={{
                      width: 200,
                      height: 200,
                      borderRadius: '50%',
                      objectFit: 'cover',
                      objectPosition: 'center',
                      mb: 3,
                      border: '4px solid #f8f8f8'
                    }}
                  />
                  <Typography 
                    variant="h4" 
                    component="h2"
                    sx={{ 
                      fontWeight: 'bold',
                      color: '#2C2C2C',
                      mb: 2,
                      fontSize: '2rem'
                    }}
                  >
                    Services
                  </Typography>
                  <Typography 
                    variant="body1" 
                    paragraph
                    sx={{ 
                      fontSize: '1rem',
                      lineHeight: 1.6,
                      color: '#666',
                      mb: 3
                    }}
                  >
                    Let Humble Pearl Catering help supply you with the proper equipment and service you need to make your event a huge success!
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#4A90E2',
                      color: 'white',
                      textTransform: 'none',
                      px: 4,
                      py: 1.5,
                      fontSize: '1rem',
                      fontWeight: 600,
                      borderRadius: '25px',
                      '&:hover': {
                        backgroundColor: '#357ABD',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 12px rgba(74, 144, 226, 0.3)'
                      }
                    }}
                  >
                    LEARN MORE
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* About Section */}
      <Box sx={{ py: 8, backgroundColor: '#F8F8F8' }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 6, flexDirection: { xs: 'column', md: 'row' } }}>
            <Box sx={{ flex: 1 }}>
              <Typography 
                variant="h3" 
                component="h2" 
                gutterBottom 
                sx={{ 
                  color: '#2C2C2C', 
                  fontWeight: 'bold',
                  mb: 4,
                  fontSize: { xs: '2rem', md: '2.5rem' }
                }}
              >
                Our Story
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#666' }}>
                At Humble Pearl, we believe that food is love made visible. Founded on the simple joy of bringing people together through exceptional cuisine, we specialize in comfort food with a Filipino twist that warms both the heart and soul.
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#666' }}>
                Our passion lies in creating memorable dining experiences that celebrate life's precious moments. Whether you're hosting an intimate gathering or a grand celebration, we craft each dish with the same care and attention we'd give to our own family table.
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#666', fontWeight: 'bold' }}>
                Let Humble Pearl bring warmth, flavor, and joy to your next event. Because when food is made with love, every bite tells a story.
              </Typography>
            </Box>
            <Box
              component="img"
              src={joeChristina}
              alt="Joe & Christina - Founders of Humble Pearl Catering"
              sx={{
                width: { xs: 300, md: 400 },
                height: { xs: 300, md: 400 },
                objectFit: 'cover',
                objectPosition: 'center 30%',
                borderRadius: '16px',
                boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
                flexShrink: 0
              }}
            />
          </Box>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box sx={{ py: 8, backgroundColor: 'white' }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography 
              variant="h3" 
              component="h2" 
              gutterBottom 
              sx={{ 
                color: '#2C2C2C', 
                fontWeight: 'bold',
                fontSize: { xs: '2rem', md: '2.5rem' }
              }}
            >
              Contact Us
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                color: '#666',
                fontSize: '1.2rem',
                fontWeight: 400
              }}
            >
              Ready to work with us?
            </Typography>
          </Box>

          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            gap: 4,
            mb: 6
          }}>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 2,
              p: 3,
              backgroundColor: '#F8F8F8',
              borderRadius: '12px',
              minWidth: '300px'
            }}>
              <EmailIcon sx={{ color: '#4A90E2', fontSize: '2rem' }} />
              <Typography variant="h6" component="span" sx={{ color: '#2C2C2C', fontSize: '1.1rem' }}>
                humblepearl2018@gmail.com
              </Typography>
            </Box>
            
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 2,
              p: 3,
              backgroundColor: '#F8F8F8',
              borderRadius: '12px',
              minWidth: '300px'
            }}>
              <LanguageIcon sx={{ color: '#4A90E2', fontSize: '2rem' }} />
              <Typography variant="h6" component="span" sx={{ color: '#2C2C2C', fontSize: '1.1rem' }}>
                humblepearl.com
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          backgroundColor: '#2D5A5A',
          color: 'white',
          py: 6
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            gap: 4,
            flexDirection: { xs: 'column', md: 'row' }
          }}>
            <Typography variant="h6" sx={{ 
              color: 'white', 
              fontWeight: 'bold',
              fontSize: '1.2rem'
            }}>
              Ready to work with us?
            </Typography>
            <Button
              startIcon={<EmailIcon />}
              href="mailto:humblepearl2018@gmail.com"
              sx={{
                textTransform: 'none',
                color: 'white',
                borderColor: 'white',
                border: '2px solid',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                borderRadius: '25px',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderColor: '#4A90E2',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 12px rgba(74, 144, 226, 0.3)'
                }
              }}
              variant="outlined"
            >
              Contact Us
            </Button>
          </Box>
          <Box sx={{ 
            textAlign: 'center', 
            mt: 4, 
            pt: 4, 
            borderTop: '1px solid #444'
          }}>
            <Typography variant="body2" sx={{ color: '#B0B0B0' }}>
              © 2025 Humble Pearl Catering. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;

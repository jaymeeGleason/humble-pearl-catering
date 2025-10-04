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
import { Link } from 'react-router-dom';
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
  chickenRiceBowl,
  fridayPlate2,
  wrappedSweets,
  tacoBar
} from '../assets/images';

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: '60vh', sm: '70vh' },
          minHeight: { xs: '400px', sm: '500px' },
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
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1
          }
        }}
      >
        {/* Hero Text - Mobile optimized */}
        <Box sx={{ 
          position: 'relative', 
          zIndex: 2, 
          textAlign: 'center',
          color: 'white',
          maxWidth: { xs: '90%', sm: '80%', md: '800px' },
          px: { xs: 2, sm: 3 }
        }}>
          <Typography 
            variant="h2" 
            component="h1"
            sx={{ 
              fontSize: { 
                xs: '1.5rem', 
                sm: '2rem', 
                md: '2.5rem', 
                lg: '3.5rem' 
              },
              fontWeight: 'bold',
              fontFamily: '"Playfair Display", serif',
              textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
              lineHeight: { xs: 1.2, sm: 1.3, md: 1.4 },
              mb: { xs: 1, sm: 2 }
            }}
          >
            Made from scratch using only the freshest ingredients
          </Typography>
        </Box>
      </Box>

      {/* Services Section */}
      <Box sx={{ py: { xs: 4, sm: 6, md: 8 }, backgroundColor: 'white' }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 3, sm: 4, md: 6 }}>
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
                <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
                  <Box
                    component="img"
                    src={tacoBar}
                    alt="Events - Memorable Catering Experiences"
                    sx={{
                      width: { xs: 150, sm: 180, md: 200 },
                      height: { xs: 150, sm: 180, md: 200 },
                      borderRadius: '50%',
                      objectFit: 'cover',
                      objectPosition: 'center',
                      mb: { xs: 2, sm: 3 },
                      border: '4px solid #f8f8f8'
                    }}
                  />
                  <Typography 
                    variant="h4" 
                    component="h2"
                    sx={{ 
                      fontWeight: 'bold',
                      color: '#2C2C2C',
                      mb: { xs: 1, sm: 2 },
                      fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem' }
                    }}
                  >
                    Events
                  </Typography>
                  <Typography 
                    variant="body1" 
                    paragraph
                    sx={{ 
                      fontSize: { xs: '0.9rem', sm: '1rem' },
                      lineHeight: 1.6,
                      color: '#666',
                      mb: { xs: 2, sm: 3 }
                    }}
                  >
                    From intimate gatherings to grand celebrations, we create memorable experiences with our exceptional catering services for all types of events.
                  </Typography>
                  <Button
                    component={Link}
                    to="/events"
                    variant="contained"
                    sx={{
                      backgroundColor: '#4A90E2',
                      color: 'white',
                      textTransform: 'none',
                      px: { xs: 3, sm: 4 },
                      py: { xs: 1, sm: 1.5 },
                      fontSize: { xs: '0.9rem', sm: '1rem' },
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

            {/* Sweets Section */}
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
                <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
                  <Box
                    component="img"
                    src={wrappedSweets}
                    alt="Sweets - Homemade Desserts and Treats"
                    sx={{
                      width: { xs: 150, sm: 180, md: 200 },
                      height: { xs: 150, sm: 180, md: 200 },
                      borderRadius: '50%',
                      objectFit: 'cover',
                      objectPosition: 'center',
                      mb: { xs: 2, sm: 3 },
                      border: '4px solid #f8f8f8'
                    }}
                  />
                  <Typography 
                    variant="h4" 
                    component="h2"
                    sx={{ 
                      fontWeight: 'bold',
                      color: '#2C2C2C',
                      mb: { xs: 1, sm: 2 },
                      fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem' }
                    }}
                  >
                    Sweets
                  </Typography>
                  <Typography 
                    variant="body1" 
                    paragraph
                    sx={{ 
                      fontSize: { xs: '0.9rem', sm: '1rem' },
                      lineHeight: 1.6,
                      color: '#666',
                      mb: { xs: 2, sm: 3 }
                    }}
                  >
                    Indulge in our delectable selection of homemade desserts, pastries, and sweet treats crafted with love and the finest ingredients.
                  </Typography>
                  <Button
                    component={Link}
                    to="/sweets"
                    variant="contained"
                    sx={{
                      backgroundColor: '#4A90E2',
                      color: 'white',
                      textTransform: 'none',
                      px: { xs: 3, sm: 4 },
                      py: { xs: 1, sm: 1.5 },
                      fontSize: { xs: '0.9rem', sm: '1rem' },
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

            {/* Friday Plates Section */}
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
                <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
                  <Box
                    component="img"
                    src={fridayPlate2}
                    alt="Friday Plates - Weekly Special Dishes"
                    sx={{
                      width: { xs: 150, sm: 180, md: 200 },
                      height: { xs: 150, sm: 180, md: 200 },
                      borderRadius: '50%',
                      objectFit: 'cover',
                      objectPosition: 'center',
                      mb: { xs: 2, sm: 3 },
                      border: '4px solid #f8f8f8'
                    }}
                  />
                  <Typography 
                    variant="h4" 
                    component="h2"
                    sx={{ 
                      fontWeight: 'bold',
                      color: '#2C2C2C',
                      mb: { xs: 1, sm: 2 },
                      fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem' }
                    }}
                  >
                    Friday Plates
                  </Typography>
                  <Typography 
                    variant="body1" 
                    paragraph
                    sx={{ 
                      fontSize: { xs: '0.9rem', sm: '1rem' },
                      lineHeight: 1.6,
                      color: '#666',
                      mb: { xs: 2, sm: 3 }
                    }}
                  >
                    Join us every Friday for our special weekly plates featuring fresh, seasonal ingredients and our signature Filipino-American comfort food.
                  </Typography>
                  <Button
                    component={Link}
                    to="/friday-plates"
                    variant="contained"
                    sx={{
                      backgroundColor: '#4A90E2',
                      color: 'white',
                      textTransform: 'none',
                      px: { xs: 3, sm: 4 },
                      py: { xs: 1, sm: 1.5 },
                      fontSize: { xs: '0.9rem', sm: '1rem' },
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
      <Box sx={{ py: { xs: 4, sm: 6, md: 8 }, backgroundColor: '#F8F8F8' }}>
        <Container maxWidth="lg">
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: { xs: 4, sm: 5, md: 6 }, 
            flexDirection: { xs: 'column', md: 'row' } 
          }}>
            <Box sx={{ flex: 1, order: { xs: 2, md: 1 } }}>
              <Typography 
                variant="h3" 
                component="h2" 
                gutterBottom 
                sx={{ 
                  color: '#2C2C2C', 
                  fontWeight: 'bold',
                  mb: { xs: 3, sm: 4 },
                  fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
                  textAlign: { xs: 'center', md: 'left' }
                }}
              >
                Our Story
              </Typography>
              <Typography variant="body1" paragraph sx={{ 
                fontSize: { xs: '1rem', sm: '1.1rem' }, 
                lineHeight: 1.8, 
                color: '#666',
                textAlign: { xs: 'center', md: 'left' }
              }}>
                At Humble Pearl, we believe that food is love made visible. Founded on the simple joy of bringing people together through exceptional cuisine, we specialize in comfort food with a Filipino twist that warms both the heart and soul.
              </Typography>
              <Typography variant="body1" paragraph sx={{ 
                fontSize: { xs: '1rem', sm: '1.1rem' }, 
                lineHeight: 1.8, 
                color: '#666',
                textAlign: { xs: 'center', md: 'left' }
              }}>
                Our passion lies in creating memorable dining experiences that celebrate life's precious moments. Whether you're hosting an intimate gathering or a grand celebration, we craft each dish with the same care and attention we'd give to our own family table.
              </Typography>
              <Typography variant="body1" paragraph sx={{ 
                fontSize: { xs: '1rem', sm: '1.1rem' }, 
                lineHeight: 1.8, 
                color: '#666', 
                fontWeight: 'bold',
                textAlign: { xs: 'center', md: 'left' }
              }}>
                Let Humble Pearl bring warmth, flavor, and joy to your next event. Because when food is made with love, every bite tells a story.
              </Typography>
            </Box>
            <Box
              component="img"
              src={joeChristina}
              alt="Joe & Christina - Founders of Humble Pearl Catering"
              sx={{
                width: { xs: 250, sm: 300, md: 400 },
                height: { xs: 250, sm: 300, md: 400 },
                objectFit: 'cover',
                objectPosition: 'center 30%',
                borderRadius: '16px',
                boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
                flexShrink: 0,
                order: { xs: 1, md: 2 }
              }}
            />
          </Box>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box sx={{ py: { xs: 4, sm: 6, md: 8 }, backgroundColor: 'white' }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center', mb: { xs: 4, sm: 5, md: 6 } }}>
            <Typography 
              variant="h3" 
              component="h2" 
              gutterBottom 
              sx={{ 
                color: '#2C2C2C', 
                fontWeight: 'bold',
                fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' }
              }}
            >
              Contact Us
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                color: '#666',
                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
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
            gap: { xs: 3, sm: 4 },
            mb: { xs: 4, sm: 5, md: 6 }
          }}>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: { xs: 1.5, sm: 2 },
              p: { xs: 2, sm: 3 },
              backgroundColor: '#F8F8F8',
              borderRadius: '12px',
              width: { xs: '100%', sm: 'auto' },
              minWidth: { xs: 'auto', sm: '300px' },
              maxWidth: { xs: '100%', sm: '400px' }
            }}>
              <EmailIcon sx={{ color: '#4A90E2', fontSize: { xs: '1.5rem', sm: '2rem' } }} />
              <Typography variant="h6" component="span" sx={{ 
                color: '#2C2C2C', 
                fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                wordBreak: 'break-all'
              }}>
                humblepearl2018@gmail.com
              </Typography>
            </Box>
            
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: { xs: 1.5, sm: 2 },
              p: { xs: 2, sm: 3 },
              backgroundColor: '#F8F8F8',
              borderRadius: '12px',
              width: { xs: '100%', sm: 'auto' },
              minWidth: { xs: 'auto', sm: '300px' },
              maxWidth: { xs: '100%', sm: '400px' }
            }}>
              <LanguageIcon sx={{ color: '#4A90E2', fontSize: { xs: '1.5rem', sm: '2rem' } }} />
              <Typography variant="h6" component="span" sx={{ 
                color: '#2C2C2C', 
                fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' }
              }}>
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

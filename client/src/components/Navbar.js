import React from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Button,
  Box
} from '@mui/material';
import {
  Home as HomeIcon,
  Email as EmailIcon
} from '@mui/icons-material';
import { humblePearlLogo } from '../assets/images';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#2D5A5A' }}>
      <Toolbar>
        <Box
          component={Link}
          to="/"
          sx={{
            flexGrow: 0,
            textDecoration: 'none',
            mr: 4,
          }}
        >
          <Box
            component="img"
            src={humblePearlLogo}
            alt="Humble Pearl Logo"
            sx={{
              height: 40,
              width: 'auto',
              objectFit: 'contain'
            }}
          />
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <Button
            component={Link}
            to="/"
            startIcon={<HomeIcon />}
            sx={{ 
              mr: 2,
              color: '#E6D7B8', // Gentle Gold from palette
              '&:hover': {
                backgroundColor: 'rgba(230, 215, 184, 0.1)'
              }
            }}
          >
            Home
          </Button>
        </Box>

        <Box>
          <Button 
            startIcon={<EmailIcon />}
            href="mailto:humblepearl2018@gmail.com"
            sx={{ 
              textTransform: 'none',
              color: '#E6D7B8', // Gentle Gold from palette
              '&:hover': {
                backgroundColor: 'rgba(230, 215, 184, 0.1)'
              }
            }}
          >
            Contact Us
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

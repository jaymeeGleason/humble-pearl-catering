import React from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Typography,
  IconButton
} from '@mui/material';
import {
  Search as SearchIcon,
  Menu as MenuIcon
} from '@mui/icons-material';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ 
      backgroundColor: '#2D5A5A',
      boxShadow: 'none',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <Toolbar sx={{ minHeight: '80px', px: { xs: 2, md: 4 } }}>

        {/* Navigation Menu */}
        <Box sx={{ 
          display: { xs: 'none', md: 'flex' }, 
          alignItems: 'center',
          gap: 1,
          flexGrow: 1,
          justifyContent: 'center'
        }}>
          <Button 
            component={Link}
            to="/"
            sx={{ 
              color: 'white',
              textTransform: 'none',
              fontSize: '0.9rem',
              fontWeight: 500,
              px: 2,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)'
              }
            }}
          >
            Home
          </Button>
          <Button 
            sx={{ 
              color: 'white',
              textTransform: 'none',
              fontSize: '0.9rem',
              fontWeight: 500,
              px: 2,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)'
              }
            }}
          >
            Event Catering
          </Button>
          <Button 
            sx={{ 
              color: 'white',
              textTransform: 'none',
              fontSize: '0.9rem',
              fontWeight: 500,
              px: 2,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)'
              }
            }}
          >
            Menus
          </Button>
          <Button 
            sx={{ 
              color: 'white',
              textTransform: 'none',
              fontSize: '0.9rem',
              fontWeight: 500,
              px: 2,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)'
              }
            }}
          >
            Services
          </Button>
          <Button 
            sx={{ 
              color: 'white',
              textTransform: 'none',
              fontSize: '0.9rem',
              fontWeight: 500,
              px: 2,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)'
              }
            }}
          >
            About
          </Button>
          <Button 
            sx={{ 
              color: 'white',
              textTransform: 'none',
              fontSize: '0.9rem',
              fontWeight: 500,
              px: 2,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)'
              }
            }}
          >
            Contact
          </Button>
        </Box>

        {/* Search Icon */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton sx={{ color: 'white' }}>
            <SearchIcon />
          </IconButton>
          <IconButton 
            sx={{ 
              color: 'white',
              display: { xs: 'block', md: 'none' }
            }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import {
  Search as SearchIcon,
  Menu as MenuIcon,
  Close as CloseIcon
} from '@mui/icons-material';
import { humblePearlLogo } from '../assets/images';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'Event Catering', link: '#' },
    { name: 'Menus', link: '#' },
    { name: 'Services', link: '#' },
    { name: 'About', link: '#' },
    { name: 'Contact', link: '#' }
  ];

  const drawer = (
    <Box sx={{ 
      width: 250, 
      height: '100%',
      backgroundColor: '#2D5A5A',
      color: 'white'
    }}>
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        p: 2,
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <Box sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
          Humble Pearl
        </Box>
        <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem 
            key={item.name} 
            component={Link} 
            to={item.link}
            onClick={handleDrawerToggle}
            sx={{ 
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)'
              }
            }}
          >
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="static" sx={{ 
      backgroundColor: '#2D5A5A',
      boxShadow: 'none',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <Toolbar sx={{ minHeight: { xs: '60px', md: '80px' }, px: { xs: 2, md: 4 } }}>
        {/* Logo - Only show on mobile, positioned left */}
        <Box sx={{ 
          display: { xs: 'flex', md: 'none' },
          alignItems: 'center',
          flexGrow: 1
        }}>
          <Box
            component="img"
            src={humblePearlLogo}
            alt="Humble Pearl Logo"
            sx={{
              width: 80,
              height: 80,
              objectFit: 'contain',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '50%',
              padding: 1,
              border: '2px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                transform: 'scale(1.05)',
                transition: 'all 0.3s ease'
              }
            }}
          />
        </Box>

        {/* Mobile Menu Button - Positioned right */}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerToggle}
          sx={{ 
            display: { xs: 'block', md: 'none' },
            ml: 'auto'
          }}
        >
          <MenuIcon />
        </IconButton>

        {/* Desktop Navigation Menu */}
        <Box sx={{ 
          display: { xs: 'none', md: 'flex' }, 
          alignItems: 'center',
          gap: 1,
          flexGrow: 1,
          justifyContent: 'center'
        }}>
          {navItems.map((item) => (
            <Button 
              key={item.name}
              component={Link}
              to={item.link}
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
              {item.name}
            </Button>
          ))}
        </Box>

        {/* Search Icon - Only show on desktop */}
        <Box sx={{ 
          display: { xs: 'none', md: 'flex' }, 
          alignItems: 'center'
        }}>
          <IconButton sx={{ color: 'white' }}>
            <SearchIcon />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 250 
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;

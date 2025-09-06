import React from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box
} from '@mui/material';
import {
  Home as HomeIcon,
  Email as EmailIcon
} from '@mui/icons-material';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#2D5A5A' }}>
      <Toolbar>
        <Typography
          variant="h5"
          component={Link}
          to="/"
          sx={{
            flexGrow: 0,
            textDecoration: 'none',
            color: 'inherit',
            mr: 4,
            fontWeight: 'bold'
          }}
        >
          Humble Pearl Catering
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <Button
            color="inherit"
            component={Link}
            to="/"
            startIcon={<HomeIcon />}
            sx={{ mr: 2 }}
          >
            Home
          </Button>
        </Box>

        <Box>
          <Button 
            color="inherit" 
            startIcon={<EmailIcon />}
            href="mailto:humblepearl2018@gmail.com"
            sx={{ textTransform: 'none' }}
          >
            Contact Us
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, ThemeProvider } from '@mui/material';
import { CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;

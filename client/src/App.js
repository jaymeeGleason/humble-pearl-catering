import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, ThemeProvider } from '@mui/material';
import { CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Events from './pages/Events';
import Sweets from './pages/Sweets';
import FridayPlates from './pages/FridayPlates';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box component="main" sx={{ minHeight: '100vh' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/sweets" element={<Sweets />} />
          <Route path="/friday-plates" element={<FridayPlates />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;

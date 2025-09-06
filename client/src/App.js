import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, Container, ThemeProvider } from '@mui/material';
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
        
        <Container component="main" sx={{ flexGrow: 1, py: 4 }}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;

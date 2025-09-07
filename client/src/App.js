import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, ThemeProvider } from '@mui/material';
import { CssBaseline } from '@mui/material';
import Home from './pages/Home';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box component="main" sx={{ minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;

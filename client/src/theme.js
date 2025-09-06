import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: '"Source Sans Pro", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Playfair Display", "Georgia", "Times New Roman", serif',
      fontWeight: 600,
    },
    h2: {
      fontFamily: '"Playfair Display", "Georgia", "Times New Roman", serif',
      fontWeight: 600,
    },
    h3: {
      fontFamily: '"Playfair Display", "Georgia", "Times New Roman", serif',
      fontWeight: 600,
    },
    h4: {
      fontFamily: '"Playfair Display", "Georgia", "Times New Roman", serif',
      fontWeight: 500,
    },
    h5: {
      fontFamily: '"Playfair Display", "Georgia", "Times New Roman", serif',
      fontWeight: 500,
    },
    h6: {
      fontFamily: '"Playfair Display", "Georgia", "Times New Roman", serif',
      fontWeight: 500,
    },
    body1: {
      fontFamily: '"Source Sans Pro", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
    },
    body2: {
      fontFamily: '"Source Sans Pro", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
    },
  },
  palette: {
    primary: {
      main: '#2D5A5A', // Deep Teal
      light: '#3D6A6A', // Rich Teal
      dark: '#1A3D3D', // Deep Forest
    },
    secondary: {
      main: '#F4EAD5', // Warm Cream
      light: '#FDFCF8', // Soft White
      dark: '#E6D7B8', // Gentle Gold
    },
    background: {
      default: '#FDFCF8', // Soft White
      paper: '#FDFCF8', // Soft White
    },
    text: {
      primary: '#1A3D3D', // Deep Forest
      secondary: '#5A7A7A', // Muted Teal
    },
    custom: {
      warmCream: '#F4EAD5',
      softWhite: '#FDFCF8',
      gentleGold: '#E6D7B8',
      mutedTeal: '#5A7A7A',
      lightSage: '#8FA5A5',
      deepForest: '#1A3D3D',
      deepTeal: '#2D5A5A',
      richTeal: '#3D6A6A',
    },
  },
});

export default theme;

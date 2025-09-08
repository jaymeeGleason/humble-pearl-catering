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
      main: '#4A90E2', // Modern Blue
      light: '#6BA3E8', // Light Blue
      dark: '#357ABD', // Dark Blue
    },
    secondary: {
      main: '#2C2C2C', // Dark Gray
      light: '#F8F8F8', // Light Gray
      dark: '#1A1A1A', // Very Dark Gray
    },
    background: {
      default: '#FFFFFF', // Pure White
      paper: '#FFFFFF', // Pure White for paper elements
    },
    text: {
      primary: '#2C2C2C', // Dark Gray
      secondary: '#666666', // Medium Gray
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

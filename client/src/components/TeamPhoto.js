import React from 'react';
import { Box } from '@mui/material';
import { joeChristina } from '../assets/images';

const TeamPhoto = ({ width = 300, height = 300, ...props }) => {
  return (
    <Box
      component="img"
      src={joeChristina}
      alt="Joe & Christina - Founders of Humble Pearl Catering"
      sx={{
        width: width,
        height: height,
        objectFit: 'cover',
        objectPosition: 'center 30%', // Focus on upper portion where faces are
        borderRadius: '12px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
        border: '3px solid rgba(45, 90, 90, 0.1)',
        ...props.sx
      }}
      {...props}
    />
  );
};

export default TeamPhoto;

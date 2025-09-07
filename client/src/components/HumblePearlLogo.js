import React from 'react';
import { Box } from '@mui/material';

const HumblePearlLogo = ({ size = 'standard', sx = {} }) => {
  const isCompact = size === 'compact';
  
  const logoStyles = {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: '#f4ecd8',
    transition: 'opacity 0.3s ease',
    '&:hover': {
      opacity: 0.8,
    },
    ...sx
  };

  const pearlContainerStyles = {
    position: 'relative',
    marginRight: '12px',
  };

  const pearlStyles = {
    width: isCompact ? '22px' : '28px',
    height: isCompact ? '22px' : '28px',
    background: 'radial-gradient(ellipse at 30% 30%, #ffffff 0%, #f4ecd8 20%, #e8dcc0 40%, #d4c3a0 60%, #c4b088 80%, #b8a478 100%)',
    borderRadius: '50%',
    position: 'relative',
    boxShadow: isCompact 
      ? 'inset -2px -2px 4px rgba(139, 69, 19, 0.4), inset 1px 1px 4px rgba(255, 255, 255, 0.7), 0 0 0 1px rgba(180, 164, 120, 0.8), 0 0 0 2px rgba(45, 74, 62, 0.3), 0 0 0 3px rgba(212, 195, 160, 0.2), 0 2px 6px rgba(0,0,0,0.5), 0 1px 2px rgba(0,0,0,0.3)'
      : 'inset -3px -3px 6px rgba(139, 69, 19, 0.4), inset 2px 2px 6px rgba(255, 255, 255, 0.7), 0 0 0 1px rgba(180, 164, 120, 0.8), 0 0 0 2px rgba(45, 74, 62, 0.3), 0 0 0 3px rgba(212, 195, 160, 0.2), 0 3px 8px rgba(0,0,0,0.5), 0 1px 3px rgba(0,0,0,0.3)',
    border: '1.5px solid rgba(212, 195, 160, 0.9)',
  };

  // Pearl highlight elements as separate Box components
  const pearlHighlight1Styles = {
    position: 'absolute',
    top: isCompact ? '3px' : '4px',
    left: isCompact ? '5px' : '6px',
    width: isCompact ? '6px' : '8px',
    height: isCompact ? '4px' : '6px',
    background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.4) 60%, transparent 100%)',
    borderRadius: '50%',
    filter: 'blur(0.5px)',
  };

  const pearlHighlight2Styles = {
    position: 'absolute',
    top: '2px',
    left: isCompact ? '3px' : '4px',
    width: isCompact ? '2px' : '3px',
    height: isCompact ? '1.5px' : '2px',
    background: 'rgba(255,255,255,0.8)',
    borderRadius: '50%',
    filter: 'blur(0.3px)',
  };

  const swirlsContainerStyles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: isCompact ? '36px' : '48px',
    height: isCompact ? '36px' : '48px',
    pointerEvents: 'none',
  };

  const swirl1Styles = {
    position: 'absolute',
    border: '1px solid rgba(244, 236, 216, 0.6)',
    borderRadius: '50%',
    width: isCompact ? '18px' : '24px',
    height: isCompact ? '9px' : '12px',
    top: isCompact ? '4px' : '6px',
    left: isCompact ? '-8px' : '-10px',
    borderRight: 'none',
    borderBottom: 'none',
    transform: 'rotate(-25deg)',
    borderWidth: '1.5px',
  };

  const swirl2Styles = {
    position: 'absolute',
    border: '1px solid rgba(244, 236, 216, 0.6)',
    borderRadius: '50%',
    width: isCompact ? '18px' : '24px',
    height: isCompact ? '9px' : '12px',
    top: isCompact ? '4px' : '6px',
    right: isCompact ? '-8px' : '-10px',
    borderLeft: 'none',
    borderBottom: 'none',
    transform: 'rotate(25deg)',
    borderWidth: '1.5px',
  };

  const textStyles = {
    fontFamily: '"Times New Roman", serif',
    fontWeight: 'bold',
    letterSpacing: '2px',
  };

  const humbleStyles = {
    ...textStyles,
    fontSize: isCompact ? '14px' : '18px',
    marginRight: '8px',
  };

  const pearlTextStyles = {
    ...textStyles,
    fontSize: isCompact ? '14px' : '18px',
    color: '#f4ecd8',
  };

  return (
    <Box sx={logoStyles}>
      <Box sx={pearlContainerStyles}>
        <Box sx={pearlStyles} />
        <Box sx={pearlHighlight1Styles} />
        <Box sx={pearlHighlight2Styles} />
        <Box sx={swirlsContainerStyles}>
          <Box sx={swirl1Styles} />
          <Box sx={swirl2Styles} />
        </Box>
      </Box>
      <Box sx={textStyles}>
        <Box component="span" sx={humbleStyles}>HUMBLE</Box>
        <Box component="span" sx={pearlTextStyles}>PEARL</Box>
      </Box>
    </Box>
  );
};

export default HumblePearlLogo;

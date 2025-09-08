// Image imports for easy access throughout the application
// This file centralizes all image imports and exports them for use in components

// Logo images
import humblePearlLogo from './logo/humblepearl.svg';

// Food images
import baconShrimp from './food/bacon_shrimp.JPG';
import carrotCupcakes from './food/carrot_cupcakes.jpg';
import carrotPotato from './food/carrot_potato.png';
import chickenRiceBowl from './food/chicken_rice_bowl.jpg';
import crabBoil from './food/crab_boil.png';
import flowerCupcakes from './food/flower_cupcakes.jpg';
import grilledPineapples from './food/grilled_pineapples.JPG';
import tacos from './food/tacos.jpg';

// Event images (add your event photos here)
// import event1 from './events/event1.jpg';
// import event2 from './events/event2.jpg';

// Team images
import joeChristina from './other/joe&Christina.jpg';

// Export all images as an object for easy access
export const images = {
  logo: {
    humblePearl: humblePearlLogo,
  },
  food: {
    baconShrimp,
    carrotCupcakes,
    carrotPotato,
    chickenRiceBowl,
    crabBoil,
    flowerCupcakes,
    grilledPineapples,
    tacos,
  },
  events: {
    // Add your event images here
    // event1,
    // event2,
  },
  team: {
    joeChristina,
  },
};

// Export individual images for direct import
export { 
  humblePearlLogo,
  baconShrimp, carrotCupcakes, carrotPotato, chickenRiceBowl, crabBoil, flowerCupcakes, grilledPineapples, tacos,
  joeChristina
};

// Helper function to get image by path
export const getImage = (category, name) => {
  return images[category]?.[name] || null;
};

# Assets Folder

This folder contains all the static assets for your Humble Pearl Catering application.

## Folder Structure

```
assets/
├── images/
│   ├── logo/          # Company logos and branding images
│   ├── food/          # Food photography and menu images
│   ├── events/        # Event photos and gallery images
│   └── index.js       # Centralized image imports
└── README.md          # This file
```

## How to Add Images

### Method 1: Using the Assets Folder (Recommended for React)

1. **Add your image files** to the appropriate subfolder:
   - `images/logo/` - for logos and branding
   - `images/food/` - for food photos
   - `images/events/` - for event photos

2. **Import the image** in `images/index.js`:
   ```javascript
   import myNewImage from './food/my-new-dish.jpg';
   ```

3. **Add it to the exports**:
   ```javascript
   export const images = {
     food: {
       myNewDish: myNewImage,
       // ... other food images
     },
   };
   ```

4. **Use in your components**:
   ```javascript
   import { images } from '../assets/images';
   
   // In your component
   <img src={images.food.myNewDish} alt="My New Dish" />
   ```

### Method 2: Using the Public Folder

1. **Add images** to the `public/` folder
2. **Reference them** with absolute paths:
   ```javascript
   <img src="/my-image.jpg" alt="My Image" />
   ```

## Image Optimization Tips

- Use WebP format when possible for better compression
- Optimize images before adding them (recommended max width: 1920px)
- Use descriptive filenames (e.g., `chicken-adobo-main.jpg` instead of `img1.jpg`)
- Consider creating different sizes for responsive images

## Current Images

- **Logo**: `humblepearl.jpg` (available in both public and assets folders)

## Usage Examples

```javascript
// Import specific image
import { humblePearlLogo } from '../assets/images';

// Import all images
import { images } from '../assets/images';

// Use in component
<Box component="img" src={humblePearlLogo} alt="Humble Pearl Logo" />
```

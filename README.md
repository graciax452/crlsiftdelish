# Ctrl+Shift+Delish Recipe Website

A modern, responsive static website for sharing recipes with images and YouTube video links. Perfect for food bloggers and cooking enthusiasts who want to showcase their culinary creations.

## Features

- 🍳 **Recipe Collection**: Display recipes with images, cooking time, and difficulty levels
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- 🎥 **YouTube Integration**: Link recipes to cooking video tutorials
- 🎨 **Modern UI**: Clean, professional design with smooth animations
- 📋 **Detailed View**: Modal popup with ingredients and step-by-step instructions
- 🚀 **GitHub Pages Ready**: Optimized for easy deployment to GitHub Pages

## Quick Start

1. **Clone or download** this repository
2. **Customize the recipes** in `js/script.js` by editing the `recipes` array
3. **Replace placeholder images** with your actual recipe photos
4. **Update YouTube video IDs** with your cooking tutorial videos
5. **Deploy to GitHub Pages** for free hosting

## Customizing Your Recipes

Edit the `recipes` array in `js/script.js`:

```javascript
const recipes = [
    {
        id: 1,
        title: "Your Recipe Name",
        description: "Brief description of your recipe",
        image: "path/to/your/image.jpg",
        time: "30 mins",
        difficulty: "Easy",
        youtubeId: "YOUR_YOUTUBE_VIDEO_ID",
        ingredients: [
            "Ingredient 1",
            "Ingredient 2",
            // Add more ingredients...
        ],
        instructions: [
            "Step 1: Do something",
            "Step 2: Do something else",
            // Add more steps...
        ]
    },
    // Add more recipes...
];
```

## Adding Images

1. Create an `images` folder in your project
2. Add your recipe photos to this folder
3. Update the `image` property in your recipes to point to your images:
   ```javascript
   image: "images/your-recipe-photo.jpg"
   ```

## YouTube Video Integration

1. Upload your cooking videos to YouTube
2. Get the video ID from the YouTube URL:
   - URL: `https://youtube.com/watch?v=dQw4w9WgXcQ`
   - Video ID: `dQw4w9WgXcQ`
3. Add the video ID to your recipe's `youtubeId` property

## Deployment to GitHub Pages

1. **Create a GitHub repository** for your recipe website
2. **Upload all files** to your repository
3. **Enable GitHub Pages** in your repository settings:
   - Go to Settings > Pages
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click Save
4. **Access your website** at `https://yourusername.github.io/your-repo-name`

## File Structure

```
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styling
├── js/
│   └── script.js       # JavaScript functionality and recipe data
├── images/             # Your recipe images (create this folder)
├── README.md           # This file
└── .github/
    └── copilot-instructions.md
```

## Customization Tips

- **Colors**: Update CSS custom properties in `:root` to change the color scheme
- **Fonts**: Replace Google Fonts link in HTML to use different typography
- **Layout**: Modify the CSS grid in `.recipe-grid` to change recipe card layout
- **Content**: Update the hero section and about section to reflect your brand

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive functionality
- **Font Awesome**: Icons
- **Google Fonts**: Typography

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you need help customizing your recipe website, feel free to:
- Open an issue on GitHub
- Check the documentation
- Look at the code comments for guidance

---

**Happy Cooking! 🍳✨**

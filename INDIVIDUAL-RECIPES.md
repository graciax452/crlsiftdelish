# Individual Recipe File System Documentation

## 🎯 Perfect for 1000+ Recipes!

This system stores each recipe as a separate file, making it incredibly easy to manage thousands of recipes.

## 📁 Project Structure

```
js/recipes/
├── individual/                       # Individual recipe files
│   ├── classic-chocolate-chip-cookies.js
│   ├── homemade-focaccia-bread.js
│   ├── apple-crisp.js
│   ├── butter-scones.js
│   ├── cinnamon-rolls.js
│   ├── vanilla-fudge.js
│   └── [unlimited more recipes...]
├── recipe-registry.js                # Central index of all recipes
├── individual-recipe-manager.js      # Smart loading system
└── individual-recipe-loader.js       # Simple initialization
```

## ✨ Key Benefits for Large Recipe Collections

### 🔥 Unlimited Scalability
- **1000+ recipes**: Each recipe is its own file
- **Easy management**: Find and edit any recipe instantly
- **Team collaboration**: Multiple developers can work simultaneously
- **Version control**: Clean git history with individual file changes

### ⚡ Performance Optimized
- **Lazy loading**: Only loads recipes when needed
- **Smart caching**: Loaded recipes stay in memory
- **Preloading**: Popular recipes load first
- **Minimal bundle**: Core system is lightweight

### 🛠️ Developer Friendly
- **Simple structure**: Each recipe follows the same pattern
- **Easy addition**: Just create a new file and registry entry
- **No build process**: Works directly in the browser
- **Clear naming**: Kebab-case filenames for consistency

## 📝 Adding New Recipes (Super Easy!)

### Step 1: Create Recipe File
Create a new file in `js/recipes/individual/` with a kebab-case name:

**Example: `js/recipes/individual/chocolate-brownies.js`**
```javascript
const RECIPE_DATA = {
    id: 7, // Next available ID
    title: "Chocolate Brownies",
    description: "Rich, fudgy brownies that are perfect for any occasion.",
    image: "images/chocolate-brownies.jpg",
    time: "45 mins",
    difficulty: "Easy",
    category: "Desserts",
    youtubeId: "your-video-id",
    tags: ["chocolate", "brownies", "dessert", "easy"],
    servings: 16,
    prepTime: "15 mins",
    cookTime: "30 mins",
    ingredients: [
        "1 cup butter",
        "2 cups sugar",
        // ... more ingredients
    ],
    instructions: [
        "Preheat oven to 350°F...",
        // ... more steps
    ],
    tips: [
        "Don't overbake for fudgy texture",
        // ... more tips
    ],
    nutrition: {
        calories: 250,
        fat: "12g",
        carbs: "35g",
        protein: "3g"
    }
};

// Export for the recipe system
if (typeof window !== 'undefined') {
    window.CHOCOLATE_BROWNIES = RECIPE_DATA;
}

console.log(`🍫 Loaded recipe: ${RECIPE_DATA.title}`);
```

### Step 2: Add to Registry
Add an entry in `js/recipes/recipe-registry.js`:

```javascript
{
    id: 7,
    file: "js/recipes/individual/chocolate-brownies.js",
    variable: "CHOCOLATE_BROWNIES",
    filename: "chocolate-brownies",
    title: "Chocolate Brownies",
    category: "Desserts",
    difficulty: "Easy",
    time: "45 mins"
}
```

### That's it! ✅
The system automatically discovers and loads your new recipe!

## 🔍 Usage Examples

### Basic Usage (Same as Before)
```javascript
// Get all recipes (loads as needed)
const recipes = await RecipeUtils.getAllRecipes();

// Get specific recipe (loads only that file)
const recipe = await RecipeUtils.getRecipeById(7);

// Search recipes (loads matching files)
const results = await RecipeUtils.searchRecipes('chocolate');
```

### Advanced Performance Features
```javascript
// Preload popular recipes for better UX
await RecipeUtils.preloadRecipes([1, 3, 7]);

// Get stats without loading all recipes
const stats = RecipeUtils.getStats();

// Load recipes by category (efficient)
const desserts = await RecipeUtils.getRecipesByCategory('Desserts');
```

## 📊 File Naming Convention

**Always use kebab-case for filenames:**

| Recipe Title | Filename |
|--------------|----------|
| "Chocolate Chip Cookies" | `chocolate-chip-cookies.js` |
| "Mom's Apple Pie" | `moms-apple-pie.js` |
| "5-Minute Pasta Salad" | `5-minute-pasta-salad.js` |
| "BBQ Pulled Pork" | `bbq-pulled-pork.js` |

## 🚀 Recipe Template

Copy this template for new recipes:

```javascript
// [Recipe Name] Recipe
// Individual recipe file for easy management

const RECIPE_DATA = {
    id: 0, // CHANGE THIS TO NEXT AVAILABLE ID
    title: "Recipe Name",
    description: "Brief description of the recipe.",
    image: "images/recipe-image.jpg",
    time: "Total time",
    difficulty: "Easy|Medium|Hard",
    category: "Category name",
    youtubeId: "optional-video-id",
    tags: ["tag1", "tag2", "tag3"],
    servings: 0,
    prepTime: "Prep time",
    cookTime: "Cook time",
    ingredients: [
        "Ingredient 1",
        "Ingredient 2"
        // Add all ingredients
    ],
    instructions: [
        "Step 1 instructions",
        "Step 2 instructions"
        // Add all steps
    ],
    tips: [
        "Helpful tip 1",
        "Helpful tip 2"
    ],
    nutrition: {
        calories: 0,
        fat: "0g",
        carbs: "0g",
        protein: "0g"
    }
};

// Export for the recipe system
if (typeof window !== 'undefined') {
    window.RECIPE_VARIABLE_NAME = RECIPE_DATA; // CHANGE THIS
}

console.log(`🍽️ Loaded recipe: ${RECIPE_DATA.title}`);
```

## 🎯 Categories You Can Use

- **Desserts**: Cakes, cookies, pies, candy
- **Breakfast**: Pancakes, eggs, cereals, smoothies
- **Bread**: All types of bread and baking
- **Dinner**: Main courses, meat, seafood
- **Appetizers**: Starters, snacks, finger foods
- **Beverages**: Drinks, cocktails, smoothies
- **Salads**: All types of salads
- **Soups**: Hot and cold soups
- **Vegetarian**: Plant-based dishes
- **Quick & Easy**: 30-minute meals

## 📈 System Performance

- **Initial load**: Only loads registry (~1KB)
- **Recipe loading**: Individual files load on demand
- **Memory efficient**: Recipes can be cleared when not needed
- **Cache friendly**: Browser caches individual files
- **Scalable**: Performance doesn't degrade with more recipes

## 🔧 Migration from Other Systems

The individual system maintains full backward compatibility:
- All existing `RecipeUtils` calls work unchanged
- Same async API as before
- Automatic fallback to legacy systems
- Progressive enhancement approach

This system is designed to scale infinitely while maintaining excellent performance and developer experience! 🚀

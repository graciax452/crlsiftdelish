// Test Recipe Loader - Ultra Simple Version
console.log('🧪 Test loader starting...');

// Manual recipe data for testing
window.RECIPES_DATA = [
    {
        id: 1,
        title: "Test Recipe 1",
        description: "This is a test recipe to verify the system works.",
        image: "images/chocolate-fudge.jpg",
        time: "30 mins",
        difficulty: "Easy",
        category: "Test",
        ingredients: ["Test ingredient 1", "Test ingredient 2"],
        instructions: ["Test step 1", "Test step 2"],
        youtubeId: null
    },
    {
        id: 2,
        title: "Test Recipe 2",
        description: "Another test recipe to verify multiple recipes work.",
        image: "images/focaccia-bread.jpg",
        time: "45 mins",
        difficulty: "Medium",
        category: "Test",
        ingredients: ["Test ingredient 3", "Test ingredient 4"],
        instructions: ["Test step 3", "Test step 4"],
        youtubeId: null
    }
];

// Simple RecipeUtils
window.RecipeUtils = {
    getAllRecipes: async () => {
        return window.RECIPES_DATA || [];
    },
    getRecipeById: async (id) => {
        const recipes = await window.RecipeUtils.getAllRecipes();
        return recipes.find(recipe => recipe.id === parseInt(id));
    }
};

console.log('🧪 Test loader ready with', window.RECIPES_DATA.length, 'test recipes');

// Fire the event
setTimeout(() => {
    window.dispatchEvent(new CustomEvent('recipesLoaded', {
        detail: {
            recipeCount: window.RECIPES_DATA.length,
            system: 'simple-individual'
        }
    }));
    console.log('🧪 Test recipesLoaded event fired');
}, 100);

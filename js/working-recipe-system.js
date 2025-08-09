// Working Recipe System - All Data Included
console.log('Loading recipe system...');

// Working Recipe System - Minimal placeholders for JSON replacement
console.log('Loading recipe system...');

// Minimal placeholder data - will be replaced by JSON files
window.RECIPES_DATA = [
    {
        id: 1,
        title: "Loading...",
        description: "Recipe data loading from JSON file",
        ingredients: ["Loading..."],
        instructions: ["Loading..."]
    },
    {
        id: 2,
        title: "Loading...",
        description: "Recipe data loading from JSON file",
        ingredients: ["Loading..."],
        instructions: ["Loading..."]
    },
    {
        id: 3,
        title: "Loading...",
        description: "Recipe data loading from JSON file",
        ingredients: ["Loading..."],
        instructions: ["Loading..."]
    },
    {
        id: 4,
        title: "Loading...",
        description: "Recipe data loading from JSON file",
        ingredients: ["Loading..."],
        instructions: ["Loading..."]
    },
    {
        id: 5,
        title: "Loading...",
        description: "Recipe data loading from JSON file",
        ingredients: ["Loading..."],
        instructions: ["Loading..."]
    },
    {
        id: 6,
        title: "Loading...",
        description: "Recipe data loading from JSON file",
        ingredients: ["Loading..."],
        instructions: ["Loading..."]
    }
];

// Simple RecipeUtils
window.RecipeUtils = {
    getAllRecipes: async () => {
        return window.RECIPES_DATA;
    },
    
    getRecipeById: async (id) => {
        const recipes = await window.RecipeUtils.getAllRecipes();
        return recipes.find(recipe => recipe.id === parseInt(id));
    },
    
    getRecipesByCategory: async (category) => {
        const recipes = await window.RecipeUtils.getAllRecipes();
        return recipes.filter(recipe => recipe.category === category);
    },
    
    getCategories: async () => {
        const recipes = await window.RecipeUtils.getAllRecipes();
        return [...new Set(recipes.map(recipe => recipe.category))];
    },
    
    getDifficulties: async () => {
        const recipes = await window.RecipeUtils.getAllRecipes();
        return [...new Set(recipes.map(recipe => recipe.difficulty))];
    }
};

console.log('Recipe system loaded with', window.RECIPES_DATA.length, 'placeholder entries - JSON loader will replace with actual data');

// Fire ready event immediately
setTimeout(() => {
    window.dispatchEvent(new CustomEvent('recipesLoaded', {
        detail: {
            recipeCount: window.RECIPES_DATA.length,
            system: 'simple-individual'
        }
    }));
    console.log('Recipe system ready - awaiting JSON replacement');
}, 10);

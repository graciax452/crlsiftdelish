// Simple Individual Recipe System - Direct Loading
// Loads all individual recipe files directly for reliability

console.log('🍳 Loading simple individual recipe system...');

// Direct recipe data container
window.RECIPES_DATA = [];

// Simple recipe loader that works with file protocol
class SimpleRecipeLoader {
    constructor() {
        this.loadedRecipes = [];
        this.isLoaded = false;
    }

    async loadAllRecipes() {
        console.log('📦 Loading all individual recipe files...');
        
        try {
            // Define all recipe files to load
            const recipeFiles = [
                'js/recipes/individual/classic-chocolate-chip-cookies.js',
                'js/recipes/individual/homemade-focaccia-bread.js',
                'js/recipes/individual/apple-crisp.js',
                'js/recipes/individual/butter-scones.js',
                'js/recipes/individual/cinnamon-rolls.js',
                'js/recipes/individual/vanilla-fudge.js'
            ];

            this.loadedRecipes = [];

            // Load each recipe file and collect data immediately
            for (const file of recipeFiles) {
                try {
                    await this.loadScript(file);
                    
                    // Collect the RECIPE_DATA immediately after loading
                    if (window.RECIPE_DATA) {
                        this.loadedRecipes.push({ ...window.RECIPE_DATA });
                        console.log(`✅ Loaded recipe: ${window.RECIPE_DATA.title}`);
                        // Clear the global variable to prevent conflicts
                        window.RECIPE_DATA = null;
                    }
                } catch (error) {
                    console.warn(`⚠️ Failed to load ${file}:`, error);
                }
            }

            // Sort by ID and set global data
            this.loadedRecipes.sort((a, b) => a.id - b.id);
            window.RECIPES_DATA = this.loadedRecipes;
            this.isLoaded = true;
            
            console.log(`🎉 Successfully loaded ${this.loadedRecipes.length} recipes`);
            return true;
            
        } catch (error) {
            console.error('❌ Failed to load recipes:', error);
            return false;
        }
    }

    loadScript(src) {
        return new Promise((resolve, reject) => {
            // Check if script already exists
            const existingScript = document.querySelector(`script[src="${src}"]`);
            if (existingScript) {
                resolve();
                return;
            }

            const script = document.createElement('script');
            script.src = src;
            script.onload = () => resolve();
            script.onerror = () => reject(new Error(`Failed to load: ${src}`));
            document.head.appendChild(script);
        });
    }

    getRecipes() {
        return this.loadedRecipes;
    }
}

// Create loader instance
const simpleRecipeLoader = new SimpleRecipeLoader();

// Simple RecipeUtils for compatibility
const RecipeUtils = {
    getAllRecipes: async () => {
        if (!simpleRecipeLoader.isLoaded) {
            await simpleRecipeLoader.loadAllRecipes();
        }
        return simpleRecipeLoader.getRecipes();
    },
    
    getRecipeById: async (id) => {
        const recipes = await RecipeUtils.getAllRecipes();
        return recipes.find(recipe => recipe.id === parseInt(id));
    },
    
    getRecipesByCategory: async (category) => {
        const recipes = await RecipeUtils.getAllRecipes();
        return recipes.filter(recipe => recipe.category === category);
    },
    
    getRecipesByDifficulty: async (difficulty) => {
        const recipes = await RecipeUtils.getAllRecipes();
        return recipes.filter(recipe => recipe.difficulty === difficulty);
    },
    
    searchRecipes: async (searchTerm) => {
        const recipes = await RecipeUtils.getAllRecipes();
        const term = searchTerm.toLowerCase();
        return recipes.filter(recipe => 
            recipe.title.toLowerCase().includes(term) || 
            recipe.description.toLowerCase().includes(term) ||
            recipe.category.toLowerCase().includes(term)
        );
    },
    
    getRecipeCount: async () => {
        const recipes = await RecipeUtils.getAllRecipes();
        return recipes.length;
    },
    
    getCategories: async () => {
        const recipes = await RecipeUtils.getAllRecipes();
        return [...new Set(recipes.map(recipe => recipe.category))];
    },
    
    getDifficulties: async () => {
        const recipes = await RecipeUtils.getAllRecipes();
        return [...new Set(recipes.map(recipe => recipe.difficulty))];
    }
};

// Auto-initialize
async function initializeSimpleRecipeSystem() {
    console.log('🚀 Initializing simple recipe system...');
    console.log('📍 Current location:', window.location.href);
    console.log('🔍 Document ready state:', document.readyState);
    
    try {
        const success = await simpleRecipeLoader.loadAllRecipes();
        
        if (success && simpleRecipeLoader.getRecipes().length > 0) {
            console.log(`✅ Simple recipe system ready with ${simpleRecipeLoader.getRecipes().length} recipes!`);
            
            // Set global data
            window.RECIPES_DATA = simpleRecipeLoader.getRecipes();
            
            // Notify the app
            window.dispatchEvent(new CustomEvent('recipesLoaded', {
                detail: {
                    recipeCount: simpleRecipeLoader.getRecipes().length,
                    system: 'simple-individual'
                }
            }));
            
            return true;
        } else {
            throw new Error('No recipes loaded successfully');
        }
        
    } catch (error) {
        console.error('❌ Simple recipe system failed:', error);
        console.error('🔍 Error stack:', error.stack);
        
        // Try to provide fallback data
        const fallbackRecipes = [
            {
                id: 1,
                title: "System Loading...",
                description: "Recipe system is initializing. Please refresh the page.",
                image: "images/chocolate-fudge.jpg",
                time: "Loading...",
                difficulty: "Easy",
                category: "System",
                ingredients: ["Recipe system is loading..."],
                instructions: ["Please refresh the page to try loading recipes again."],
                youtubeId: null
            }
        ];
        
        window.RECIPES_DATA = fallbackRecipes;
        simpleRecipeLoader.loadedRecipes = fallbackRecipes;
        simpleRecipeLoader.isLoaded = true;
        
        // Still notify, but with error info
        window.dispatchEvent(new CustomEvent('recipesLoaded', {
            detail: {
                recipeCount: 1,
                system: 'simple-individual',
                error: error.message
            }
        }));
        
        return false;
    }
}

// Export globals
window.RecipeUtils = RecipeUtils;
window.simpleRecipeLoader = simpleRecipeLoader;
window.initializeSimpleRecipeSystem = initializeSimpleRecipeSystem;

// Auto-start when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeSimpleRecipeSystem);
} else {
    initializeSimpleRecipeSystem();
}

console.log('✨ Simple individual recipe system loaded!');

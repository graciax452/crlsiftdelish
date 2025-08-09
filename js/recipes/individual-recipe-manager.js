// Individual Recipe Manager - Loads recipes from separate files
// Perfect for managing 1000+ recipes with easy file management

class IndividualRecipeManager {
    constructor() {
        this.loadedRecipes = new Map();
        this.recipeRegistry = null;
        this.isInitialized = false;
        this.loadingPromises = new Map();
    }

    // Initialize the recipe manager
    async initialize() {
        console.log('🚀 Initializing Individual Recipe Manager...');
        
        try {
            // Load the recipe registry first
            await this._loadRegistry();
            
            this.isInitialized = true;
            console.log(`✅ Recipe Manager initialized with registry of ${this.recipeRegistry.length} recipes`);
            
            return true;
        } catch (error) {
            console.error('❌ Failed to initialize Recipe Manager:', error);
            return false;
        }
    }

    // Load the recipe registry
    async _loadRegistry() {
        await this._loadScript('js/recipes/recipe-registry.js');
        
        if (!window.RECIPE_REGISTRY) {
            throw new Error('Recipe registry not found after loading');
        }
        
        this.recipeRegistry = window.RECIPE_REGISTRY;
        console.log(`📚 Recipe registry loaded with ${this.recipeRegistry.length} entries`);
    }

    // Load a specific recipe by ID
    async loadRecipe(id) {
        const recipeId = parseInt(id);
        
        // Check if already loaded
        if (this.loadedRecipes.has(recipeId)) {
            return this.loadedRecipes.get(recipeId);
        }

        // Check if already loading
        if (this.loadingPromises.has(recipeId)) {
            return this.loadingPromises.get(recipeId);
        }

        // Find recipe in registry
        const registryEntry = this.recipeRegistry.find(r => r.id === recipeId);
        if (!registryEntry) {
            throw new Error(`Recipe with ID ${recipeId} not found in registry`);
        }

        // Create loading promise
        const loadingPromise = this._loadIndividualRecipe(registryEntry);
        this.loadingPromises.set(recipeId, loadingPromise);

        try {
            const recipe = await loadingPromise;
            this.loadedRecipes.set(recipeId, recipe);
            this.loadingPromises.delete(recipeId);
            return recipe;
        } catch (error) {
            this.loadingPromises.delete(recipeId);
            throw error;
        }
    }

    // Load an individual recipe file
    async _loadIndividualRecipe(registryEntry) {
        console.log(`📦 Loading recipe: ${registryEntry.title}`);
        
        try {
            // Load the recipe script
            await this._loadScript(registryEntry.file);
            
            // Get the recipe data from the global variable
            const recipeData = window[registryEntry.variable];
            if (!recipeData) {
                throw new Error(`Recipe data '${registryEntry.variable}' not found after loading ${registryEntry.file}`);
            }

            console.log(`✅ Loaded recipe: ${recipeData.title}`);
            return recipeData;
        } catch (error) {
            console.error(`❌ Failed to load recipe ${registryEntry.title}:`, error);
            throw error;
        }
    }

    // Load multiple recipes (for bulk loading)
    async loadRecipes(ids) {
        const loadPromises = ids.map(id => this.loadRecipe(id));
        return Promise.all(loadPromises);
    }

    // Load all recipes
    async loadAllRecipes() {
        if (!this.isInitialized) {
            await this.initialize();
        }

        const allIds = this.recipeRegistry.map(entry => entry.id);
        return this.loadRecipes(allIds);
    }

    // Get recipe by ID (loads if needed)
    async getRecipeById(id) {
        if (!this.isInitialized) {
            await this.initialize();
        }
        
        return this.loadRecipe(id);
    }

    // Get all recipes (loads all if needed)
    async getAllRecipes() {
        if (!this.isInitialized) {
            await this.initialize();
        }

        // If we haven't loaded all recipes yet, load them
        const allIds = this.recipeRegistry.map(entry => entry.id);
        const notLoaded = allIds.filter(id => !this.loadedRecipes.has(id));
        
        if (notLoaded.length > 0) {
            console.log(`📦 Loading ${notLoaded.length} remaining recipes...`);
            await this.loadRecipes(notLoaded);
        }

        // Return all loaded recipes in order
        return allIds.map(id => this.loadedRecipes.get(id));
    }

    // Get recipes by category (loads as needed)
    async getRecipesByCategory(category) {
        if (!this.isInitialized) {
            await this.initialize();
        }

        const categoryEntries = this.recipeRegistry.filter(entry => entry.category === category);
        const categoryIds = categoryEntries.map(entry => entry.id);
        
        return this.loadRecipes(categoryIds);
    }

    // Search recipes (loads as needed)
    async searchRecipes(searchTerm) {
        if (!this.isInitialized) {
            await this.initialize();
        }

        // First search the registry for matches
        const matchingEntries = window.RecipeRegistry.search(searchTerm);
        const matchingIds = matchingEntries.map(entry => entry.id);
        
        // Load the matching recipes
        const loadedRecipes = await this.loadRecipes(matchingIds);
        
        // Do a more detailed search on loaded content
        const term = searchTerm.toLowerCase();
        return loadedRecipes.filter(recipe => 
            recipe.title.toLowerCase().includes(term) || 
            recipe.description.toLowerCase().includes(term) ||
            recipe.category.toLowerCase().includes(term) ||
            (recipe.tags && recipe.tags.some(tag => tag.includes(term)))
        );
    }

    // Get recipes by difficulty
    async getRecipesByDifficulty(difficulty) {
        if (!this.isInitialized) {
            await this.initialize();
        }

        const difficultyEntries = this.recipeRegistry.filter(entry => entry.difficulty === difficulty);
        const difficultyIds = difficultyEntries.map(entry => entry.id);
        
        return this.loadRecipes(difficultyIds);
    }

    // Get stats about loaded recipes
    getStats() {
        if (!this.recipeRegistry) {
            return { error: 'Registry not loaded' };
        }

        return {
            registryCount: this.recipeRegistry.length,
            loadedCount: this.loadedRecipes.size,
            loadingCount: this.loadingPromises.size,
            categories: window.RecipeRegistry.getCategories(),
            difficulties: window.RecipeRegistry.getDifficulties(),
            breakdown: window.RecipeRegistry.getStats()
        };
    }

    // Helper method to load scripts dynamically
    _loadScript(src) {
        return new Promise((resolve, reject) => {
            // Check if script is already loaded
            const existingScript = document.querySelector(`script[src="${src}"]`);
            if (existingScript) {
                resolve();
                return;
            }

            const script = document.createElement('script');
            script.src = src;
            script.onload = resolve;
            script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
            document.head.appendChild(script);
        });
    }

    // Get available categories without loading recipes
    getAvailableCategories() {
        if (!this.recipeRegistry) return [];
        return window.RecipeRegistry.getCategories();
    }

    // Get available difficulties without loading recipes
    getAvailableDifficulties() {
        if (!this.recipeRegistry) return [];
        return window.RecipeRegistry.getDifficulties();
    }

    // Get recipe count without loading all recipes
    getRecipeCount() {
        if (!this.recipeRegistry) return 0;
        return this.recipeRegistry.length;
    }

    // Preload specific recipes for better performance
    async preloadRecipes(ids) {
        console.log(`🚀 Preloading ${ids.length} recipes...`);
        return this.loadRecipes(ids);
    }

    // Clear loaded recipes (for memory management)
    clearLoadedRecipes() {
        this.loadedRecipes.clear();
        console.log('🧹 Cleared loaded recipes from memory');
    }
}

// Create global instance
const individualRecipeManager = new IndividualRecipeManager();

// Export RecipeUtils for backward compatibility
const RecipeUtils = {
    // Async wrapper methods for backward compatibility
    getAllRecipes: () => individualRecipeManager.getAllRecipes(),
    getRecipeById: (id) => individualRecipeManager.getRecipeById(id),
    getRecipesByCategory: (category) => individualRecipeManager.getRecipesByCategory(category),
    getRecipesByDifficulty: (difficulty) => individualRecipeManager.getRecipesByDifficulty(difficulty),
    searchRecipes: (searchTerm) => individualRecipeManager.searchRecipes(searchTerm),
    getRecipeCount: () => individualRecipeManager.getRecipeCount(),
    getCategories: () => individualRecipeManager.getAvailableCategories(),
    getDifficulties: () => individualRecipeManager.getAvailableDifficulties(),
    
    // New methods
    manager: individualRecipeManager,
    getStats: () => individualRecipeManager.getStats(),
    preloadRecipes: (ids) => individualRecipeManager.preloadRecipes(ids)
};

// Global exports
if (typeof window !== 'undefined') {
    window.IndividualRecipeManager = IndividualRecipeManager;
    window.individualRecipeManager = individualRecipeManager;
    window.RecipeUtils = RecipeUtils;
}

console.log('🎯 Individual Recipe Manager loaded - Perfect for 1000+ recipes!');

// Recipe Manager - Advanced Modular System
// Manages loading and coordination of recipe categories for scalability

class RecipeManager {
    constructor() {
        this.categories = new Map();
        this.loadedCategories = new Set();
        this.allRecipes = [];
        this.isInitialized = false;
        
        // Define available categories with their file paths
        this.categoryDefinitions = {
            'desserts': {
                file: 'js/recipes/categories/desserts.js',
                variable: 'DESSERTS_RECIPES',
                icon: '🍰',
                displayName: 'Desserts'
            },
            'bread': {
                file: 'js/recipes/categories/bread.js',
                variable: 'BREAD_RECIPES',
                icon: '🍞',
                displayName: 'Bread & Baking'
            },
            'breakfast': {
                file: 'js/recipes/categories/breakfast.js',
                variable: 'BREAKFAST_RECIPES',
                icon: '🥞',
                displayName: 'Breakfast'
            }
            // Easy to add more categories:
            // 'dinner': { file: 'js/recipes/categories/dinner.js', variable: 'DINNER_RECIPES', icon: '🍽️' },
            // 'appetizers': { file: 'js/recipes/categories/appetizers.js', variable: 'APPETIZER_RECIPES', icon: '🥗' },
            // 'beverages': { file: 'js/recipes/categories/beverages.js', variable: 'BEVERAGE_RECIPES', icon: '🥤' }
        };
    }

    // Initialize the recipe manager by loading all categories
    async initialize() {
        console.log('🚀 Initializing Recipe Manager...');
        
        try {
            // Load all categories in parallel for better performance
            const loadPromises = Object.keys(this.categoryDefinitions).map(category => 
                this.loadCategory(category)
            );
            
            await Promise.all(loadPromises);
            this._buildAllRecipesList();
            this.isInitialized = true;
            
            console.log(`✅ Recipe Manager initialized with ${this.allRecipes.length} recipes across ${this.loadedCategories.size} categories`);
            return true;
        } catch (error) {
            console.error('❌ Failed to initialize Recipe Manager:', error);
            return false;
        }
    }

    // Load a specific category dynamically
    async loadCategory(categoryName) {
        if (this.loadedCategories.has(categoryName)) {
            console.log(`📚 Category '${categoryName}' already loaded`);
            return this.categories.get(categoryName);
        }

        const categoryDef = this.categoryDefinitions[categoryName];
        if (!categoryDef) {
            throw new Error(`Category '${categoryName}' not defined`);
        }

        try {
            console.log(`📦 Loading category: ${categoryDef.displayName} (${categoryDef.icon})`);
            
            // Load the script dynamically
            await this._loadScript(categoryDef.file);
            
            // Get the category data from the global variable
            const categoryData = window[categoryDef.variable];
            if (!categoryData) {
                throw new Error(`Category data '${categoryDef.variable}' not found after loading ${categoryDef.file}`);
            }

            // Store the category data
            this.categories.set(categoryName, {
                name: categoryName,
                displayName: categoryDef.displayName,
                icon: categoryDef.icon,
                recipes: categoryData,
                count: categoryData.length
            });

            this.loadedCategories.add(categoryName);
            console.log(`✅ Loaded ${categoryData.length} recipes from ${categoryDef.displayName}`);
            
            return this.categories.get(categoryName);
        } catch (error) {
            console.error(`❌ Failed to load category '${categoryName}':`, error);
            throw error;
        }
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

    // Build the combined recipes list from all loaded categories
    _buildAllRecipesList() {
        this.allRecipes = [];
        for (const [categoryName, categoryData] of this.categories) {
            this.allRecipes.push(...categoryData.recipes);
        }
        
        // Sort by ID to maintain consistent order
        this.allRecipes.sort((a, b) => a.id - b.id);
    }

    // Get all recipes (loads all categories if not already loaded)
    async getAllRecipes() {
        if (!this.isInitialized) {
            await this.initialize();
        }
        return this.allRecipes;
    }

    // Get recipe by ID
    async getRecipeById(id) {
        const recipes = await this.getAllRecipes();
        return recipes.find(recipe => recipe.id === parseInt(id));
    }

    // Get recipes by category (loads specific category if needed)
    async getRecipesByCategory(categoryName) {
        await this.loadCategory(categoryName);
        const category = this.categories.get(categoryName);
        return category ? category.recipes : [];
    }

    // Get recipes by difficulty
    async getRecipesByDifficulty(difficulty) {
        const recipes = await this.getAllRecipes();
        return recipes.filter(recipe => recipe.difficulty === difficulty);
    }

    // Search recipes by title or description
    async searchRecipes(searchTerm) {
        const recipes = await this.getAllRecipes();
        const term = searchTerm.toLowerCase();
        return recipes.filter(recipe => 
            recipe.title.toLowerCase().includes(term) || 
            recipe.description.toLowerCase().includes(term) ||
            recipe.category.toLowerCase().includes(term)
        );
    }

    // Get total recipe count
    async getRecipeCount() {
        const recipes = await this.getAllRecipes();
        return recipes.length;
    }

    // Get all available categories
    getAvailableCategories() {
        return Object.keys(this.categoryDefinitions).map(key => ({
            name: key,
            displayName: this.categoryDefinitions[key].displayName,
            icon: this.categoryDefinitions[key].icon,
            loaded: this.loadedCategories.has(key),
            count: this.loadedCategories.has(key) ? this.categories.get(key).count : 0
        }));
    }

    // Get loaded categories with stats
    getLoadedCategories() {
        return Array.from(this.categories.values());
    }

    // Get all unique difficulty levels
    async getDifficulties() {
        const recipes = await this.getAllRecipes();
        return [...new Set(recipes.map(recipe => recipe.difficulty))];
    }

    // Lazy load a category only when needed
    async lazyLoadCategory(categoryName) {
        if (!this.loadedCategories.has(categoryName)) {
            await this.loadCategory(categoryName);
            this._buildAllRecipesList();
        }
        return this.categories.get(categoryName);
    }

    // Add a new recipe to a category (for future expansion)
    async addRecipeToCategory(categoryName, recipe) {
        await this.loadCategory(categoryName);
        const category = this.categories.get(categoryName);
        if (category) {
            // Assign a new ID
            recipe.id = Math.max(...this.allRecipes.map(r => r.id)) + 1;
            recipe.category = categoryName;
            
            category.recipes.push(recipe);
            category.count = category.recipes.length;
            this._buildAllRecipesList();
            
            console.log(`✅ Added recipe "${recipe.title}" to ${category.displayName}`);
            return recipe;
        }
        throw new Error(`Category '${categoryName}' not found`);
    }

    // Get statistics about the recipe collection
    async getStats() {
        const recipes = await this.getAllRecipes();
        const categories = this.getLoadedCategories();
        
        return {
            totalRecipes: recipes.length,
            categoriesLoaded: categories.length,
            categoriesAvailable: Object.keys(this.categoryDefinitions).length,
            difficultyBreakdown: this._groupBy(recipes, 'difficulty'),
            categoryBreakdown: categories.map(cat => ({
                name: cat.displayName,
                count: cat.count,
                icon: cat.icon
            }))
        };
    }

    // Helper method to group items by a property
    _groupBy(array, property) {
        return array.reduce((groups, item) => {
            const key = item[property];
            groups[key] = (groups[key] || 0) + 1;
            return groups;
        }, {});
    }
}

// Create global instance
const recipeManager = new RecipeManager();

// Export for compatibility with existing code
const RecipeUtils = {
    // Wrapper methods for backward compatibility
    getAllRecipes: () => recipeManager.getAllRecipes(),
    getRecipeById: (id) => recipeManager.getRecipeById(id),
    getRecipesByCategory: (category) => recipeManager.getRecipesByCategory(category),
    getRecipesByDifficulty: (difficulty) => recipeManager.getRecipesByDifficulty(difficulty),
    searchRecipes: (searchTerm) => recipeManager.searchRecipes(searchTerm),
    getRecipeCount: () => recipeManager.getRecipeCount(),
    getCategories: () => recipeManager.getDifficulties(),
    getDifficulties: () => recipeManager.getDifficulties(),
    
    // New advanced methods
    manager: recipeManager,
    getStats: () => recipeManager.getStats(),
    lazyLoadCategory: (category) => recipeManager.lazyLoadCategory(category)
};

// Global exports
if (typeof window !== 'undefined') {
    window.RecipeManager = RecipeManager;
    window.recipeManager = recipeManager;
    window.RecipeUtils = RecipeUtils;
}

console.log('🎯 Advanced Recipe Manager loaded - Ready for 1000+ recipes!');

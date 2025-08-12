// Simple Recipe Loader - Direct JSON loading
class RecipeLoader {
    constructor() {
        this.recipes = [];
        this.recipesLoaded = false;
        this.recipeFiles = [
            { id: 1, filename: 'tangzhong-cinnamon-rolls' },
            { id: 2, filename: 'homemade-focaccia-bread' },
            { id: 3, filename: 'apple-crisp' },
            { id: 4, filename: 'butter-scones' },
            { id: 5, filename: 'chocolate-fudge' },
            { id: 6, filename: 'vanilla-fudge' }
        ];
    }

    async loadAllRecipes() {
        if (this.recipesLoaded) {
            return this.recipes;
        }

        try {
            const loadPromises = this.recipeFiles.map(async (recipeFile) => {
                const response = await fetch(`data/recipes/${recipeFile.filename}.json`);
                if (response.ok) {
                    return await response.json();
                }
                throw new Error(`Failed to load ${recipeFile.filename}.json`);
            });

            this.recipes = await Promise.all(loadPromises);
            this.recipesLoaded = true;
            return this.recipes;
        } catch (error) {
            console.error('Error loading recipes:', error);
            throw error;
        }
    }

    async getRecipeById(id) {
        if (!this.recipesLoaded) {
            await this.loadAllRecipes();
        }
        return this.recipes.find(recipe => recipe.id === parseInt(id));
    }

    async getRecipesByCategory(category) {
        if (!this.recipesLoaded) {
            await this.loadAllRecipes();
        }
        return this.recipes.filter(recipe => recipe.category === category);
    }

    async getCategories() {
        if (!this.recipesLoaded) {
            await this.loadAllRecipes();
        }
        return [...new Set(this.recipes.map(recipe => recipe.category))];
    }

    async getDifficulties() {
        if (!this.recipesLoaded) {
            await this.loadAllRecipes();
        }
        return [...new Set(this.recipes.map(recipe => recipe.difficulty))];
    }
}

// Create global instance
window.recipeLoader = new RecipeLoader();

// Compatibility layer for existing code
window.RecipeUtils = {
    getAllRecipes: () => window.recipeLoader.loadAllRecipes(),
    getRecipeById: (id) => window.recipeLoader.getRecipeById(id),
    getRecipesByCategory: (category) => window.recipeLoader.getRecipesByCategory(category),
    getCategories: () => window.recipeLoader.getCategories(),
    getDifficulties: () => window.recipeLoader.getDifficulties()
};

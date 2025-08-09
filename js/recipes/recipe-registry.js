// Recipe Registry - Index of all individual recipe files
// Add new recipes to this registry to make them available to the system

const RECIPE_REGISTRY = [
    {
        id: 1,
        file: "js/recipes/individual/classic-chocolate-chip-cookies.js",
        variable: "CLASSIC_CHOCOLATE_CHIP_COOKIES",
        filename: "classic-chocolate-chip-cookies",
        title: "Classic Chocolate Chip Cookies",
        category: "Desserts",
        difficulty: "Easy",
        time: "25 mins"
    },
    {
        id: 2,
        file: "js/recipes/individual/homemade-focaccia-bread.js",
        variable: "HOMEMADE_FOCACCIA_BREAD",
        filename: "homemade-focaccia-bread",
        title: "Homemade Focaccia Bread",
        category: "Bread",
        difficulty: "Medium",
        time: "3 hours"
    },
    {
        id: 3,
        file: "js/recipes/individual/apple-crisp.js",
        variable: "APPLE_CRISP",
        filename: "apple-crisp",
        title: "Apple Crisp",
        category: "Desserts",
        difficulty: "Easy",
        time: "1 hour"
    },
    {
        id: 4,
        file: "js/recipes/individual/butter-scones.js",
        variable: "BUTTER_SCONES",
        filename: "butter-scones",
        title: "Butter Scones",
        category: "Breakfast",
        difficulty: "Medium",
        time: "30 mins"
    },
    {
        id: 5,
        file: "js/recipes/individual/cinnamon-rolls.js",
        variable: "CINNAMON_ROLLS",
        filename: "cinnamon-rolls",
        title: "Cinnamon Rolls",
        category: "Breakfast",
        difficulty: "Hard",
        time: "3 hours"
    },
    {
        id: 6,
        file: "js/recipes/individual/vanilla-fudge.js",
        variable: "VANILLA_FUDGE",
        filename: "vanilla-fudge",
        title: "Vanilla Fudge",
        category: "Desserts",
        difficulty: "Medium",
        time: "2 hours"
    }
    
    // TO ADD NEW RECIPES:
    // 1. Create a new recipe file in js/recipes/individual/recipe-name.js
    // 2. Add an entry here with the next ID number
    // 3. Follow the naming pattern: kebab-case for filenames
    
    // Example for adding a new recipe:
    // {
    //     id: 7,
    //     file: "js/recipes/individual/chocolate-brownies.js",
    //     variable: "CHOCOLATE_BROWNIES", 
    //     filename: "chocolate-brownies",
    //     title: "Chocolate Brownies",
    //     category: "Desserts",
    //     difficulty: "Easy",
    //     time: "45 mins"
    // }
];

// Helper functions for the registry
const RecipeRegistry = {
    // Get all recipe entries
    getAll: () => RECIPE_REGISTRY,
    
    // Get recipe entry by ID
    getById: (id) => RECIPE_REGISTRY.find(recipe => recipe.id === parseInt(id)),
    
    // Get recipes by category
    getByCategory: (category) => RECIPE_REGISTRY.filter(recipe => recipe.category === category),
    
    // Get recipes by difficulty
    getByDifficulty: (difficulty) => RECIPE_REGISTRY.filter(recipe => recipe.difficulty === difficulty),
    
    // Search recipes by title
    search: (term) => {
        const searchTerm = term.toLowerCase();
        return RECIPE_REGISTRY.filter(recipe => 
            recipe.title.toLowerCase().includes(searchTerm) ||
            recipe.category.toLowerCase().includes(searchTerm)
        );
    },
    
    // Get total count
    getCount: () => RECIPE_REGISTRY.length,
    
    // Get all categories
    getCategories: () => [...new Set(RECIPE_REGISTRY.map(recipe => recipe.category))],
    
    // Get all difficulties
    getDifficulties: () => [...new Set(RECIPE_REGISTRY.map(recipe => recipe.difficulty))],
    
    // Get stats
    getStats: () => ({
        total: RECIPE_REGISTRY.length,
        categories: [...new Set(RECIPE_REGISTRY.map(recipe => recipe.category))].length,
        difficulties: [...new Set(RECIPE_REGISTRY.map(recipe => recipe.difficulty))].length,
        categoryBreakdown: RECIPE_REGISTRY.reduce((acc, recipe) => {
            acc[recipe.category] = (acc[recipe.category] || 0) + 1;
            return acc;
        }, {}),
        difficultyBreakdown: RECIPE_REGISTRY.reduce((acc, recipe) => {
            acc[recipe.difficulty] = (acc[recipe.difficulty] || 0) + 1;
            return acc;
        }, {})
    })
};

// Export for use in other modules
if (typeof window !== 'undefined') {
    window.RECIPE_REGISTRY = RECIPE_REGISTRY;
    window.RecipeRegistry = RecipeRegistry;
} else if (typeof module !== 'undefined') {
    module.exports = { RECIPE_REGISTRY, RecipeRegistry };
}

console.log(`📚 Recipe Registry loaded with ${RECIPE_REGISTRY.length} recipe entries`);

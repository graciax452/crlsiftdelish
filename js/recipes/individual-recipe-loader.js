// Individual Recipe Loader - Simple initialization for the file-based system
// Loads the individual recipe management system

console.log('📚 Loading individual recipe system...');

// Initialize the individual recipe system
async function initializeIndividualRecipeSystem() {
    try {
        console.log('🚀 Initializing individual recipe system...');
        
        // Initialize the individual recipe manager
        const success = await individualRecipeManager.initialize();
        
        if (!success) {
            throw new Error('Failed to initialize individual recipe manager');
        }
        
        // For better performance, we can preload a few popular recipes
        // You can customize this list based on your most viewed recipes
        const popularRecipeIds = [1, 3, 6]; // Cookies, Apple Crisp, Vanilla Fudge
        await individualRecipeManager.preloadRecipes(popularRecipeIds);
        
        // For backward compatibility, load all recipes and populate RECIPES_DATA
        const allRecipes = await individualRecipeManager.getAllRecipes();
        window.RECIPES_DATA = allRecipes;
        
        console.log(`✅ Individual recipe system initialized with ${allRecipes.length} recipes`);
        
        // Show system stats
        const stats = individualRecipeManager.getStats();
        console.log('📊 System Stats:', stats);
        
        // Dispatch event to notify other parts of the app
        window.dispatchEvent(new CustomEvent('recipesLoaded', { 
            detail: { 
                recipeCount: allRecipes.length,
                system: 'individual',
                stats: stats
            }
        }));
        
        return true;
    } catch (error) {
        console.error('❌ Failed to initialize individual recipe system:', error);
        
        // Fallback: try to load legacy system
        console.log('🔄 Attempting fallback to legacy system...');
        try {
            if (window.RECIPES_DATA && window.RECIPES_DATA.length > 0) {
                console.log('✅ Fallback to legacy system successful');
                return true;
            }
        } catch (fallbackError) {
            console.error('❌ Fallback failed:', fallbackError);
        }
        
        return false;
    }
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeIndividualRecipeSystem);
} else {
    // DOM is already ready
    initializeIndividualRecipeSystem();
}

// Export for manual initialization if needed
window.initializeIndividualRecipeSystem = initializeIndividualRecipeSystem;

// Helper function to add a new recipe (for future use)
window.addNewRecipe = async function(recipeData, filename) {
    console.log(`📝 Adding new recipe: ${recipeData.title}`);
    
    // This would be used with a build system or admin interface
    // For now, it shows how easy it would be to add recipes
    
    const kebabFilename = filename || recipeData.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
    
    console.log(`💡 To add this recipe:`);
    console.log(`1. Create file: js/recipes/individual/${kebabFilename}.js`);
    console.log(`2. Add entry to js/recipes/recipe-registry.js`);
    console.log(`3. The system will automatically load it!`);
    
    return kebabFilename;
};

console.log('✨ Individual recipe system ready - Perfect for unlimited recipes!');

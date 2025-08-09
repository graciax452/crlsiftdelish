// Recipe Data Loader - Simplified interface for the modular system
// This file provides a simple way to load the new modular recipe system

console.log('📚 Loading modular recipe system...');

// Load the recipe manager
async function initializeRecipeSystem() {
    try {
        // Initialize the recipe manager
        await recipeManager.initialize();
        
        // For backward compatibility, populate the global RECIPES_DATA
        const allRecipes = await recipeManager.getAllRecipes();
        window.RECIPES_DATA = allRecipes;
        
        console.log(`✅ Recipe system initialized with ${allRecipes.length} recipes`);
        
        // Dispatch a custom event to notify other parts of the app
        window.dispatchEvent(new CustomEvent('recipesLoaded', { 
            detail: { 
                recipeCount: allRecipes.length,
                categories: recipeManager.getLoadedCategories()
            }
        }));
        
        return true;
    } catch (error) {
        console.error('❌ Failed to initialize recipe system:', error);
        
        // Fallback: try to load the old system
        console.log('🔄 Falling back to legacy recipe system...');
        try {
            // If the old recipes-data.js exists, load it as fallback
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
    document.addEventListener('DOMContentLoaded', initializeRecipeSystem);
} else {
    // DOM is already ready
    initializeRecipeSystem();
}

// Export for manual initialization if needed
window.initializeRecipeSystem = initializeRecipeSystem;

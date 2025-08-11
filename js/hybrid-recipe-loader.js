// Simple JSON Recipe Loader

async function loadAllJSONRecipes() {
    const recipesToLoad = [
        { id: 1, filename: 'cinnamon-rolls' },
        { id: 2, filename: 'homemade-focaccia-bread' },
        { id: 3, filename: 'apple-crisp' },
        { id: 4, filename: 'butter-scones' },
        { id: 5, filename: 'chocolate-fudge' },
        { id: 6, filename: 'vanilla-fudge' }
    ];
    
    let replacements = 0;
    
    for (const recipe of recipesToLoad) {
        try {
            const response = await fetch(`data/recipes/${recipe.filename}.json`);
            
            if (response.ok) {
                const jsonData = await response.json();
                
                if (window.RECIPES_DATA) {
                    const index = window.RECIPES_DATA.findIndex(r => r.id === recipe.id);
                    if (index !== -1) {
                        window.RECIPES_DATA[index] = jsonData;
                        replacements++;
                    }
                }
            } else {
                console.error(`Failed to load ${recipe.filename}.json: ${response.status}`);
            }
        } catch (error) {
            console.error(`Error loading ${recipe.filename}.json:`, error);
        }
    }
    
    // Re-render if recipes were replaced
    if (replacements > 0 && window.initializeApp) {
        await window.initializeApp();
    }
}

// Load recipes after initialization
setTimeout(async () => {
    await loadAllJSONRecipes();
}, 1500);

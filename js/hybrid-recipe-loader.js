// Simple JSON Recipe Loader
console.log('Loading JSON recipe system...');

async function loadAllJSONRecipes() {
    console.log('Starting to load JSON recipes...');
    
    const recipesToLoad = [
        { id: 1, filename: 'cinnamon-rolls' },
        { id: 2, filename: 'homemade-focaccia-bread' }
    ];
    
    let replacements = 0;
    
    for (const recipe of recipesToLoad) {
        try {
            console.log(`Loading ${recipe.filename}.json...`);
            const response = await fetch(`data/recipes/${recipe.filename}.json`);
            
            if (response.ok) {
                const jsonData = await response.json();
                console.log(`✅ Loaded ${recipe.filename}.json: "${jsonData.title}"`);
                
                if (window.RECIPES_DATA) {
                    const index = window.RECIPES_DATA.findIndex(r => r.id === recipe.id);
                    if (index !== -1) {
                        console.log(`Replacing recipe ${recipe.id} at index ${index}`);
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
    
    console.log(`JSON loading complete: ${replacements} replacements made`);
    
    // Re-render if recipes were replaced
    if (replacements > 0 && window.initializeApp) {
        console.log('Re-initializing app with updated recipes...');
        await window.initializeApp();
    }
}

// Load recipes after initialization
setTimeout(async () => {
    console.log('Starting delayed JSON recipe loading...');
    await loadAllJSONRecipes();
}, 1500);

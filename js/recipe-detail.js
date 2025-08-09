// Recipe Detail Page JavaScript - Working Recipe System
console.log('🍳 Recipe detail page loaded - Working recipe system version');

let currentRecipe = null;

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', async function() {
    console.log('📋 DOM loaded, initializing recipe detail page...');
    
    // Get recipe ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const recipeId = urlParams.get('id');
    
    if (!recipeId) {
        console.error('❌ No recipe ID provided in URL');
        showError('No recipe specified. Please go back to the main page and select a recipe.');
        return;
    }
    
    console.log(`🔍 Looking for recipe with ID: ${recipeId}`);
    
    // Wait for the working recipe system to be ready
    await waitForWorkingRecipeSystem();
    
    // Load and display the recipe
    loadAndDisplayRecipe(parseInt(recipeId));
});

// Wait for the working recipe system to be ready
async function waitForWorkingRecipeSystem() {
    return new Promise((resolve) => {
        // Check if already ready
        if (window.RecipeUtils && window.RECIPES_DATA) {
            console.log('✅ Working recipe system already ready');
            resolve();
            return;
        }
        
        // Listen for the system to be ready
        window.addEventListener('recipesLoaded', (event) => {
            console.log('📨 Received recipesLoaded event:', event.detail);
            if (event.detail.system === 'simple-individual') {
                console.log('✅ Working recipe system is ready');
                resolve();
            }
        });
        
        // Fallback timeout
        setTimeout(() => {
            console.log('⏰ Timeout reached, proceeding anyway');
            resolve();
        }, 3000);
    });
}

// Load and display a specific recipe
async function loadAndDisplayRecipe(recipeId) {
    try {
        // Check if RecipeUtils is available
        if (!window.RecipeUtils) {
            throw new Error('Working recipe system not loaded');
        }
        
        // Show loading state
        const container = document.getElementById('recipe-container');
        if (container) {
            container.innerHTML = `
                <div class="loading" style="text-align: center; padding: 4rem 2rem; color: #718096;">
                    <i class="fas fa-spinner fa-spin" style="font-size: 2rem; margin-bottom: 1rem;"></i>
                    <p>Loading recipe...</p>
                </div>
            `;
        }
        
        // Get recipe from working system
        currentRecipe = await RecipeUtils.getRecipeById(recipeId);
        
        if (!currentRecipe) {
            console.error(`❌ Recipe with ID ${recipeId} not found`);
            showError(`Recipe not found. The recipe you're looking for doesn't exist.`);
            return;
        }
        
        console.log(`✅ Found recipe: ${currentRecipe.title}`);
        
        // Update page title
        document.title = `${currentRecipe.title} - Ctrl+Sift+Delish`;
        
        // Display the recipe
        displayRecipe(currentRecipe);
        
    } catch (error) {
        console.error('❌ Error loading recipe:', error);
        showError('Failed to load recipe. Please try again.');
    }
}

// Display the recipe on the page
function displayRecipe(recipe) {
    const container = document.getElementById('recipe-container');
    
    if (!container) {
        console.error('❌ Recipe container not found!');
        return;
    }
    
    // Build the complete recipe HTML
    container.innerHTML = `
        <div class="recipe-header">
            <div class="recipe-image-container">
                <img src="${recipe.image}" alt="${recipe.title}" class="recipe-main-image">
            </div>
            <div class="recipe-info">
                <h1 class="recipe-title">${recipe.title}</h1>
                <p class="recipe-description">${recipe.description}</p>
                
                <div class="recipe-meta-grid">
                    <div class="meta-item">
                        <i class="fas fa-clock"></i>
                        <div class="meta-value">${recipe.time}</div>
                        <div class="meta-label">Prep Time</div>
                    </div>
                    <div class="meta-item">
                        <i class="fas fa-chart-bar"></i>
                        <div class="meta-value">${recipe.difficulty}</div>
                        <div class="meta-label">Difficulty</div>
                    </div>
                    <div class="meta-item">
                        <i class="fas fa-utensils"></i>
                        <div class="meta-value">${recipe.category || 'Recipe'}</div>
                        <div class="meta-label">Category</div>
                    </div>
                </div>
                
                <div class="recipe-actions">
                    <button class="action-btn primary" onclick="printRecipe()">
                        <i class="fas fa-print"></i>
                        Print Recipe
                    </button>
                    <a href="https://youtube.com/watch?v=${recipe.youtubeId}" 
                       target="_blank" 
                       class="action-btn secondary"
                       rel="noopener noreferrer">
                        <i class="fab fa-youtube"></i>
                        Watch Video
                    </a>
                </div>
            </div>
        </div>
        
        <div class="recipe-content">
            <div class="ingredients-section">
                <h2 class="section-title">
                    <i class="fas fa-list"></i>
                    Ingredients
                </h2>
                <ul class="ingredients-list">
                    ${recipe.ingredients.map(ingredient => `
                        <li class="ingredient-item">
                            <span class="ingredient-text">${ingredient}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
            
            <div class="instructions-section">
                <h2 class="section-title">
                    <i class="fas fa-clipboard-list"></i>
                    Instructions
                </h2>
                <ol class="instructions-list">
                    ${recipe.instructions.map(instruction => `
                        <li class="instruction-item">
                            ${instruction}
                        </li>
                    `).join('')}
                </ol>
            </div>
            
            ${recipe.youtubeId ? `
                <div class="video-section">
                    <h2 class="section-title">
                        <i class="fab fa-youtube"></i>
                        Video Tutorial
                    </h2>
                    <div class="video-container">
                        <iframe 
                            class="video-iframe"
                            src="https://www.youtube.com/embed/${recipe.youtubeId}" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                        </iframe>
                    </div>
                </div>
            ` : ''}
        </div>
    `;
    
    console.log(`✅ Recipe "${recipe.title}" displayed successfully`);
}

// Toggle ingredient checked state
function toggleIngredient(checkElement) {
    const icon = checkElement.querySelector('i');
    const listItem = checkElement.closest('li');
    
    if (icon.classList.contains('far')) {
        // Mark as checked
        icon.classList.remove('far', 'fa-square');
        icon.classList.add('fas', 'fa-check-square');
        listItem.classList.add('checked');
    } else {
        // Mark as unchecked
        icon.classList.remove('fas', 'fa-check-square');
        icon.classList.add('far', 'fa-square');
        listItem.classList.remove('checked');
    }
}

// Print recipe function
function printRecipe() {
    if (!currentRecipe) {
        alert('No recipe loaded to print!');
        return;
    }
    
    // Create a print-friendly version
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>${currentRecipe.title} - Recipe</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 20px; }
                h1 { color: #333; border-bottom: 2px solid #667eea; }
                .meta { margin: 10px 0; color: #666; }
                .section { margin: 20px 0; }
                .ingredients li, .instructions li { margin: 5px 0; }
                .step-number { font-weight: bold; color: #667eea; }
                @media print { body { margin: 0; } }
            </style>
        </head>
        <body>
            <h1>${currentRecipe.title}</h1>
            <p>${currentRecipe.description}</p>
            <div class="meta">
                <strong>Time:</strong> ${currentRecipe.time} | 
                <strong>Difficulty:</strong> ${currentRecipe.difficulty}
            </div>
            
            <div class="section">
                <h2>Ingredients</h2>
                <ul class="ingredients">
                    ${currentRecipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                </ul>
            </div>
            
            <div class="section">
                <h2>Instructions</h2>
                <ol class="instructions">
                    ${currentRecipe.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
                </ol>
            </div>
            
            <div class="section">
                <p><small>Recipe from Ctrl+Sift+Delish - ${window.location.origin}</small></p>
            </div>
        </body>
        </html>
    `);
    
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
}

// Go back to main page
function goBack() {
    window.location.href = 'index.html';
}

// Show error message
function showError(message) {
    const container = document.querySelector('.recipe-container');
    if (container) {
        container.innerHTML = `
            <div class="error-message" style="text-align: center; padding: 2rem; color: white;">
                <i class="fas fa-exclamation-triangle" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                <h2>Oops! Something went wrong</h2>
                <p style="margin: 1rem 0;">${message}</p>
                <button onclick="goBack()" class="btn btn-primary" style="margin-top: 1rem;">
                    <i class="fas fa-arrow-left"></i>
                    Back to Recipes
                </button>
            </div>
        `;
    }
}

// Export functions for global access
window.toggleIngredient = toggleIngredient;
window.printRecipe = printRecipe;
window.goBack = goBack;

console.log('✅ Recipe detail script loaded successfully - Modular version!');

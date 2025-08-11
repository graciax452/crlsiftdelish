// Recipe Detail Page JavaScript
console.log('Recipe detail page loaded');

let currentRecipe = null;

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', async function() {
    console.log('DOM loaded, initializing recipe detail page...');
    
    // Get recipe ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const recipeId = urlParams.get('id');
    
    if (!recipeId) {
        console.error('No recipe ID provided in URL');
        showError('No recipe specified. Please go back to the main page and select a recipe.');
        return;
    }
    
    console.log(`Looking for recipe with ID: ${recipeId}`);
    
    // Wait for the working recipe system to be ready
    await waitForWorkingRecipeSystem();
    
    // Load and display the recipe
    loadAndDisplayRecipe(parseInt(recipeId));
});

// Wait for the working recipe system to be ready
async function waitForWorkingRecipeSystem() {
    return new Promise((resolve) => {
        let attempts = 0;
        const maxAttempts = 20; // 10 seconds max wait
        
        const checkSystem = () => {
            attempts++;
            
            // Check if basic system is ready
            if (window.RecipeUtils && window.RECIPES_DATA) {
                // Check if JSON replacement has occurred (look for real data, not "Loading...")
                const hasRealData = window.RECIPES_DATA.some(recipe => 
                    recipe.title && recipe.title !== "Loading..." && !recipe.title.includes("Loading")
                );
                
                if (hasRealData) {
                    console.log('Recipe system ready with JSON data');
                    resolve();
                    return;
                }
            }
            
            if (attempts >= maxAttempts) {
                console.log('Timeout waiting for recipe system, proceeding anyway');
                resolve();
                return;
            }
            
            // Try again in 500ms
            setTimeout(checkSystem, 500);
        };
        
        checkSystem();
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
            console.error(`Recipe with ID ${recipeId} not found`);
            showError(`Recipe not found. The recipe you're looking for doesn't exist.`);
            return;
        }
        
        // Update page title
        document.title = `${currentRecipe.title} - Ctrl+Sift+Delish`;
        
        // Display the recipe
        displayRecipe(currentRecipe);
        
    } catch (error) {
        console.error('Error loading recipe:', error);
        showError('Failed to load recipe. Please try again.');
    }
}

// Display the recipe on the page
function displayRecipe(recipe) {
    const container = document.getElementById('recipe-container');
    
    if (!container) {
        console.error('Recipe container not found!');
        return;
    }
    
    // Ensure required properties exist
    if (!recipe.image || !recipe.title) {
        console.error('Recipe missing required properties:', recipe);
        showError('Recipe data incomplete. Please try refreshing the page.');
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
                <div class="recipe-meta">
                ${recipe.prepTime ? `<span class="recipe-time">
                    <i class="fas fa-clock"></i>
                    <span class="time-value">${recipe.prepTime}</span>
                    <span class="time-label">Prep</span>
                </span>` : ''}
                ${recipe.restTime ? `<span class="recipe-time">
                    <i class="fas fa-bed"></i>
                    <span class="time-value">${recipe.restTime}</span>
                    <span class="time-label">Rest</span>
                </span>` : ''}
                ${recipe.cookTime ? `<span class="recipe-time">
                    <i class="fas fa-fire"></i>
                    <span class="time-value">${recipe.cookTime}</span>
                    <span class="time-label">Cook</span>
                </span>` : ''}
                ${recipe.time ? `<span class="recipe-time">
                    <i class="fas fa-hourglass-half"></i>
                    <span class="time-value">${recipe.time}</span>
                    <span class="time-label">Total</span>
                </span>` : ''}
                <span class="recipe-difficulty">
                    <i class="fas fa-chart-bar"></i>
                    <span class="time-value">${recipe.difficulty}</span>
                    <span class="time-label">Difficulty</span>
                </span>
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
                <div class="ingredients-list">
                    ${groupIngredients(recipe.ingredients)}
                </div>
            </div>
            
            <div class="instructions-section">
                <h2 class="section-title">
                    <i class="fas fa-clipboard-list"></i>
                    Instructions
                </h2>
                <div class="instructions-list">
                    ${groupInstructions(recipe.instructions)}
                </div>
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
    
    console.log(`Recipe "${recipe.title}" displayed successfully`);
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

// Group ingredients into sections
function groupIngredients(ingredients) {
    const sections = [];
    let currentSection = { title: null, items: [] };
    
    for (const ingredient of ingredients) {
        if (ingredient.endsWith(':')) {
            // Save previous section if it has items
            if (currentSection.items.length > 0) {
                sections.push(currentSection);
            }
            // Start new section
            currentSection = { title: ingredient, items: [] };
        } else if (ingredient.trim() !== '') {
            // Add ingredient to current section
            currentSection.items.push(ingredient);
        }
        // Skip empty lines
    }
    
    // Add the last section
    if (currentSection.items.length > 0) {
        sections.push(currentSection);
    }
    
    return sections.map(section => `
        <div class="ingredient-section">
            ${section.title ? `<div class="ingredient-section-title">${section.title}</div>` : ''}
            <ul class="ingredients-list">
                ${section.items.map(item => `
                    <li>
                        <span class="ingredient-checkbox" onclick="toggleIngredient(this)">
                            <i class="far fa-square"></i>
                        </span>
                        ${item}
                    </li>
                `).join('')}
            </ul>
        </div>
    `).join('');
}

// Group instructions into sections
function groupInstructions(instructions) {
    const sections = [];
    let currentSection = { title: null, items: [] };
    let stepNumber = 1;
    
    for (const instruction of instructions) {
        // Check if it's a sub-heading (ends with colon and contains uppercase words or markdown formatting)
        if (instruction.endsWith(':') && 
            (instruction === instruction.toUpperCase() || 
             /^[A-Z][A-Z\s\-()]+:/.test(instruction) ||
             /^\*\*.*\*\*:?$/.test(instruction) ||  // Markdown bold formatting
             instruction.includes('TANGZHONG') ||
             instruction.includes('DOUGH') ||
             instruction.includes('FILLING') ||
             instruction.includes('RISE') ||
             instruction.includes('BAKE') ||
             instruction.includes('ROLL') ||
             instruction.includes('MORNING') ||
             instruction.includes('Prepare the') ||
             instruction.includes('Make the') ||
             instruction.includes('Bake and'))) {
            
            // Save previous section if it has items
            if (currentSection.items.length > 0) {
                sections.push(currentSection);
            }
            // Start new section
            currentSection = { title: instruction, items: [] };
        } else if (instruction.trim() !== '') {
            // Add instruction to current section with step number
            currentSection.items.push({ text: instruction, number: stepNumber++ });
        }
        // Skip empty lines
    }
    
    // Add the last section
    if (currentSection.items.length > 0) {
        sections.push(currentSection);
    }
    
    // If no sections were created (no subsection headers), create one default section
    if (sections.length === 0 && instructions.some(inst => inst.trim() !== '')) {
        const allSteps = instructions
            .filter(inst => inst.trim() !== '')
            .map((inst, index) => ({ text: inst, number: index + 1 }));
        sections.push({ title: null, items: allSteps });
    }

    // Check for alternative methods (Stand Mixer and Hand Method)
    const mixerIndex = sections.findIndex(s => s.title && s.title.includes('Stand Mixer Method'));
    const handIndex = sections.findIndex(s => s.title && s.title.includes('Hand Method'));
    
    if (mixerIndex !== -1 && handIndex !== -1 && handIndex === mixerIndex + 1) {
        // Found consecutive alternative methods - render them in columns
        const mixerSection = sections[mixerIndex];
        const handSection = sections[handIndex];
        
        // Use the mixer section's step numbers for both columns
        const baseStepNumber = mixerSection.items.length > 0 ? mixerSection.items[0].number : 1;
        
        const alternativeMethodsHTML = `
            <div class="instruction-section alternative-methods">
                <div class="alternative-methods-container">
                    <div class="method-column">
                        <div class="instruction-section-title">${mixerSection.title}</div>
                        ${mixerSection.items.map((item, index) => `
                            <div class="instruction-item">
                                <span class="step-number">${baseStepNumber + index}</span>
                                <span class="step-text">${item.text}</span>
                            </div>
                        `).join('')}
                    </div>
                    <div class="method-column">
                        <div class="instruction-section-title">${handSection.title}</div>
                        ${handSection.items.map((item, index) => `
                            <div class="instruction-item">
                                <span class="step-number">${baseStepNumber + index}</span>
                                <span class="step-text">${item.text}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
        
        // Replace both sections with the combined alternative methods
        const beforeSections = sections.slice(0, mixerIndex);
        const afterSections = sections.slice(handIndex + 1);
        
        return [
            ...beforeSections.map(section => `
                <div class="instruction-section">
                    ${section.title ? `<div class="instruction-section-title">${section.title}</div>` : ''}
                    ${section.items.map(item => `
                        <div class="instruction-item">
                            <span class="step-number">${item.number}</span>
                            <span class="step-text">${item.text}</span>
                        </div>
                    `).join('')}
                </div>
            `),
            alternativeMethodsHTML,
            ...afterSections.map(section => `
                <div class="instruction-section">
                    ${section.title ? `<div class="instruction-section-title">${section.title}</div>` : ''}
                    ${section.items.map(item => `
                        <div class="instruction-item">
                            <span class="step-number">${item.number}</span>
                            <span class="step-text">${item.text}</span>
                        </div>
                    `).join('')}
                </div>
            `)
        ].join('');
    }

    // Default rendering for non-alternative sections
    return sections.map(section => `
        <div class="instruction-section">
            ${section.title ? `<div class="instruction-section-title">${section.title}</div>` : ''}
            ${section.items.map(item => `
                <div class="instruction-item">
                    <span class="step-number">${item.number}</span>
                    <span class="step-text">${item.text}</span>
                </div>
            `).join('')}
        </div>
    `).join('');
}

// Export functions for global access
window.toggleIngredient = toggleIngredient;
window.printRecipe = printRecipe;
window.goBack = goBack;

console.log('Recipe detail script loaded successfully');

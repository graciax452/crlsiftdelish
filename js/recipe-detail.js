// Recipe Detail Page JavaScript
console.log('Recipe detail page loaded');

let currentRecipe = null;
let isMetricMode = localStorage.getItem('measurement_preference') !== 'imperial'; // Default to metric unless explicitly set to imperial

// Measurement conversion utilities
const MeasurementConverter = {
    // Conversion factors to metric
    conversions: {
        // Volume
        'cup': { metric: 240, unit: 'ml' },
        'cups': { metric: 240, unit: 'ml' },
        'c': { metric: 240, unit: 'ml' },
        'tbsp': { metric: 15, unit: 'ml' },
        'tablespoon': { metric: 15, unit: 'ml' },
        'tablespoons': { metric: 15, unit: 'ml' },
        'tsp': { metric: 5, unit: 'ml' },
        'teaspoon': { metric: 5, unit: 'ml' },
        'teaspoons': { metric: 5, unit: 'ml' },
        'fl oz': { metric: 29.5735, unit: 'ml' },
        'fluid ounce': { metric: 29.5735, unit: 'ml' },
        'fluid ounces': { metric: 29.5735, unit: 'ml' },
        'pint': { metric: 473, unit: 'ml' },
        'pints': { metric: 473, unit: 'ml' },
        'quart': { metric: 946, unit: 'ml' },
        'quarts': { metric: 946, unit: 'ml' },
        
        // Weight
        'oz': { metric: 28.35, unit: 'g' },
        'ounce': { metric: 28.35, unit: 'g' },
        'ounces': { metric: 28.35, unit: 'g' },
        'lb': { metric: 453.592, unit: 'g' },
        'pound': { metric: 453.592, unit: 'g' },
        'pounds': { metric: 453.592, unit: 'g' },
        
        // Temperature
        'fahrenheit': { metric: null, unit: '°C' },
        'f': { metric: null, unit: '°C' },
        
        // Length
        'inch': { metric: 2.54, unit: 'cm' },
        'inches': { metric: 2.54, unit: 'cm' },
        'in': { metric: 2.54, unit: 'cm' }
    },

    convertToMetric(text) {
        if (!text) return text;
        
        // Temperature conversion (°F to °C)
        text = text.replace(/(\d+)°F/g, (match, temp) => {
            const celsius = Math.round((parseInt(temp) - 32) * 5/9);
            return `${celsius}°C`;
        });
        
        // Pattern for measurements: number + unit
        const measurementRegex = /(\d+(?:\/\d+)?(?:\.\d+)?)\s*([a-zA-Z\s]+)/g;
        
        return text.replace(measurementRegex, (match, amount, unit) => {
            const normalizedUnit = unit.trim().toLowerCase();
            const conversion = this.conversions[normalizedUnit];
            
            if (!conversion) return match;
            
            // Handle fractions
            let numericAmount = amount;
            if (amount.includes('/')) {
                const [num, den] = amount.split('/');
                numericAmount = parseFloat(num) / parseFloat(den);
            } else {
                numericAmount = parseFloat(amount);
            }
            
            const convertedAmount = numericAmount * conversion.metric;
            
            // Format the result nicely
            let formattedAmount;
            if (convertedAmount >= 1000 && conversion.unit === 'ml') {
                formattedAmount = (convertedAmount / 1000).toFixed(1).replace('.0', '');
                return `${formattedAmount}L`;
            } else if (convertedAmount >= 1000 && conversion.unit === 'g') {
                formattedAmount = (convertedAmount / 1000).toFixed(2).replace(/\.?0+$/, '');
                return `${formattedAmount}kg`;
            } else {
                formattedAmount = convertedAmount < 1 ? 
                    convertedAmount.toFixed(2).replace(/\.?0+$/, '') : 
                    Math.round(convertedAmount);
                return `${formattedAmount}${conversion.unit}`;
            }
        });
    },

    convertToImperial(text) {
        if (!text) return text;
        
        // This is more complex as we need to reverse conversions
        // Temperature conversion (°C to °F)
        text = text.replace(/(\d+)°C/g, (match, temp) => {
            const fahrenheit = Math.round(parseInt(temp) * 9/5 + 32);
            return `${fahrenheit}°F`;
        });
        
        // Convert metric units back to imperial
        // ml to cups/tbsp/tsp
        text = text.replace(/(\d+(?:\.\d+)?)ml/g, (match, amount) => {
            const ml = parseFloat(amount);
            if (ml >= 240) {
                const cups = (ml / 240).toFixed(2).replace(/\.?0+$/, '');
                return `${cups} cup${cups !== '1' ? 's' : ''}`;
            } else if (ml >= 15) {
                const tbsp = (ml / 15).toFixed(1).replace(/\.?0+$/, '');
                return `${tbsp} tbsp`;
            } else {
                const tsp = (ml / 5).toFixed(1).replace(/\.?0+$/, '');
                return `${tsp} tsp`;
            }
        });
        
        // L to cups
        text = text.replace(/(\d+(?:\.\d+)?)L/g, (match, amount) => {
            const cups = (parseFloat(amount) * 1000 / 240).toFixed(2).replace(/\.?0+$/, '');
            return `${cups} cups`;
        });
        
        // g to oz/lb
        text = text.replace(/(\d+(?:\.\d+)?)g/g, (match, amount) => {
            const grams = parseFloat(amount);
            if (grams >= 453) {
                const lbs = (grams / 453.592).toFixed(2).replace(/\.?0+$/, '');
                return `${lbs} lb${lbs !== '1' ? 's' : ''}`;
            } else {
                const oz = (grams / 28.35).toFixed(1).replace(/\.?0+$/, '');
                return `${oz} oz`;
            }
        });
        
        // kg to lbs
        text = text.replace(/(\d+(?:\.\d+)?)kg/g, (match, amount) => {
            const lbs = (parseFloat(amount) * 2.20462).toFixed(2).replace(/\.?0+$/, '');
            return `${lbs} lbs`;
        });
        
        // cm to inches
        text = text.replace(/(\d+(?:\.\d+)?)cm/g, (match, amount) => {
            const inches = (parseFloat(amount) / 2.54).toFixed(1).replace(/\.?0+$/, '');
            return `${inches} inch${inches !== '1' ? 'es' : ''}`;
        });
        
        return text;
    },

    convertText(text, toMetric = true) {
        return toMetric ? this.convertToMetric(text) : this.convertToImperial(text);
    }
};

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
    
    // Wait for recipe loader to be available
    let attempts = 0;
    while (!window.recipeLoader && attempts < 10) {
        await new Promise(resolve => setTimeout(resolve, 100));
        attempts++;
    }
    
    if (!window.recipeLoader) {
        console.error('Recipe loader failed to initialize');
        showError('Recipe system failed to load. Please refresh the page.');
        return;
    }
    
    // Load and display the recipe
    loadAndDisplayRecipe(parseInt(recipeId));
});

// Load and display a specific recipe
async function loadAndDisplayRecipe(recipeId) {
    try {
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

        // Ensure recipe loader is available
        if (!window.recipeLoader) {
            throw new Error('Recipe loader not available');
        }

        // Get recipe directly
        currentRecipe = await window.recipeLoader.getRecipeById(recipeId);
        
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
        showError('Failed to load recipe. Please refresh the page or try again.');
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
                <div class="section-header">
                    <h2 class="section-title">
                        <i class="fas fa-list"></i>
                        Ingredients
                    </h2>
                    <div class="measurement-toggle">
                        <button class="measurement-switch ${isMetricMode ? 'metric' : 'imperial'}" id="measurement-switch" onclick="toggleMeasurements()">
                            <div class="switch-inner">
                                <div class="switch-options">
                                    <div class="switch-option" data-mode="metric">Metric</div>
                                    <div class="switch-separator"></div>
                                    <div class="switch-option" data-mode="imperial">Imperial</div>
                                </div>
                            </div>
                            <div class="switch-shadow"></div>
                            <div class="switch-shadow"></div>
                        </button>
                    </div>
                </div>
                <div class="ingredients-list" id="ingredients-list">
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
            
            ${recipe.tips && recipe.tips.length > 0 ? `
                <div class="pro-tips-section">
                    <h2 class="section-title">
                        <i class="fas fa-lightbulb"></i>
                        Pro Tips
                    </h2>
                    <div class="pro-tips-content">
                        ${recipe.tips.map(tip => `
                            <div class="pro-tip-item">
                                <div class="pro-tip-icon">
                                    <i class="fas fa-star"></i>
                                </div>
                                <div class="pro-tip-text">${tip}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
            
             ${recipe.notes && recipe.notes.length > 0 ? `
                <div class="recipe-notes-section">
                    <h2 class="section-title">
                        <i class="fas fa-sticky-note"></i>
                        Recipe Notes
                    </h2>
                    <div class="recipe-notes-content">
                        ${recipe.notes.map(note => `
                            <div class="recipe-note-item">
                                <div class="note-icon">
                                    <i class="fas fa-info-circle"></i>
                                </div>
                                <div class="note-text">${note}</div>
                            </div>
                        `).join('')}
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

// Set specific measurement mode (metric or imperial)
function setMeasurementMode(mode) {
    const newMetricMode = mode === 'metric';
    
    // Only update if mode actually changed
    if (newMetricMode !== isMetricMode) {
        isMetricMode = newMetricMode;
        localStorage.setItem('measurement_preference', isMetricMode ? 'metric' : 'imperial');
        
        // Update toggle switch visual state
        updateToggleVisualState();
        
        // Re-render ingredients and instructions with new measurements
        updateRecipeDisplay();
    }
}

// Toggle between metric and imperial measurements (for backward compatibility)
function toggleMeasurements() {
    setMeasurementMode(isMetricMode ? 'imperial' : 'metric');
}

// Update the visual state of the rocker switch
function updateToggleVisualState() {
    const measurementSwitch = document.getElementById('measurement-switch');
    if (measurementSwitch) {
        // Update the main switch class for rocker position
        measurementSwitch.className = `measurement-switch ${isMetricMode ? 'metric' : 'imperial'}`;
        
        // Update option states
        const metricOption = measurementSwitch.querySelector('[data-mode="metric"]');
        const imperialOption = measurementSwitch.querySelector('[data-mode="imperial"]');
        
        if (metricOption && imperialOption) {
            if (isMetricMode) {
                metricOption.classList.add('active');
                imperialOption.classList.remove('active');
            } else {
                metricOption.classList.remove('active');
                imperialOption.classList.add('active');
            }
        }
    }
}

// Update recipe display with current measurement preference
function updateRecipeDisplay() {
    if (currentRecipe) {
        const ingredientsList = document.getElementById('ingredients-list');
        const instructionsList = document.querySelector('.instructions-list');
        
        if (ingredientsList) {
            ingredientsList.innerHTML = groupIngredients(currentRecipe.ingredients);
        }
        
        if (instructionsList) {
            instructionsList.innerHTML = groupInstructions(currentRecipe.instructions);
        }
    }
}

// Print recipe function
function printRecipe() {
    if (!currentRecipe) {
        alert('No recipe loaded to print!');
        return;
    }
    
    // Helper function to build timing info
    function buildTimingInfo() {
        const timings = [];
        if (currentRecipe.prepTime) timings.push(`Prep: ${currentRecipe.prepTime}`);
        if (currentRecipe.restTime) timings.push(`Rest: ${currentRecipe.restTime}`);
        if (currentRecipe.cookTime) timings.push(`Cook: ${currentRecipe.cookTime}`);
        if (currentRecipe.time) timings.push(`Total: ${currentRecipe.time}`);
        return timings.join(' | ');
    }
    
    // Helper function to format ingredients with checkboxes and subheadings
    function formatIngredients(ingredients) {
        return ingredients.map(ingredient => {
            if (ingredient.trim() === '') {
                return ''; // Empty line - no bullet, no checkbox
            } else if (ingredient.endsWith(':')) {
                return `<li class="subheading"><strong>${ingredient}</strong></li>`;
            } else {
                const convertedIngredient = MeasurementConverter.convertText(ingredient, isMetricMode);
                return `<li class="ingredient-item">☐ ${convertedIngredient}</li>`;
            }
        }).filter(item => item !== '').join('');
    }
    
    // Helper function to format instructions with subheadings and numbering
    function formatInstructions(instructions) {
        let stepNumber = 1;
        return instructions.map(instruction => {
            if (instruction.trim() === '') {
                return ''; // Empty line - no number
            } else if (instruction.endsWith(':')) {
                return `<li class="subheading"><strong>${instruction}</strong></li>`;
            } else {
                const convertedInstruction = MeasurementConverter.convertText(instruction, isMetricMode);
                return `<li class="instruction-item"><span class="step-number">${stepNumber++}.</span> ${convertedInstruction}</li>`;
            }
        }).filter(item => item !== '').join('');
    }
    
    // Create a print-friendly version
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>${currentRecipe.title} - Recipe</title>
            <style>
                body { 
                    font-family: Arial, sans-serif; 
                    margin: 20px; 
                    line-height: 1.6;
                    color: #333;
                }
                h1 { 
                    color: #333; 
                    border-bottom: 2px solid #667eea; 
                    padding-bottom: 10px;
                }
                .meta { 
                    margin: 15px 0; 
                    color: #666; 
                    font-size: 14px;
                    background: #f8f9fa;
                    padding: 10px;
                    border-radius: 5px;
                }
                .section { 
                    margin: 25px 0; 
                    page-break-inside: avoid;
                }
                .section h2 {
                    color: #667eea;
                    margin-bottom: 15px;
                    font-size: 18px;
                }
                
                /* Ingredients styling */
                .ingredients {
                    list-style: none;
                    padding: 0;
                }
                .ingredients .ingredient-item {
                    margin: 8px 0;
                    padding-left: 0;
                    font-size: 14px;
                }
                .ingredients .subheading {
                    margin: 15px 0 8px 0;
                    list-style: none;
                    color: #667eea;
                    font-size: 15px;
                }
                
                /* Instructions styling */
                .instructions {
                    list-style: none;
                    padding: 0;
                    counter-reset: none;
                }
                .instructions .instruction-item {
                    margin: 10px 0;
                    padding-left: 0;
                    font-size: 14px;
                }
                .instructions .subheading {
                    margin: 20px 0 10px 0;
                    list-style: none;
                    color: #667eea;
                    font-size: 15px;
                }
                .step-number { 
                    font-weight: bold; 
                    color: #667eea; 
                    margin-right: 8px;
                    min-width: 25px;
                    display: inline-block;
                }
                
                .description {
                    font-style: italic;
                    color: #666;
                    margin: 10px 0;
                }
                
                @media print { 
                    body { margin: 15px; }
                    .section { page-break-inside: avoid; }
                }
            </style>
        </head>
        <body>
            <h1>${currentRecipe.title}</h1>
            <p class="description">${currentRecipe.description}</p>
            
            <div class="meta">
                <strong>⏱️ Timing:</strong> ${buildTimingInfo()}<br>
                <strong>📊 Difficulty:</strong> ${currentRecipe.difficulty}<br>
                <strong>🍽️ Servings:</strong> ${currentRecipe.servings || 'Not specified'}
            </div>
            
            <div class="section">
                <h2>🥘 Ingredients</h2>
                <ul class="ingredients">
                    ${formatIngredients(currentRecipe.ingredients)}
                </ul>
            </div>
            
            <div class="section">
                <h2>📝 Instructions</h2>
                <ol class="instructions">
                    ${formatInstructions(currentRecipe.instructions)}
                </ol>
            </div>
            
            ${currentRecipe.tips && currentRecipe.tips.length > 0 ? `
            <div class="section">
                <h2>💡 Tips</h2>
                <ul style="list-style-type: disc; padding-left: 20px;">
                    ${currentRecipe.tips.map(tip => `<li style="margin: 5px 0;">${tip}</li>`).join('')}
                </ul>
            </div>` : ''}
            
            <div class="section" style="margin-top: 30px; padding-top: 15px; border-top: 1px solid #eee;">
                <p><small>📧 Recipe from <strong>Ctrl+Sift+Delish</strong> - ${window.location.origin}</small></p>
                <p><small>🗓️ Printed on ${new Date().toLocaleDateString()}</small></p>
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
            // Add ingredient to current section, convert measurements if needed
            const convertedIngredient = MeasurementConverter.convertText(ingredient, isMetricMode);
            currentSection.items.push(convertedIngredient);
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
            // Add instruction to current section with step number, convert measurements if needed
            const convertedInstruction = MeasurementConverter.convertText(instruction, isMetricMode);
            currentSection.items.push({ text: convertedInstruction, number: stepNumber++ });
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

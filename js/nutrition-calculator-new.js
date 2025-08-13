// Comprehensive Ingredient Nutrition Database
// Values per 100g unless otherwise specified

const INGREDIENT_NUTRITION_DB = {
    // Dairy Products
    'condensed milk': {
        calories: 321,
        fat: 8.5,
        carbs: 55.0,
        protein: 7.9,
        sugar: 55.0,
        fiber: 0,
        sodium: 127,
        calcium: 284,
        iron: 0.2,
        vitaminA: 64,
        vitaminC: 2.8,
        vitaminD: 0.1,
        vitaminE: 0.2,
        vitaminB6: 0.05,
        vitaminB12: 0.33,
        folate: 11,
        magnesium: 26,
        potassium: 371,
        zinc: 0.9,
        phosphorus: 253
    },
    'whole milk': {
        calories: 61,
        fat: 3.2,
        carbs: 4.8,
        protein: 3.4,
        sugar: 4.8,
        fiber: 0,
        sodium: 43,
        calcium: 113,
        iron: 0.0,
        vitaminA: 46,
        vitaminC: 0,
        vitaminD: 1.2,
        vitaminE: 0.1,
        vitaminB6: 0.04,
        vitaminB12: 0.45,
        folate: 5,
        magnesium: 10,
        potassium: 143,
        zinc: 0.4,
        phosphorus: 84
    },
    'milk': {
        calories: 61,
        fat: 3.2,
        carbs: 4.8,
        protein: 3.4,
        sugar: 4.8,
        fiber: 0,
        sodium: 43,
        calcium: 113,
        iron: 0.0,
        vitaminA: 46,
        vitaminC: 0,
        vitaminD: 1.2,
        vitaminE: 0.1,
        vitaminB6: 0.04,
        vitaminB12: 0.45,
        folate: 5,
        magnesium: 10,
        potassium: 143,
        zinc: 0.4,
        phosphorus: 84
    },
    'double cream': {
        calories: 460,
        fat: 48.0,
        carbs: 3.1,
        protein: 2.8,
        sugar: 3.1,
        fiber: 0,
        sodium: 38,
        calcium: 98,
        iron: 0.1,
        vitaminA: 462,
        vitaminC: 0.6,
        vitaminD: 1.5,
        vitaminE: 1.2,
        vitaminB6: 0.02,
        vitaminB12: 0.17,
        folate: 3,
        magnesium: 8,
        potassium: 95,
        zinc: 0.2,
        phosphorus: 61
    },
    'butter': {
        calories: 717,
        fat: 81.0,
        carbs: 0.1,
        protein: 0.9,
        sugar: 0.1,
        fiber: 0,
        sodium: 11,
        calcium: 24,
        iron: 0.0,
        vitaminA: 684,
        vitaminC: 0,
        vitaminD: 1.5,
        vitaminE: 2.3,
        vitaminB6: 0.003,
        vitaminB12: 0.13,
        folate: 3,
        magnesium: 2,
        potassium: 24,
        zinc: 0.1,
        phosphorus: 24
    },
    'unsalted butter': {
        calories: 717,
        fat: 81.0,
        carbs: 0.1,
        protein: 0.9,
        sugar: 0.1,
        fiber: 0,
        sodium: 11,
        calcium: 24,
        iron: 0.0,
        vitaminA: 684,
        vitaminC: 0,
        vitaminD: 1.5,
        vitaminE: 2.3,
        vitaminB6: 0.003,
        vitaminB12: 0.13,
        folate: 3,
        magnesium: 2,
        potassium: 24,
        zinc: 0.1,
        phosphorus: 24
    },
    'cream cheese': {
        calories: 342,
        fat: 34.0,
        carbs: 3.4,
        protein: 6.2,
        sugar: 3.4,
        fiber: 0,
        sodium: 321,
        calcium: 108,
        iron: 0.4,
        vitaminA: 298,
        vitaminC: 0,
        vitaminD: 0.1,
        vitaminE: 0.8,
        vitaminB6: 0.05,
        vitaminB12: 0.25,
        folate: 11,
        magnesium: 8,
        potassium: 132,
        zinc: 0.5,
        phosphorus: 159
    },

    // Sugars and Sweeteners
    'light brown sugar': {
        calories: 380,
        fat: 0,
        carbs: 98.0,
        protein: 0,
        sugar: 97.0,
        fiber: 0,
        sodium: 12,
        calcium: 83,
        iron: 0.7,
        vitaminA: 0,
        vitaminC: 0,
        vitaminD: 0,
        vitaminE: 0,
        vitaminB6: 0,
        vitaminB12: 0,
        folate: 0,
        magnesium: 9,
        potassium: 133,
        zinc: 0.03,
        phosphorus: 1
    },
    'brown sugar': {
        calories: 380,
        fat: 0,
        carbs: 98.0,
        protein: 0,
        sugar: 97.0,
        fiber: 0,
        sodium: 12,
        calcium: 83,
        iron: 0.7,
        vitaminA: 0,
        vitaminC: 0,
        vitaminD: 0,
        vitaminE: 0,
        vitaminB6: 0,
        vitaminB12: 0,
        folate: 0,
        magnesium: 9,
        potassium: 133,
        zinc: 0.03,
        phosphorus: 1
    },
    'caster sugar': {
        calories: 387,
        fat: 0,
        carbs: 100.0,
        protein: 0,
        sugar: 100.0,
        fiber: 0,
        sodium: 1,
        calcium: 1,
        iron: 0.0,
        vitaminA: 0,
        vitaminC: 0,
        vitaminD: 0,
        vitaminE: 0,
        vitaminB6: 0,
        vitaminB12: 0,
        folate: 0,
        magnesium: 0,
        potassium: 2,
        zinc: 0,
        phosphorus: 0
    },

    // Flours and Grains
    'plain flour': {
        calories: 364,
        fat: 1.2,
        carbs: 76.0,
        protein: 10.0,
        sugar: 0.3,
        fiber: 2.7,
        sodium: 2,
        calcium: 15,
        iron: 1.2,
        vitaminA: 0,
        vitaminC: 0,
        vitaminD: 0,
        vitaminE: 0.1,
        vitaminB6: 0.04,
        vitaminB12: 0,
        folate: 8,
        magnesium: 22,
        potassium: 107,
        zinc: 0.7,
        phosphorus: 108
    },
    'all-purpose flour': {
        calories: 364,
        fat: 1.2,
        carbs: 76.0,
        protein: 10.0,
        sugar: 0.3,
        fiber: 2.7,
        sodium: 2,
        calcium: 15,
        iron: 1.2,
        vitaminA: 0,
        vitaminC: 0,
        vitaminD: 0,
        vitaminE: 0.1,
        vitaminB6: 0.04,
        vitaminB12: 0,
        folate: 8,
        magnesium: 22,
        potassium: 107,
        zinc: 0.7,
        phosphorus: 108
    },
    'bread flour': {
        calories: 365,
        fat: 1.7,
        carbs: 72.0,
        protein: 13.0,
        sugar: 0.7,
        fiber: 2.4,
        sodium: 2,
        calcium: 34,
        iron: 4.6,
        vitaminA: 0,
        vitaminC: 0,
        vitaminD: 0,
        vitaminE: 0.1,
        vitaminB6: 0.04,
        vitaminB12: 0,
        folate: 15,
        magnesium: 25,
        potassium: 109,
        zinc: 0.9,
        phosphorus: 124
    },

    // Eggs
    'eggs': {
        calories: 155,
        fat: 11.0,
        carbs: 1.1,
        protein: 13.0,
        sugar: 1.1,
        fiber: 0,
        sodium: 124,
        calcium: 50,
        iron: 1.8,
        vitaminA: 160,
        vitaminC: 0,
        vitaminD: 2.0,
        vitaminE: 1.0,
        vitaminB6: 0.14,
        vitaminB12: 1.29,
        folate: 44,
        magnesium: 10,
        potassium: 126,
        zinc: 1.0,
        phosphorus: 172
    },
    'egg': {
        calories: 155,
        fat: 11.0,
        carbs: 1.1,
        protein: 13.0,
        sugar: 1.1,
        fiber: 0,
        sodium: 124,
        calcium: 50,
        iron: 1.8,
        vitaminA: 160,
        vitaminC: 0,
        vitaminD: 2.0,
        vitaminE: 1.0,
        vitaminB6: 0.14,
        vitaminB12: 1.29,
        folate: 44,
        magnesium: 10,
        potassium: 126,
        zinc: 1.0,
        phosphorus: 172
    },

    // Baking ingredients
    'baking powder': {
        calories: 53,
        fat: 0,
        carbs: 28.0,
        protein: 0,
        sugar: 0,
        fiber: 0,
        sodium: 10600,
        calcium: 7300,
        iron: 0,
        vitaminA: 0,
        vitaminC: 0,
        vitaminD: 0,
        vitaminE: 0,
        vitaminB6: 0,
        vitaminB12: 0,
        folate: 0,
        magnesium: 2,
        potassium: 170,
        zinc: 0,
        phosphorus: 5876
    },
    'salt': {
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
        sugar: 0,
        fiber: 0,
        sodium: 38758,
        calcium: 24,
        iron: 0.3,
        vitaminA: 0,
        vitaminC: 0,
        vitaminD: 0,
        vitaminE: 0,
        vitaminB6: 0,
        vitaminB12: 0,
        folate: 0,
        magnesium: 290,
        potassium: 8,
        zinc: 0.1,
        phosphorus: 0
    },
    'vanilla extract': {
        calories: 288,
        fat: 0.1,
        carbs: 12.6,
        protein: 0.1,
        sugar: 12.6,
        fiber: 0,
        sodium: 9,
        calcium: 11,
        iron: 0.1,
        vitaminA: 0,
        vitaminC: 0,
        vitaminD: 0,
        vitaminE: 0,
        vitaminB6: 0.01,
        vitaminB12: 0,
        folate: 1,
        magnesium: 12,
        potassium: 148,
        zinc: 0.1,
        phosphorus: 6
    },

    // Fruits
    'apples': {
        calories: 52,
        fat: 0.2,
        carbs: 14.0,
        protein: 0.3,
        sugar: 10.0,
        fiber: 2.4,
        sodium: 1,
        calcium: 6,
        iron: 0.1,
        vitaminA: 3,
        vitaminC: 4.6,
        vitaminD: 0,
        vitaminE: 0.2,
        vitaminB6: 0.04,
        vitaminB12: 0,
        folate: 3,
        magnesium: 5,
        potassium: 107,
        zinc: 0.04,
        phosphorus: 11
    },

    // Default fallback for unknown ingredients
    'unknown': {
        calories: 200,
        fat: 5.0,
        carbs: 35.0,
        protein: 5.0,
        sugar: 10.0,
        fiber: 2.0,
        sodium: 100,
        calcium: 50,
        iron: 1.0,
        vitaminA: 25,
        vitaminC: 5,
        vitaminD: 0.5,
        vitaminE: 0.5,
        vitaminB6: 0.1,
        vitaminB12: 0.1,
        folate: 10,
        magnesium: 25,
        potassium: 200,
        zinc: 0.5,
        phosphorus: 100
    }
};

// Ingredient parsing and measurement conversion
function parseIngredient(ingredientText) {
    if (!ingredientText || ingredientText.trim() === '') return null;
    
    // Clean up the ingredient text
    let text = ingredientText.trim();
    
    // Skip section headers, empty lines, and optional items
    if (text.includes(':') || text === '' || text.toLowerCase().includes('optional') || 
        text.startsWith('For ') || text.toLowerCase().includes('plus extra') || 
        !text.match(/^\d/)) {
        return null;
    }
    
    // Handle various measurement patterns
    let quantityMatch = text.match(/^(\d+(?:\.\d+)?(?:\/\d+)?)\s*([a-zA-Z]*)\s+(.+)/);
    
    if (!quantityMatch) {
        quantityMatch = text.match(/^(\d+\/\d+)\s*([a-zA-Z]*)\s+(.+)/);
    }
    
    if (!quantityMatch) return null;
    
    let quantity = quantityMatch[1];
    if (quantity.includes('/')) {
        const parts = quantity.split('/');
        quantity = parseFloat(parts[0]) / parseFloat(parts[1]);
    } else {
        quantity = parseFloat(quantity);
    }
    
    const unit = quantityMatch[2] || '';
    let ingredientName = quantityMatch[3];
    
    // Clean up ingredient name
    ingredientName = ingredientName
        .replace(/,.*$/, '')
        .replace(/\(.*?\)/g, '')
        .replace(/\s+/g, ' ')
        .trim()
        .toLowerCase();
    
    if (!unit && ingredientName.includes('large')) {
        ingredientName = ingredientName.replace('large', '').trim();
    }
    if (!unit && ingredientName.includes('small')) {
        ingredientName = ingredientName.replace('small', '').trim();
    }
    if (!unit && ingredientName.includes('medium')) {
        ingredientName = ingredientName.replace('medium', '').trim();
    }
    
    return {
        quantity,
        unit: unit.toLowerCase(),
        name: ingredientName,
        originalText: ingredientText
    };
}

// Volume to weight conversion helper
function getVolumeToWeightRatio(ingredientName) {
    // Approximate density ratios (ml to grams)
    if (ingredientName.includes('milk') || ingredientName.includes('water')) return 1.0;
    if (ingredientName.includes('flour')) return 0.5;
    if (ingredientName.includes('sugar')) return 0.8;
    if (ingredientName.includes('butter') || ingredientName.includes('oil')) return 0.9;
    if (ingredientName.includes('cream')) return 1.0;
    return 0.8; // Default density
}

// Convert various measurements to grams
function convertToGrams(quantity, unit, ingredientName) {
    const conversions = {
        // Weight
        'g': 1,
        'kg': 1000,
        'oz': 28.35,
        'lb': 453.59,
        
        // Volume to weight (approximate, varies by ingredient)
        'ml': getVolumeToWeightRatio(ingredientName),
        'l': getVolumeToWeightRatio(ingredientName) * 1000,
        'tsp': getVolumeToWeightRatio(ingredientName) * 5,
        'tbsp': getVolumeToWeightRatio(ingredientName) * 15,
        'cup': getVolumeToWeightRatio(ingredientName) * 240,
        
        // Special cases
        'can': 400, // Assume standard can
        'large': 50, // Large egg ~50g
        'medium': 40,
        'small': 30
    };
    
    return quantity * (conversions[unit] || 1);
}

// Find nutrition data for ingredient
function findNutritionData(ingredientName) {
    // Direct match first
    if (INGREDIENT_NUTRITION_DB[ingredientName]) {
        return INGREDIENT_NUTRITION_DB[ingredientName];
    }
    
    // Partial match
    for (const [key, data] of Object.entries(INGREDIENT_NUTRITION_DB)) {
        if (ingredientName.includes(key) || key.includes(ingredientName)) {
            return data;
        }
    }
    
    // Special cases
    if (ingredientName.includes('sugar')) return INGREDIENT_NUTRITION_DB['caster sugar'];
    if (ingredientName.includes('flour')) return INGREDIENT_NUTRITION_DB['plain flour'];
    if (ingredientName.includes('milk')) return INGREDIENT_NUTRITION_DB['milk'];
    if (ingredientName.includes('cream')) return INGREDIENT_NUTRITION_DB['double cream'];
    if (ingredientName.includes('butter')) return INGREDIENT_NUTRITION_DB['butter'];
    
    return INGREDIENT_NUTRITION_DB['unknown'];
}

// Calculate nutrition for entire recipe
function calculateRecipeNutrition(ingredients, servings = 1) {
    console.log('Calculating nutrition for ingredients:', ingredients);
    console.log('Servings:', servings);
    
    const totalNutrition = {
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
        sugar: 0,
        fiber: 0,
        sodium: 0,
        calcium: 0,
        iron: 0,
        vitaminA: 0,
        vitaminC: 0,
        vitaminD: 0,
        vitaminE: 0,
        vitaminB6: 0,
        vitaminB12: 0,
        folate: 0,
        magnesium: 0,
        potassium: 0,
        zinc: 0,
        phosphorus: 0
    };
    
    ingredients.forEach(ingredientText => {
        const parsed = parseIngredient(ingredientText);
        if (!parsed) {
            console.log('Skipped ingredient:', ingredientText);
            return;
        }
        
        console.log('Parsed ingredient:', parsed);
        
        const weightInGrams = convertToGrams(parsed.quantity, parsed.unit, parsed.name);
        const nutritionData = findNutritionData(parsed.name);
        
        console.log('Weight in grams:', weightInGrams);
        console.log('Nutrition data:', nutritionData);
        
        // Calculate nutrition per 100g and scale by actual weight
        const scale = weightInGrams / 100;
        
        Object.keys(totalNutrition).forEach(nutrient => {
            totalNutrition[nutrient] += nutritionData[nutrient] * scale;
        });
    });
    
    console.log('Total nutrition:', totalNutrition);
    
    // Calculate per serving
    const perServing = {};
    Object.keys(totalNutrition).forEach(nutrient => {
        const value = totalNutrition[nutrient] / servings;
        if (nutrient === 'sodium') {
            perServing[nutrient] = `${Math.round(value)}mg`;
        } else if (nutrient === 'calories') {
            perServing[nutrient] = Math.round(value);
        } else if (['calcium', 'iron', 'vitaminA', 'vitaminC', 'vitaminD', 'vitaminE', 'vitaminB6', 'vitaminB12', 'folate', 'magnesium', 'potassium', 'zinc', 'phosphorus'].includes(nutrient)) {
            // Keep micronutrients as numbers for easier calculation
            perServing[nutrient] = Math.round(value * 10) / 10;
        } else {
            perServing[nutrient] = `${Math.round(value * 10) / 10}g`;
        }
    });
    
    console.log('Per serving nutrition:', perServing);
    
    return perServing;
}

// Format nutrition for display
function formatNutritionValue(value, unit = 'g') {
    if (value < 0.1) return `0${unit}`;
    if (value < 1) return `${Math.round(value * 10) / 10}${unit}`;
    return `${Math.round(value)}${unit}`;
}

// Export functions for use in recipe-detail.js
window.nutritionCalculator = {
    calculateRecipeNutrition,
    formatNutritionValue,
    INGREDIENT_NUTRITION_DB
};

// Also export functions globally for easier access
window.calculateRecipeNutrition = calculateRecipeNutrition;
window.formatNutritionValue = formatNutritionValue;

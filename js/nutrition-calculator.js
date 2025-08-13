// Comprehensive Ingredient Nutrition Database
// Values per 100g unless otherwise specified

const INGREDIENT_NUTRITION_DB = {
    // Dairy Products - USDA FoodData Central verified values
    'condensed milk': {
        // USDA FDC ID: 169218 - Milk, canned, condensed, sweetened
        calories: 321,
        fat: 8.70,
        carbs: 54.40,
        protein: 7.91,
        sugar: 54.40,
        fiber: 0,
        sodium: 127,
        calcium: 284,
        iron: 0.19,
        vitaminA: 64,
        vitaminC: 2.8,
        vitaminD: 0.1,
        vitaminE: 0.15,
        vitaminB6: 0.052,
        vitaminB12: 0.33,
        folate: 11,
        magnesium: 26,
        potassium: 371,
        zinc: 0.94,
        phosphorus: 253
    },
    'whole milk': {
        // USDA FDC ID: 171256 - Milk, whole, 3.25% milkfat
        calories: 61,
        fat: 3.27,
        carbs: 4.78,
        protein: 3.15,
        sugar: 5.05,
        fiber: 0,
        sodium: 40,
        calcium: 113,
        iron: 0.03,
        vitaminA: 46,
        vitaminC: 0,
        vitaminD: 1.2,
        vitaminE: 0.07,
        vitaminB6: 0.036,
        vitaminB12: 0.45,
        folate: 5,
        magnesium: 10,
        potassium: 143,
        zinc: 0.37,
        phosphorus: 84
    },
    'milk': {
        // USDA FDC ID: 171256 - Milk, whole, 3.25% milkfat (default to whole milk)
        calories: 61,
        fat: 3.27,
        carbs: 4.78,
        protein: 3.15,
        sugar: 5.05,
        fiber: 0,
        sodium: 40,
        calcium: 113,
        iron: 0.03,
        vitaminA: 46,
        vitaminC: 0,
        vitaminD: 1.2,
        vitaminE: 0.07,
        vitaminB6: 0.036,
        vitaminB12: 0.45,
        folate: 5,
        magnesium: 10,
        potassium: 143,
        zinc: 0.37,
        phosphorus: 84
    },
    'double cream': {
        // USDA FDC ID: 171050 - Cream, fluid, heavy whipping
        calories: 345,
        fat: 37.0,
        carbs: 2.79,
        protein: 2.05,
        sugar: 2.92,
        fiber: 0,
        sodium: 38,
        calcium: 65,
        iron: 0.07,
        vitaminA: 365,
        vitaminC: 0.6,
        vitaminD: 1.5,
        vitaminE: 1.17,
        vitaminB6: 0.017,
        vitaminB12: 0.17,
        folate: 3,
        magnesium: 7,
        potassium: 75,
        zinc: 0.20,
        phosphorus: 61
    },
    'heavy cream': {
        // USDA FDC ID: 171050 - Cream, fluid, heavy whipping
        calories: 345,
        fat: 37.0,
        carbs: 2.79,
        protein: 2.05,
        sugar: 2.92,
        fiber: 0,
        sodium: 38,
        calcium: 65,
        iron: 0.07,
        vitaminA: 365,
        vitaminC: 0.6,
        vitaminD: 1.5,
        vitaminE: 1.17,
        vitaminB6: 0.017,
        vitaminB12: 0.17,
        folate: 3,
        magnesium: 7,
        potassium: 75,
        zinc: 0.20,
        phosphorus: 61
    },
    'butter': {
        // USDA FDC ID: 171435 - Butter, salted
        calories: 717,
        fat: 81.11,
        carbs: 0.06,
        protein: 0.85,
        sugar: 0.06,
        fiber: 0,
        sodium: 11,
        calcium: 24,
        iron: 0.02,
        vitaminA: 684,
        vitaminC: 0,
        vitaminD: 1.5,
        vitaminE: 2.32,
        vitaminB6: 0.003,
        vitaminB12: 0.13,
        folate: 3,
        magnesium: 2,
        potassium: 24,
        zinc: 0.09,
        phosphorus: 24
    },
    'unsalted butter': {
        // USDA FDC ID: 171145 - Butter, without salt
        calories: 717,
        fat: 81.11,
        carbs: 0.06,
        protein: 0.85,
        sugar: 0.06,
        fiber: 0,
        sodium: 2,
        calcium: 24,
        iron: 0.02,
        vitaminA: 684,
        vitaminC: 0,
        vitaminD: 1.5,
        vitaminE: 2.32,
        vitaminB6: 0.003,
        vitaminB12: 0.13,
        folate: 3,
        magnesium: 2,
        potassium: 24,
        zinc: 0.09,
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

    // Sugars and Sweeteners - USDA FoodData Central verified values
    'light brown sugar': {
        // USDA FDC ID: 168833 - Sugars, brown
        calories: 380,
        fat: 0,
        carbs: 98.09,
        protein: 0,
        sugar: 97.33,
        fiber: 0,
        sodium: 12,
        calcium: 83,
        iron: 0.71,
        vitaminA: 0,
        vitaminC: 0,
        vitaminD: 0,
        vitaminE: 0,
        vitaminB6: 0.026,
        vitaminB12: 0,
        folate: 1,
        magnesium: 9,
        potassium: 133,
        zinc: 0.03,
        phosphorus: 1
    },
    'brown sugar': {
        // USDA FDC ID: 168833 - Sugars, brown
        calories: 380,
        fat: 0,
        carbs: 98.09,
        protein: 0,
        sugar: 97.33,
        fiber: 0,
        sodium: 12,
        calcium: 83,
        iron: 0.71,
        vitaminA: 0,
        vitaminC: 0,
        vitaminD: 0,
        vitaminE: 0,
        vitaminB6: 0.026,
        vitaminB12: 0,
        folate: 1,
        magnesium: 9,
        potassium: 133,
        zinc: 0.03,
        phosphorus: 1
    },
    'caster sugar': {
        // USDA FDC ID: 169655 - Sugars, granulated
        calories: 387,
        fat: 0,
        carbs: 99.98,
        protein: 0,
        sugar: 99.80,
        fiber: 0,
        sodium: 1,
        calcium: 1,
        iron: 0.01,
        vitaminA: 0,
        vitaminC: 0,
        vitaminD: 0,
        vitaminE: 0,
        vitaminB6: 0,
        vitaminB12: 0,
        folate: 0,
        magnesium: 0,
        potassium: 2,
        zinc: 0.01,
        phosphorus: 0
    },
    'white sugar': {
        // USDA FDC ID: 169655 - Sugars, granulated
        calories: 387,
        fat: 0,
        carbs: 99.98,
        protein: 0,
        sugar: 99.80,
        fiber: 0,
        sodium: 1,
        calcium: 1,
        iron: 0.01,
        vitaminA: 0,
        vitaminC: 0,
        vitaminD: 0,
        vitaminE: 0,
        vitaminB6: 0,
        vitaminB12: 0,
        folate: 0,
        magnesium: 0,
        potassium: 2,
        zinc: 0.01,
        phosphorus: 0
    },

    // Flours and Grains - USDA FoodData Central verified values
    'plain flour': {
        // USDA FDC ID: 168763 - Wheat flour, white, all-purpose, enriched
        calories: 364,
        fat: 0.98,
        carbs: 76.31,
        protein: 10.33,
        sugar: 0.27,
        fiber: 2.7,
        sodium: 2,
        calcium: 15,
        iron: 4.64,
        vitaminA: 0,
        vitaminC: 0,
        vitaminD: 0,
        vitaminE: 0.06,
        vitaminB6: 0.044,
        vitaminB12: 0,
        folate: 167,
        magnesium: 22,
        potassium: 107,
        zinc: 0.70,
        phosphorus: 108
    },
    'all-purpose flour': {
        // USDA FDC ID: 168763 - Wheat flour, white, all-purpose, enriched
        calories: 364,
        fat: 0.98,
        carbs: 76.31,
        protein: 10.33,
        sugar: 0.27,
        fiber: 2.7,
        sodium: 2,
        calcium: 15,
        iron: 4.64,
        vitaminA: 0,
        vitaminC: 0,
        vitaminD: 0,
        vitaminE: 0.06,
        vitaminB6: 0.044,
        vitaminB12: 0,
        folate: 167,
        magnesium: 22,
        potassium: 107,
        zinc: 0.70,
        phosphorus: 108
    },
    'bread flour': {
        // USDA FDC ID: 168762 - Wheat flour, white, bread, enriched
        calories: 361,
        fat: 1.87,
        carbs: 71.97,
        protein: 12.91,
        sugar: 0.41,
        fiber: 2.4,
        sodium: 2,
        calcium: 21,
        iron: 4.64,
        vitaminA: 0,
        vitaminC: 0,
        vitaminD: 0,
        vitaminE: 0.33,
        vitaminB6: 0.054,
        vitaminB12: 0,
        folate: 197,
        magnesium: 25,
        potassium: 109,
        zinc: 0.91,
        phosphorus: 124
    },

    // Eggs - USDA FoodData Central verified values
    'eggs': {
        // USDA FDC ID: 748967 - Egg, whole, raw, fresh
        calories: 155,
        fat: 10.61,
        carbs: 1.12,
        protein: 12.56,
        sugar: 1.12,
        fiber: 0,
        sodium: 124,
        calcium: 50,
        iron: 1.83,
        vitaminA: 160,
        vitaminC: 0,
        vitaminD: 2.0,
        vitaminE: 1.03,
        vitaminB6: 0.121,
        vitaminB12: 1.29,
        folate: 44,
        magnesium: 10,
        potassium: 126,
        zinc: 1.05,
        phosphorus: 172
    },
    'egg': {
        // USDA FDC ID: 748967 - Egg, whole, raw, fresh
        calories: 155,
        fat: 10.61,
        carbs: 1.12,
        protein: 12.56,
        sugar: 1.12,
        fiber: 0,
        sodium: 124,
        calcium: 50,
        iron: 1.83,
        vitaminA: 160,
        vitaminC: 0,
        vitaminD: 2.0,
        vitaminE: 1.03,
        vitaminB6: 0.121,
        vitaminB12: 1.29,
        folate: 44,
        magnesium: 10,
        potassium: 126,
        zinc: 1.05,
        phosphorus: 172
    },

    // Baking ingredients - USDA FoodData Central verified values
    'baking powder': {
        // USDA FDC ID: 172003 - Leavening agents, baking powder, double-acting, sodium aluminum phosphate
        calories: 53,
        fat: 0,
        carbs: 27.70,
        protein: 0,
        sugar: 0,
        fiber: 0.2,
        sodium: 10530,
        calcium: 5860,
        iron: 0.33,
        vitaminA: 0,
        vitaminC: 0,
        vitaminD: 0,
        vitaminE: 0,
        vitaminB6: 0,
        vitaminB12: 0,
        folate: 0,
        magnesium: 2,
        potassium: 170,
        zinc: 0.07,
        phosphorus: 5876
    },
    'salt': {
        // USDA FDC ID: 169047 - Salt, table
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
        sugar: 0,
        fiber: 0,
        sodium: 38758,
        calcium: 24,
        iron: 0.33,
        vitaminA: 0,
        vitaminC: 0,
        vitaminD: 0,
        vitaminE: 0,
        vitaminB6: 0,
        vitaminB12: 0,
        folate: 0,
        magnesium: 290,
        potassium: 8,
        zinc: 0.10,
        phosphorus: 0
    },
    'vanilla extract': {
        // USDA FDC ID: 172025 - Vanilla extract
        calories: 288,
        fat: 0.06,
        carbs: 12.65,
        protein: 0.06,
        sugar: 12.65,
        fiber: 0,
        sodium: 9,
        calcium: 11,
        iron: 0.12,
        vitaminA: 0,
        vitaminC: 0,
        vitaminD: 0,
        vitaminE: 0,
        vitaminB6: 0.026,
        vitaminB12: 0,
        folate: 1,
        magnesium: 12,
        potassium: 148,
        zinc: 0.11,
        phosphorus: 6
    },

    // Fruits - USDA FoodData Central verified values
    'apples': {
        // USDA FDC ID: 171688 - Apples, raw, with skin
        calories: 52,
        fat: 0.17,
        carbs: 13.81,
        protein: 0.26,
        sugar: 10.39,
        fiber: 2.4,
        sodium: 1,
        calcium: 6,
        iron: 0.12,
        vitaminA: 3,
        vitaminC: 4.6,
        vitaminD: 0,
        vitaminE: 0.18,
        vitaminB6: 0.041,
        vitaminB12: 0,
        folate: 3,
        magnesium: 5,
        potassium: 107,
        zinc: 0.04,
        phosphorus: 11
    },
    'apple': {
        // USDA FDC ID: 171688 - Apples, raw, with skin
        calories: 52,
        fat: 0.17,
        carbs: 13.81,
        protein: 0.26,
        sugar: 10.39,
        fiber: 2.4,
        sodium: 1,
        calcium: 6,
        iron: 0.12,
        vitaminA: 3,
        vitaminC: 4.6,
        vitaminD: 0,
        vitaminE: 0.18,
        vitaminB6: 0.041,
        vitaminB12: 0,
        folate: 3,
        magnesium: 5,
        potassium: 107,
        zinc: 0.04,
        phosphorus: 11
    },

    // Additional common baking ingredients - USDA verified
    'chocolate chips': {
        // USDA FDC ID: 170273 - Candies, chocolate chips, semi-sweet
        calories: 479,
        fat: 28.33,
        carbs: 59.62,
        protein: 4.17,
        sugar: 51.95,
        fiber: 5.1,
        sodium: 6,
        calcium: 32,
        iron: 3.90,
        vitaminA: 2,
        vitaminC: 0,
        vitaminD: 0,
        vitaminE: 0.51,
        vitaminB6: 0.027,
        vitaminB12: 0.28,
        folate: 4,
        magnesium: 107,
        potassium: 300,
        zinc: 1.47,
        phosphorus: 132
    },
    'cocoa powder': {
        // USDA FDC ID: 170262 - Cocoa, dry powder, unsweetened
        calories: 228,
        fat: 13.70,
        carbs: 57.90,
        protein: 19.60,
        sugar: 1.75,
        fiber: 37.0,
        sodium: 21,
        calcium: 128,
        iron: 13.86,
        vitaminA: 0,
        vitaminC: 0,
        vitaminD: 0,
        vitaminE: 0.10,
        vitaminB6: 0.118,
        vitaminB12: 0,
        folate: 32,
        magnesium: 499,
        potassium: 1524,
        zinc: 6.81,
        phosphorus: 734
    },
    'vegetable oil': {
        // USDA FDC ID: 171413 - Oil, vegetable, corn, industrial and retail, all purpose salad or cooking
        calories: 884,
        fat: 100.0,
        carbs: 0,
        protein: 0,
        sugar: 0,
        fiber: 0,
        sodium: 0,
        calcium: 0,
        iron: 0.01,
        vitaminA: 0,
        vitaminC: 0,
        vitaminD: 0,
        vitaminE: 14.35,
        vitaminB6: 0,
        vitaminB12: 0,
        folate: 0,
        magnesium: 0,
        potassium: 0,
        zinc: 0.01,
        phosphorus: 0
    },
    'olive oil': {
        // USDA FDC ID: 171413 - Oil, olive, salad or cooking
        calories: 884,
        fat: 100.0,
        carbs: 0,
        protein: 0,
        sugar: 0,
        fiber: 0,
        sodium: 2,
        calcium: 1,
        iron: 0.56,
        vitaminA: 0,
        vitaminC: 0,
        vitaminD: 0,
        vitaminE: 14.35,
        vitaminB6: 0,
        vitaminB12: 0,
        folate: 0,
        magnesium: 0,
        potassium: 1,
        zinc: 0.02,
        phosphorus: 0
    },
    'honey': {
        // USDA FDC ID: 169640 - Honey
        calories: 304,
        fat: 0,
        carbs: 82.40,
        protein: 0.30,
        sugar: 82.12,
        fiber: 0.2,
        sodium: 4,
        calcium: 6,
        iron: 0.42,
        vitaminA: 0,
        vitaminC: 0.5,
        vitaminD: 0,
        vitaminE: 0,
        vitaminB6: 0.024,
        vitaminB12: 0,
        folate: 2,
        magnesium: 2,
        potassium: 52,
        zinc: 0.22,
        phosphorus: 4
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

// Enhanced ingredient matching with fuzzy logic and category-based fallbacks
function findNutritionData(ingredientName) {
    const cleanName = ingredientName.toLowerCase().trim();
    
    // 1. Direct exact match
    if (INGREDIENT_NUTRITION_DB[cleanName]) {
        console.log(`Direct match found for: ${cleanName}`);
        return INGREDIENT_NUTRITION_DB[cleanName];
    }
    
    // 2. Partial word matching with scoring
    let bestMatch = null;
    let bestScore = 0;
    
    for (const [key, data] of Object.entries(INGREDIENT_NUTRITION_DB)) {
        if (key === 'unknown') continue; // Skip unknown fallback
        
        const score = calculateMatchScore(cleanName, key);
        if (score > bestScore && score > 0.3) { // Minimum threshold
            bestScore = score;
            bestMatch = { key, data };
        }
    }
    
    if (bestMatch) {
        console.log(`Best partial match for "${cleanName}": ${bestMatch.key} (score: ${bestScore})`);
        return bestMatch.data;
    }
    
    // 3. Category-based intelligent fallbacks using nutritional similarity
    const categoryMatch = findByCategoryAndNutrition(cleanName);
    if (categoryMatch) {
        console.log(`Category-based match for "${cleanName}": ${categoryMatch.reason}`);
        return categoryMatch.data;
    }
    
    // 4. Generic ingredient estimation based on common food types
    const genericMatch = estimateFromFoodType(cleanName);
    console.log(`Generic estimation for "${cleanName}": ${genericMatch.reason}`);
    return genericMatch.data;
}

// Calculate match score between ingredient name and database key
function calculateMatchScore(ingredientName, dbKey) {
    const ingredientWords = ingredientName.split(/\s+/);
    const dbWords = dbKey.split(/\s+/);
    
    let score = 0;
    let totalWords = Math.max(ingredientWords.length, dbWords.length);
    
    // Check for word matches
    for (const iWord of ingredientWords) {
        for (const dWord of dbWords) {
            if (iWord === dWord) {
                score += 1.0; // Exact word match
            } else if (iWord.includes(dWord) || dWord.includes(iWord)) {
                score += 0.7; // Partial word match
            } else if (levenshteinDistance(iWord, dWord) <= 2 && Math.min(iWord.length, dWord.length) > 3) {
                score += 0.5; // Fuzzy match for longer words
            }
        }
    }
    
    return score / totalWords;
}

// Simple Levenshtein distance for fuzzy matching
function levenshteinDistance(str1, str2) {
    const matrix = [];
    for (let i = 0; i <= str2.length; i++) {
        matrix[i] = [i];
    }
    for (let j = 0; j <= str1.length; j++) {
        matrix[0][j] = j;
    }
    for (let i = 1; i <= str2.length; i++) {
        for (let j = 1; j <= str1.length; j++) {
            if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j] + 1
                );
            }
        }
    }
    return matrix[str2.length][str1.length];
}

// Find nutrition data based on food category and nutritional similarity
function findByCategoryAndNutrition(ingredientName) {
    // Dairy products
    if (ingredientName.includes('milk') || ingredientName.includes('cream') || 
        ingredientName.includes('yogurt') || ingredientName.includes('cheese')) {
        if (ingredientName.includes('heavy') || ingredientName.includes('whipping') || ingredientName.includes('double')) {
            return { data: INGREDIENT_NUTRITION_DB['double cream'], reason: 'Heavy dairy product' };
        }
        return { data: INGREDIENT_NUTRITION_DB['milk'], reason: 'Dairy product' };
    }
    
    // Sweeteners and sugars
    if (ingredientName.includes('sugar') || ingredientName.includes('syrup') || 
        ingredientName.includes('honey') || ingredientName.includes('maple') ||
        ingredientName.includes('sweet') || ingredientName.includes('molasses')) {
        if (ingredientName.includes('brown') || ingredientName.includes('raw') || ingredientName.includes('unrefined')) {
            return { data: INGREDIENT_NUTRITION_DB['brown sugar'], reason: 'Brown/unrefined sugar' };
        }
        return { data: INGREDIENT_NUTRITION_DB['caster sugar'], reason: 'Sugar/sweetener' };
    }
    
    // Flours and grains
    if (ingredientName.includes('flour') || ingredientName.includes('wheat') || 
        ingredientName.includes('grain') || ingredientName.includes('meal') ||
        ingredientName.includes('starch')) {
        if (ingredientName.includes('bread') || ingredientName.includes('strong') || ingredientName.includes('high protein')) {
            return { data: INGREDIENT_NUTRITION_DB['bread flour'], reason: 'High-protein flour' };
        }
        return { data: INGREDIENT_NUTRITION_DB['all-purpose flour'], reason: 'Flour/grain product' };
    }
    
    // Fats and oils
    if (ingredientName.includes('oil') || ingredientName.includes('fat') || 
        ingredientName.includes('shortening') || ingredientName.includes('lard') ||
        ingredientName.includes('margarine')) {
        return { data: INGREDIENT_NUTRITION_DB['butter'], reason: 'Fat/oil product' };
    }
    
    // Eggs and protein
    if (ingredientName.includes('egg') || ingredientName.includes('protein') ||
        ingredientName.includes('albumin')) {
        return { data: INGREDIENT_NUTRITION_DB['egg'], reason: 'Egg/protein product' };
    }
    
    // Fruits
    if (ingredientName.includes('apple') || ingredientName.includes('fruit') ||
        ingredientName.includes('berry') || ingredientName.includes('citrus') ||
        ingredientName.includes('orange') || ingredientName.includes('lemon') ||
        ingredientName.includes('banana') || ingredientName.includes('strawberry')) {
        return { data: INGREDIENT_NUTRITION_DB['apples'], reason: 'Fruit product' };
    }
    
    // Spices and flavorings (low nutritional impact)
    if (ingredientName.includes('vanilla') || ingredientName.includes('extract') ||
        ingredientName.includes('flavor') || ingredientName.includes('essence')) {
        return { data: INGREDIENT_NUTRITION_DB['vanilla extract'], reason: 'Flavoring/extract' };
    }
    
    // Leavening agents
    if (ingredientName.includes('baking') || ingredientName.includes('powder') ||
        ingredientName.includes('soda') || ingredientName.includes('yeast') ||
        ingredientName.includes('rising')) {
        return { data: INGREDIENT_NUTRITION_DB['baking powder'], reason: 'Leavening agent' };
    }
    
    // Salt and seasonings
    if (ingredientName.includes('salt') || ingredientName.includes('sodium') ||
        ingredientName.includes('season')) {
        return { data: INGREDIENT_NUTRITION_DB['salt'], reason: 'Salt/seasoning' };
    }
    
    return null;
}

// Estimate nutrition from general food type when no category match
function estimateFromFoodType(ingredientName) {
    // Nuts and seeds (high fat, moderate protein)
    if (ingredientName.includes('nut') || ingredientName.includes('seed') ||
        ingredientName.includes('almond') || ingredientName.includes('walnut') ||
        ingredientName.includes('pecan') || ingredientName.includes('sesame')) {
        return {
            data: {
                calories: 550, fat: 45, carbs: 15, protein: 18, sugar: 4, fiber: 8,
                sodium: 5, calcium: 150, iron: 2.5, vitaminA: 2, vitaminC: 1,
                vitaminD: 0, vitaminE: 15, vitaminB6: 0.2, vitaminB12: 0,
                folate: 25, magnesium: 200, potassium: 400, zinc: 2.5, phosphorus: 350
            },
            reason: 'Nut/seed estimation'
        };
    }
    
    // Vegetables (low calorie, high vitamins)
    if (ingredientName.includes('vegetable') || ingredientName.includes('veggie') ||
        ingredientName.includes('green') || ingredientName.includes('carrot') ||
        ingredientName.includes('onion') || ingredientName.includes('pepper')) {
        return {
            data: {
                calories: 25, fat: 0.2, carbs: 6, protein: 1.5, sugar: 3, fiber: 2.5,
                sodium: 10, calcium: 40, iron: 0.8, vitaminA: 180, vitaminC: 15,
                vitaminD: 0, vitaminE: 0.5, vitaminB6: 0.1, vitaminB12: 0,
                folate: 20, magnesium: 15, potassium: 200, zinc: 0.3, phosphorus: 25
            },
            reason: 'Vegetable estimation'
        };
    }
    
    // Meat and fish (high protein, moderate fat)
    if (ingredientName.includes('meat') || ingredientName.includes('beef') ||
        ingredientName.includes('chicken') || ingredientName.includes('fish') ||
        ingredientName.includes('pork') || ingredientName.includes('turkey')) {
        return {
            data: {
                calories: 200, fat: 12, carbs: 0, protein: 22, sugar: 0, fiber: 0,
                sodium: 70, calcium: 15, iron: 2.0, vitaminA: 8, vitaminC: 0,
                vitaminD: 1.0, vitaminE: 0.3, vitaminB6: 0.4, vitaminB12: 2.5,
                folate: 8, magnesium: 25, potassium: 300, zinc: 3.0, phosphorus: 200
            },
            reason: 'Meat/fish estimation'
        };
    }
    
    // Chocolate and cocoa (high fat, moderate carbs)
    if (ingredientName.includes('chocolate') || ingredientName.includes('cocoa') ||
        ingredientName.includes('cacao')) {
        return {
            data: {
                calories: 450, fat: 25, carbs: 50, protein: 8, sugar: 45, fiber: 5,
                sodium: 20, calcium: 80, iron: 3.5, vitaminA: 15, vitaminC: 0,
                vitaminD: 0, vitaminE: 1.2, vitaminB6: 0.05, vitaminB12: 0.2,
                folate: 12, magnesium: 150, potassium: 350, zinc: 1.8, phosphorus: 180
            },
            reason: 'Chocolate/cocoa estimation'
        };
    }
    
    // Generic baking ingredient (moderate calories, mostly carbs)
    return {
        data: {
            calories: 300, fat: 3, carbs: 65, protein: 8, sugar: 15, fiber: 3,
            sodium: 50, calcium: 50, iron: 1.5, vitaminA: 15, vitaminC: 2,
            vitaminD: 0.2, vitaminE: 0.8, vitaminB6: 0.08, vitaminB12: 0.1,
            folate: 15, magnesium: 35, potassium: 180, zinc: 0.8, phosphorus: 120
        },
        reason: 'Generic baking ingredient estimation'
    };
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

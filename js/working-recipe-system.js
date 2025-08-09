// Working Recipe System - All Data Included
console.log('🎯 Loading working recipe system with all data...');

// All recipe data manually included
window.RECIPES_DATA = [
    {
        id: 1,
        title: "Classic Chocolate Chip Cookies",
        description: "Perfectly chewy and crispy chocolate chip cookies that are easy to make and impossible to resist.",
        image: "images/chocolate-fudge.jpg",
        time: "25 mins",
        difficulty: "Easy",
        category: "Desserts",
        youtubeId: "dQw4w9WgXcQ",
        tags: ["cookies", "chocolate", "dessert", "baking", "easy"],
        servings: 24,
        prepTime: "15 mins",
        cookTime: "10 mins",
        ingredients: [
            "2¼ cups all-purpose flour",
            "1 tsp baking soda",
            "1 tsp salt",
            "1 cup (2 sticks) butter, softened",
            "¾ cup granulated sugar",
            "¾ cup packed brown sugar",
            "2 large eggs",
            "2 tsp vanilla extract",
            "2 cups chocolate chips"
        ],
        instructions: [
            "Preheat oven to 375°F (190°C).",
            "In a medium bowl, whisk together flour, baking soda, and salt.",
            "In a large bowl, cream together butter and both sugars until light and fluffy.",
            "Beat in eggs one at a time, then stir in vanilla.",
            "Gradually blend in flour mixture.",
            "Stir in chocolate chips.",
            "Drop rounded tablespoons of dough onto ungreased cookie sheets.",
            "Bake 9-11 minutes or until golden brown.",
            "Cool on baking sheet for 2 minutes; remove to wire rack."
        ],
        tips: [
            "Don't overbake - cookies will look slightly underdone when perfect",
            "Use room temperature eggs for better mixing",
            "Chill dough for 30 minutes for thicker cookies"
        ],
        nutrition: {
            calories: 210,
            fat: "10g",
            carbs: "30g",
            protein: "3g",
            sugar: "18g"
        }
    },
    {
        id: 2,
        title: "Homemade Focaccia Bread",
        description: "Fluffy, herb-topped focaccia bread that's perfect as a side dish or for making sandwiches.",
        image: "images/focaccia-bread.jpg",
        time: "3 hours",
        difficulty: "Medium",
        category: "Bread",
        youtubeId: "NGnMrM9qDtE",
        tags: ["bread", "italian", "herbs", "olive oil", "artisan"],
        servings: 8,
        prepTime: "2.5 hours",
        cookTime: "25 mins",
        ingredients: [
            "500g strong white bread flour",
            "7g instant yeast",
            "10g salt",
            "375ml warm water",
            "6 tbsp olive oil, divided",
            "Fresh rosemary sprigs",
            "Sea salt flakes",
            "Cherry tomatoes (optional)"
        ],
        instructions: [
            "Mix flour, yeast, and salt in a large bowl.",
            "Add warm water and 2 tbsp olive oil. Mix until shaggy dough forms.",
            "Knead for 10 minutes until smooth and elastic.",
            "Place in oiled bowl, cover, and rise for 1.5-2 hours until doubled.",
            "Oil a 9x13 inch pan with 2 tbsp olive oil.",
            "Transfer dough to pan and stretch to fit. Let rest 30 minutes.",
            "Preheat oven to 425°F (220°C).",
            "Dimple the surface with your fingers.",
            "Drizzle with remaining olive oil, add rosemary and salt.",
            "Bake 20-25 minutes until golden brown."
        ],
        tips: [
            "Don't skip the dimpling - it creates the characteristic texture",
            "Use best quality olive oil for flavor",
            "Let dough come to room temperature before shaping"
        ],
        nutrition: {
            calories: 285,
            fat: "9g",
            carbs: "45g",
            protein: "8g",
            fiber: "2g"
        }
    },
    {
        id: 3,
        title: "Apple Crisp",
        description: "A classic apple crisp with a golden, crunchy oat topping served warm with vanilla ice cream.",
        image: "images/apple-crisp.jpg",
        time: "1 hour",
        difficulty: "Easy",
        category: "Desserts",
        youtubeId: "4BfGLGGWCKA",
        tags: ["apple", "dessert", "oats", "cinnamon", "comfort food"],
        servings: 8,
        prepTime: "20 mins",
        cookTime: "45 mins",
        ingredients: [
            "6 large apples, peeled and sliced",
            "1 cup old-fashioned oats",
            "1 cup all-purpose flour",
            "1 cup packed brown sugar",
            "½ cup cold butter, cubed",
            "1 tsp ground cinnamon",
            "½ tsp ground nutmeg",
            "¼ tsp salt",
            "2 tbsp granulated sugar",
            "1 tbsp lemon juice"
        ],
        instructions: [
            "Preheat oven to 375°F (190°C). Grease a 9x13 inch baking dish.",
            "In a large bowl, toss sliced apples with granulated sugar, lemon juice, and half the cinnamon.",
            "Arrange apples in prepared baking dish.",
            "In another bowl, combine oats, flour, brown sugar, remaining cinnamon, nutmeg, and salt.",
            "Cut in cold butter until mixture resembles coarse crumbs.",
            "Sprinkle topping evenly over apples.",
            "Bake 45 minutes or until topping is golden brown and apples are tender.",
            "Serve warm with vanilla ice cream."
        ],
        tips: [
            "Use a mix of apple varieties for best flavor",
            "Keep butter cold for crispier topping",
            "Cover with foil if topping browns too quickly"
        ],
        nutrition: {
            calories: 245,
            fat: "6g",
            carbs: "52g",
            protein: "3g",
            fiber: "4g"
        }
    },
    {
        id: 4,
        title: "Butter Scones",
        description: "Flaky, buttery scones perfect for afternoon tea or breakfast, served with jam and cream.",
        image: "images/butter-scones.jpg",
        time: "30 mins",
        difficulty: "Medium",
        category: "Breakfast",
        youtubeId: "5x-d3pabd5o",
        tags: ["scones", "british", "tea", "butter", "breakfast"],
        servings: 8,
        prepTime: "15 mins",
        cookTime: "15 mins",
        ingredients: [
            "2 cups all-purpose flour",
            "⅓ cup granulated sugar",
            "1 tbsp baking powder",
            "½ tsp salt",
            "6 tbsp cold butter, cubed",
            "1 large egg",
            "½ cup heavy cream",
            "1 tsp vanilla extract",
            "2 tbsp cream for brushing"
        ],
        instructions: [
            "Preheat oven to 400°F (200°C). Line baking sheet with parchment.",
            "In a large bowl, whisk together flour, sugar, baking powder, and salt.",
            "Cut in cold butter until mixture resembles coarse breadcrumbs.",
            "In a small bowl, whisk together egg, ½ cup cream, and vanilla.",
            "Add wet ingredients to dry ingredients and stir just until dough comes together.",
            "Turn onto floured surface and gently knead 2-3 times.",
            "Pat into 8-inch circle, about ¾ inch thick.",
            "Cut into 8 wedges and place on baking sheet.",
            "Brush tops with remaining cream.",
            "Bake 15-17 minutes until golden brown."
        ],
        tips: [
            "Handle dough as little as possible for tender scones",
            "Use very cold butter for flaky layers",
            "Don't twist cookie cutter - it seals edges and prevents rising"
        ],
        nutrition: {
            calories: 195,
            fat: "8g",
            carbs: "28g",
            protein: "4g",
            sugar: "6g"
        }
    },
    {
        id: 5,
        title: "Cinnamon Rolls",
        description: "Soft, pillowy cinnamon rolls with a gooey center and cream cheese glaze.",
        image: "images/cinnamon-rolls.jpg",
        time: "4 hours",
        difficulty: "Hard",
        category: "Breakfast",
        youtubeId: "5QjCBJdYTh0",
        tags: ["cinnamon", "rolls", "sweet", "breakfast", "yeast"],
        servings: 12,
        prepTime: "3 hours",
        cookTime: "25 mins",
        ingredients: [
            "3¼ cups all-purpose flour",
            "¼ cup granulated sugar",
            "1 packet (2¼ tsp) instant yeast",
            "1 tsp salt",
            "¾ cup warm milk",
            "¼ cup melted butter",
            "1 large egg",
            "⅓ cup butter, softened",
            "⅔ cup brown sugar",
            "2 tbsp ground cinnamon",
            "4 oz cream cheese, softened",
            "2 cups powdered sugar",
            "¼ cup milk"
        ],
        instructions: [
            "Mix flour, sugar, yeast, and salt in large bowl.",
            "Add warm milk, melted butter, and egg. Mix until dough forms.",
            "Knead 8 minutes until smooth. Place in greased bowl, cover, rise 1 hour.",
            "Roll dough into 16x12 inch rectangle.",
            "Spread softened butter over dough. Mix brown sugar and cinnamon, sprinkle over butter.",
            "Roll up tightly and cut into 12 pieces.",
            "Place in greased 9x13 pan, cover, rise 45 minutes.",
            "Preheat oven to 350°F (175°C).",
            "Bake 25-30 minutes until golden brown.",
            "Beat cream cheese, powdered sugar, and milk for glaze.",
            "Glaze warm rolls and serve."
        ],
        tips: [
            "Ensure milk is warm, not hot, to avoid killing yeast",
            "Don't over-flour when rolling to prevent dry rolls",
            "Glaze while rolls are still warm for best absorption"
        ],
        nutrition: {
            calories: 385,
            fat: "12g",
            carbs: "65g",
            protein: "7g",
            sugar: "32g"
        }
    },
    {
        id: 6,
        title: "Vanilla Fudge",
        description: "Creamy, melt-in-your-mouth vanilla fudge that's perfect for gifting or indulging.",
        image: "images/vanilla-fudge.jpg",
        time: "2 hours",
        difficulty: "Medium",
        category: "Desserts",
        youtubeId: "dQw4w9WgXcQ",
        tags: ["fudge", "vanilla", "candy", "sweet", "gift"],
        servings: 36,
        prepTime: "15 mins",
        cookTime: "1 hour 45 mins",
        ingredients: [
            "3 cups granulated sugar",
            "¾ cup butter",
            "⅔ cup evaporated milk",
            "12 oz white chocolate chips",
            "7 oz marshmallow creme",
            "2 tsp vanilla extract",
            "Pinch of salt"
        ],
        instructions: [
            "Line 9x13 inch pan with foil and butter it.",
            "In heavy saucepan, combine sugar, butter, and evaporated milk.",
            "Bring to rolling boil, stirring constantly.",
            "Boil 4 minutes, stirring constantly.",
            "Remove from heat and stir in white chocolate chips until melted.",
            "Add marshmallow creme, vanilla, and salt. Beat until well blended.",
            "Pour into prepared pan and spread evenly.",
            "Cool completely before cutting into squares.",
            "Store in airtight container."
        ],
        tips: [
            "Use a candy thermometer for best results (234°F)",
            "Don't scrape the sides of the pan when boiling",
            "Work quickly once off heat as fudge sets fast"
        ],
        nutrition: {
            calories: 145,
            fat: "5g",
            carbs: "25g",
            protein: "1g",
            sugar: "24g"
        }
    }
];

// Simple RecipeUtils
window.RecipeUtils = {
    getAllRecipes: async () => {
        return window.RECIPES_DATA;
    },
    
    getRecipeById: async (id) => {
        const recipes = await window.RecipeUtils.getAllRecipes();
        return recipes.find(recipe => recipe.id === parseInt(id));
    },
    
    getRecipesByCategory: async (category) => {
        const recipes = await window.RecipeUtils.getAllRecipes();
        return recipes.filter(recipe => recipe.category === category);
    },
    
    getCategories: async () => {
        const recipes = await window.RecipeUtils.getAllRecipes();
        return [...new Set(recipes.map(recipe => recipe.category))];
    },
    
    getDifficulties: async () => {
        const recipes = await window.RecipeUtils.getAllRecipes();
        return [...new Set(recipes.map(recipe => recipe.difficulty))];
    }
};

console.log('✅ Working recipe system loaded with', window.RECIPES_DATA.length, 'recipes');

// Fire ready event immediately
setTimeout(() => {
    window.dispatchEvent(new CustomEvent('recipesLoaded', {
        detail: {
            recipeCount: window.RECIPES_DATA.length,
            system: 'simple-individual'
        }
    }));
    console.log('🎉 Working system ready event fired');
}, 10);

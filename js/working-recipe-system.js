// Working Recipe System - All Data Included
console.log('🎯 Loading working recipe system with all data...');

// All recipe data manually included
window.RECIPES_DATA = [
    {
        id: 1,
        title: "Cinnamon Rolls (Overnight Tangzhong Method)",
        description: "Hand & Stand Mixer Instructions! Makes 8 big rolls (10cm) or 12 small rolls (7cm) with amazing swirls and fluffy texture.",
        image: "images/cinnamon-rolls.jpg",
        time: "12+ hours (overnight)",
        difficulty: "Hard",
        category: "Breakfast",
        youtubeId: "5QjCBJdYTh0",
        tags: ["cinnamon", "rolls", "overnight", "tangzhong", "breakfast", "sweet"],
        servings: "8-12 rolls",
        prepTime: "30 mins + overnight",
        cookTime: "25 mins",
        ingredients: [
            "For Tangzhong (Night Before):",
            "25g all-purpose flour",
            "120g milk",
            "",
            "For Dough:",
            "260g all-purpose flour",
            "45g brown sugar",
            "5g salt",
            "5g instant yeast",
            "2 large eggs",
            "5g vanilla extract",
            "110g softened butter (cubed)",
            "",
            "For Filling:",
            "40g melted butter",
            "10g ground cinnamon",
            "25g white sugar",
            "45g brown sugar",
            "",
            "Tools Needed:",
            "Stand mixer (with dough hook) or strong arms + wooden spoon",
            "Rolling pin + ruler",
            "Parchment paper",
            "9x13-inch (23x33cm) baking pan"
        ],
        instructions: [
            "NIGHT BEFORE - TANGZHONG:",
            "In a small pot, whisk 25g flour + 120g milk until smooth. Cook on medium heat, stirring non-stop, until thick like pudding (~3 mins). Let cool 10 mins before using.",
            "",
            "MAKE DOUGH - Stand Mixer Method:",
            "In mixer bowl, add cooled tangzhong, 260g flour, 45g brown sugar, 5g salt, 5g yeast, 2 eggs, 5g vanilla. Mix on low speed until combined (~10 min). Check for readiness using the windowpane test before adding butter",
            "Divide 100g softened butter into 8-10 bits. Add the softened butter bit by bit slowly while mixing, waiting till one bit is combined before adding the next. Knead on medium speed for 8-10 mins until smooth & stretchy. Check for readiness using the windowpane test",
            "",
            "MAKE DOUGH - Hand Method:",
            "In large bowl, mix tangzhong + flour + sugar + salt + yeast. Add eggs + vanilla, mix with wooden spoon until rough dough forms (~5 min). Let rest 10 mins",
            "Add softened butter piece by piece. Use the slap and fold technique: grab dough, slap onto counter, fold over itself. Repeat for 15-20 mins until dough becomes smooth, elastic and less sticky. Check for readiness using the windowpane test",
            "",
            "FIRST RISE (Overnight):",
            "Cover bowl with cling film, refrigerate 8-12 hours. (Winter tip: If kitchen is cold, let dough sit at room temp 1 hour first.)",
            "",
            "MAKE FILLING (Night Before):",
            "Mix 40g melted butter, 10g cinnamon, 25g white sugar, 45g brown sugar into thick paste. Cover and leave at room temp.",
            "",
            "NEXT MORNING - Shape the Rolls:",
            "Take dough from fridge, let sit 15 mins. On floured surface, roll into rectangle: For 8 BIG rolls: 30cm width x 40cm length. For 12 SMALL rolls: 25cm width x 45cm length.",
            "Spread filling paste evenly, leaving 2cm empty at top edge.",
            "",
            "ROLL & CUT:",
            "Start rolling from long side for tight swirls. Cut with sharp knife or floss: 8 big rolls = 5cm wide slices, 12 small rolls = 3.5cm wide slices.",
            "",
            "SECOND RISE:",
            "Place rolls on parchment-lined pan, cover with towel. Let rise until puffy & almost doubled (~1 hour). (Winter tip: Place near warm oven or bowl of hot water.)",
            "",
            "BAKE & FINISH:",
            "Preheat oven to 180°C (350°F). Bake 20-25 mins until golden. Spread icing on warm rolls."
        ],
        tips: [
            "✅ More Swirls? Roll dough with width facing you (shorter side = tighter rolls)",
            "✅ Clean Cuts? Use dental floss to slice dough without squishing",
            "✅ No-Stick Pan? Always use parchment paper!",
            "Cold dough is easier to roll - don't skip the 15-min rest after refrigeration",
            "Tangzhong method creates extra fluffy, soft texture that stays fresh longer",
            "Make filling night before so it's ready when you need it"
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
            "For the Dough:",
            "4 cups bread flour",
            "2 tsp salt",
            "1 tsp active dry yeast",
            "2 cups warm water",
            "2 tbsp olive oil",
            "",
            "For the Topping:",
            "2 tbsp olive oil",
            "Fresh rosemary sprigs",
            "Coarse sea salt",
            "Cherry tomatoes (optional)"
        ],
        instructions: [
            "PREPARE THE DOUGH:",
            "In a large bowl, whisk together flour and salt.",
            "In a small bowl, dissolve yeast in warm water. Let stand for 5 minutes until foamy.",
            "Add yeast mixture and 2 tablespoons olive oil to flour. Mix until a shaggy dough forms.",
            "",
            "FIRST RISE:",
            "Cover and let rise in a warm place for 2 hours, until doubled in size.",
            "",
            "SHAPE AND SECOND RISE:",
            "Oil a 9x13 inch pan with remaining olive oil. Transfer dough to pan and gently stretch to fit.",
            "Cover and let rise for 30 minutes.",
            "",
            "BAKE:",
            "Preheat oven to 425°F (220°C).",
            "Use fingers to make dimples all over the dough surface.",
            "Top with rosemary, cherry tomatoes, and coarse salt.",
            "Bake for 25-30 minutes until golden brown.",
            "Cool for 10 minutes before slicing and serving."
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

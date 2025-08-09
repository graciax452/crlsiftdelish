// Recipe Data Module - Separated for better organization
// This file contains all recipe data and can easily scale to 1000+ recipes

const RECIPES_DATA = [
    {
        id: 1,
        title: "Classic Chocolate Chip Cookies",
        description: "Perfectly chewy and crispy chocolate chip cookies that are easy to make and impossible to resist.",
        image: "images/chocolate-fudge.jpg",
        time: "25 mins",
        difficulty: "Easy",
        category: "Desserts",
        youtubeId: "dQw4w9WgXcQ",
        ingredients: [
            "2¼ cups all-purpose flour",
            "1 tsp baking soda",
            "1 tsp salt",
            "1 cup butter, softened",
            "¾ cup granulated sugar",
            "¾ cup packed brown sugar",
            "2 large eggs",
            "2 tsp vanilla extract",
            "2 cups chocolate chips"
        ],
        instructions: [
            "Preheat oven to 375°F (190°C). Line baking sheets with parchment paper.",
            "In a medium bowl, whisk together flour, baking soda, and salt. Set aside.",
            "In a large bowl, cream together softened butter and both sugars until light and fluffy, about 3-4 minutes.",
            "Beat in eggs one at a time, then add vanilla extract.",
            "Gradually mix in the flour mixture until just combined. Don't overmix.",
            "Stir in chocolate chips until evenly distributed.",
            "Drop rounded tablespoons of dough onto prepared baking sheets, spacing them 2 inches apart.",
            "Bake for 9-11 minutes, until edges are golden brown but centers still look slightly underbaked.",
            "Cool on baking sheet for 5 minutes, then transfer to a wire rack to cool completely."
        ]
    },
    {
        id: 2,
        title: "Homemade Focaccia Bread",
        description: "Fluffy, herb-topped focaccia bread that's perfect as a side dish or for making sandwiches.",
        image: "images/focaccia-bread.jpg",
        time: "3 hours",
        difficulty: "Medium",
        category: "Bread",
        youtubeId: "dQw4w9WgXcQ",
        ingredients: [
            "4 cups bread flour",
            "2 tsp salt",
            "1 tsp active dry yeast",
            "2 cups warm water",
            "4 tbsp olive oil, divided",
            "Fresh rosemary sprigs",
            "Coarse sea salt",
            "Cherry tomatoes (optional)"
        ],
        instructions: [
            "In a large bowl, whisk together flour and salt.",
            "In a small bowl, dissolve yeast in warm water. Let stand for 5 minutes until foamy.",
            "Add yeast mixture and 2 tablespoons olive oil to flour. Mix until a shaggy dough forms.",
            "Cover and let rise in a warm place for 2 hours, until doubled in size.",
            "Oil a 9x13 inch pan with remaining olive oil. Transfer dough to pan and gently stretch to fit.",
            "Cover and let rise for 30 minutes.",
            "Preheat oven to 425°F (220°C).",
            "Use fingers to make dimples all over the dough surface.",
            "Top with rosemary, cherry tomatoes, and coarse salt.",
            "Bake for 25-30 minutes until golden brown.",
            "Cool for 10 minutes before slicing and serving."
        ]
    },
    {
        id: 3,
        title: "Apple Crisp",
        description: "A warm, comforting dessert with tender spiced apples and a crunchy oat topping.",
        image: "images/apple-crisp.jpg",
        time: "1 hour",
        difficulty: "Easy",
        category: "Desserts",
        youtubeId: "dQw4w9WgXcQ",
        ingredients: [
            "6 large apples, peeled and sliced",
            "1 cup rolled oats",
            "¾ cup all-purpose flour",
            "¾ cup brown sugar",
            "½ cup cold butter, cubed",
            "1 tsp cinnamon",
            "½ tsp nutmeg",
            "¼ tsp salt",
            "2 tbsp lemon juice"
        ],
        instructions: [
            "Preheat oven to 375°F (190°C). Grease a 9x9 inch baking dish.",
            "Toss sliced apples with lemon juice and arrange in prepared baking dish.",
            "In a bowl, combine oats, flour, brown sugar, cinnamon, nutmeg, and salt.",
            "Cut in cold butter using a pastry cutter or forks until mixture resembles coarse crumbs.",
            "Sprinkle topping evenly over apples.",
            "Bake for 35-40 minutes until topping is golden and apples are tender.",
            "Let cool for 10 minutes before serving.",
            "Serve warm with vanilla ice cream if desired."
        ]
    },
    {
        id: 4,
        title: "Butter Scones",
        description: "Flaky, buttery scones perfect for breakfast or afternoon tea.",
        image: "images/butter-scones.jpg",
        time: "30 mins",
        difficulty: "Medium",
        category: "Breakfast",
        youtubeId: "dQw4w9WgXcQ",
        ingredients: [
            "2 cups all-purpose flour",
            "⅓ cup sugar",
            "1 tbsp baking powder",
            "½ tsp salt",
            "6 tbsp cold butter, cubed",
            "⅔ cup heavy cream",
            "1 large egg",
            "1 tsp vanilla extract"
        ],
        instructions: [
            "Preheat oven to 400°F (200°C). Line a baking sheet with parchment paper.",
            "In a large bowl, whisk together flour, sugar, baking powder, and salt.",
            "Cut in cold butter until mixture resembles coarse crumbs.",
            "In a separate bowl, whisk together cream, egg, and vanilla.",
            "Pour wet ingredients into dry ingredients and stir until just combined.",
            "Turn dough onto a floured surface and gently knead 2-3 times.",
            "Pat dough into a circle about ¾ inch thick. Cut into 8 wedges.",
            "Place scones on prepared baking sheet, spacing them apart.",
            "Bake for 15-17 minutes until golden brown.",
            "Cool on a wire rack before serving."
        ]
    },
    {
        id: 5,
        title: "Cinnamon Rolls",
        description: "Soft, gooey cinnamon rolls with a sweet glaze - perfect for weekend mornings.",
        image: "images/cinnamon-rolls.jpg",
        time: "3 hours",
        difficulty: "Hard",
        category: "Breakfast",
        youtubeId: "dQw4w9WgXcQ",
        ingredients: [
            "3½ cups all-purpose flour",
            "¼ cup sugar",
            "1 packet active dry yeast",
            "1 tsp salt",
            "⅓ cup milk",
            "¼ cup water",
            "3 tbsp butter",
            "1 large egg",
            "For filling: ¼ cup butter, ½ cup brown sugar, 2 tsp cinnamon",
            "For glaze: 1 cup powdered sugar, 3 tbsp milk, ½ tsp vanilla"
        ],
        instructions: [
            "In a large bowl, combine 1 cup flour, sugar, yeast, and salt.",
            "Heat milk, water, and butter to 120-130°F. Add to flour mixture along with egg.",
            "Beat for 2 minutes. Stir in remaining flour to form a soft dough.",
            "Knead on floured surface for 6-8 minutes until smooth. Place in greased bowl.",
            "Cover and let rise in warm place for 1 hour until doubled.",
            "Punch down dough. Roll into 12x8 inch rectangle.",
            "Spread with softened butter, then sprinkle with brown sugar and cinnamon.",
            "Roll up tightly, starting from long side. Cut into 12 slices.",
            "Place in greased 9x13 pan. Cover and let rise 30 minutes.",
            "Bake at 375°F for 20-25 minutes until golden.",
            "Mix glaze ingredients and drizzle over warm rolls."
        ]
    },
    {
        id: 6,
        title: "Vanilla Fudge",
        description: "Rich, creamy vanilla fudge that melts in your mouth - a perfect sweet treat.",
        image: "images/vanilla-fudge.jpg",
        time: "2 hours",
        difficulty: "Medium",
        category: "Desserts",
        youtubeId: "dQw4w9WgXcQ",
        ingredients: [
            "3 cups white sugar",
            "¾ cup butter",
            "⅔ cup evaporated milk",
            "12 oz white chocolate chips",
            "7 oz marshmallow creme",
            "2 tsp vanilla extract",
            "Pinch of salt"
        ],
        instructions: [
            "Line an 8x8 inch pan with foil and butter the foil.",
            "In a heavy saucepan, combine sugar, butter, and evaporated milk.",
            "Bring to a full rolling boil, stirring constantly.",
            "Continue boiling for 4 minutes, stirring constantly.",
            "Remove from heat and quickly stir in white chocolate chips until melted.",
            "Add marshmallow creme, vanilla, and salt. Beat until well blended.",
            "Pour into prepared pan and spread evenly.",
            "Cool at room temperature for 2 hours until set.",
            "Cut into squares and store in airtight container."
        ]
    }
];

// Recipe utility functions
const RecipeUtils = {
    // Get all recipes
    getAllRecipes: () => RECIPES_DATA,
    
    // Get recipe by ID
    getRecipeById: (id) => RECIPES_DATA.find(recipe => recipe.id === parseInt(id)),
    
    // Get recipes by category
    getRecipesByCategory: (category) => RECIPES_DATA.filter(recipe => recipe.category === category),
    
    // Get recipes by difficulty
    getRecipesByDifficulty: (difficulty) => RECIPES_DATA.filter(recipe => recipe.difficulty === difficulty),
    
    // Search recipes by title or description
    searchRecipes: (searchTerm) => {
        const term = searchTerm.toLowerCase();
        return RECIPES_DATA.filter(recipe => 
            recipe.title.toLowerCase().includes(term) || 
            recipe.description.toLowerCase().includes(term)
        );
    },
    
    // Get total recipe count
    getRecipeCount: () => RECIPES_DATA.length,
    
    // Get all categories
    getCategories: () => [...new Set(RECIPES_DATA.map(recipe => recipe.category))],
    
    // Get all difficulty levels
    getDifficulties: () => [...new Set(RECIPES_DATA.map(recipe => recipe.difficulty))]
};

// Export for use in other files
if (typeof window !== 'undefined') {
    window.RECIPES_DATA = RECIPES_DATA;
    window.RecipeUtils = RecipeUtils;
}

console.log(`📚 Recipe data module loaded with ${RECIPES_DATA.length} recipes`);

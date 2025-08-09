// Bread Recipe Category
// This file contains all bread and baking recipes for better organization

const BREAD_RECIPES = [
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
    }
];

// Export for the recipe manager
if (typeof window !== 'undefined') {
    window.BREAD_RECIPES = BREAD_RECIPES;
} else if (typeof module !== 'undefined') {
    module.exports = BREAD_RECIPES;
}

console.log(`🍞 Loaded ${BREAD_RECIPES.length} bread recipes`);

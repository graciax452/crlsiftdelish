// Homemade Focaccia Bread Recipe
// Individual recipe file for easy management

const RECIPE_DATA = {
    id: 2,
    title: "Homemade Focaccia Bread",
    description: "Fluffy, herb-topped focaccia bread that's perfect as a side dish or for making sandwiches.",
    image: "images/focaccia-bread.jpg",
    time: "3 hours",
    difficulty: "Medium",
    category: "Bread",
    youtubeId: "dQw4w9WgXcQ",
    tags: ["bread", "italian", "herbs", "yeast", "homemade"],
    servings: 8,
    prepTime: "20 mins",
    cookTime: "25 mins",
    restTime: "2.5 hours",
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
        "High hydration dough - it will be sticky, that's normal",
        "Don't skip the dimpling - it creates the characteristic texture",
        "Let it cool slightly before cutting for best results"
    ],
    nutrition: {
        calories: 245,
        fat: "7g",
        carbs: "38g",
        protein: "7g"
    }
};

// Export for the recipe system
if (typeof window !== 'undefined') {
    window.HOMEMADE_FOCACCIA_BREAD = RECIPE_DATA;
} else if (typeof module !== 'undefined') {
    module.exports = RECIPE_DATA;
}

console.log(`🍞 Loaded recipe: ${RECIPE_DATA.title}`);

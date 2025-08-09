// Cinnamon Rolls Recipe
// Individual recipe file for easy management

const RECIPE_DATA = {
    id: 5,
    title: "Cinnamon Rolls",
    description: "Soft, gooey cinnamon rolls with a sweet glaze - perfect for weekend mornings.",
    image: "images/cinnamon-rolls.jpg",
    time: "3 hours",
    difficulty: "Hard",
    category: "Breakfast",
    youtubeId: "dQw4w9WgXcQ",
    tags: ["cinnamon", "rolls", "breakfast", "yeast", "sweet", "weekend"],
    servings: 12,
    prepTime: "45 mins",
    cookTime: "25 mins",
    restTime: "1.5 hours",
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
    ],
    tips: [
        "Warm environment helps dough rise faster",
        "Don't roll too tightly or filling will squeeze out",
        "Glaze while warm for best absorption"
    ],
    nutrition: {
        calories: 315,
        fat: "8g",
        carbs: "58g",
        protein: "6g"
    }
};

// Export for the recipe system
if (typeof window !== 'undefined') {
    window.CINNAMON_ROLLS = RECIPE_DATA;
} else if (typeof module !== 'undefined') {
    module.exports = RECIPE_DATA;
}

console.log(`🌀 Loaded recipe: ${RECIPE_DATA.title}`);

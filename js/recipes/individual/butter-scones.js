// Butter Scones Recipe
// Individual recipe file for easy management

const RECIPE_DATA = {
    id: 4,
    title: "Butter Scones",
    description: "Flaky, buttery scones perfect for breakfast or afternoon tea.",
    image: "images/butter-scones.jpg",
    time: "30 mins",
    difficulty: "Medium",
    category: "Breakfast",
    youtubeId: "dQw4w9WgXcQ",
    tags: ["scones", "breakfast", "british", "tea-time", "butter"],
    servings: 8,
    prepTime: "15 mins",
    cookTime: "15 mins",
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
    ],
    tips: [
        "Don't overwork the dough for tender scones",
        "Cold butter creates flaky layers",
        "Brush tops with cream for extra golden color"
    ],
    nutrition: {
        calories: 195,
        fat: "9g",
        carbs: "25g",
        protein: "4g"
    }
};

// Export for the recipe system
if (typeof window !== 'undefined') {
    window.BUTTER_SCONES = RECIPE_DATA;
} else if (typeof module !== 'undefined') {
    module.exports = RECIPE_DATA;
}

console.log(`🥐 Loaded recipe: ${RECIPE_DATA.title}`);

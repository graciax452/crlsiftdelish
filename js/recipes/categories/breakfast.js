// Breakfast Recipe Category
// This file contains all breakfast recipes for better organization

const BREAKFAST_RECIPES = [
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
    }
];

// Export for the recipe manager
if (typeof window !== 'undefined') {
    window.BREAKFAST_RECIPES = BREAKFAST_RECIPES;
} else if (typeof module !== 'undefined') {
    module.exports = BREAKFAST_RECIPES;
}

console.log(`🥞 Loaded ${BREAKFAST_RECIPES.length} breakfast recipes`);

// Classic Chocolate Chip Cookies Recipe
// Individual recipe file for easy management

const RECIPE_DATA = {
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
    ],
    tips: [
        "Don't overbake - cookies continue cooking on the hot pan",
        "Room temperature ingredients mix better",
        "Chill dough for 30 minutes for thicker cookies"
    ],
    nutrition: {
        calories: 185,
        fat: "9g",
        carbs: "25g",
        protein: "2g"
    }
};

// Export for the recipe system
if (typeof window !== 'undefined') {
    window.CLASSIC_CHOCOLATE_CHIP_COOKIES = RECIPE_DATA;
} else if (typeof module !== 'undefined') {
    module.exports = RECIPE_DATA;
}

console.log(`🍪 Loaded recipe: ${RECIPE_DATA.title}`);

// Apple Crisp Recipe
// Individual recipe file for easy management

const RECIPE_DATA = {
    id: 3,
    title: "Apple Crisp",
    description: "A warm, comforting dessert with tender spiced apples and a crunchy oat topping.",
    image: "images/apple-crisp.jpg",
    time: "1 hour",
    difficulty: "Easy",
    category: "Desserts",
    youtubeId: "dQw4w9WgXcQ",
    tags: ["apple", "dessert", "fall", "crisp", "oats", "comfort-food"],
    servings: 8,
    prepTime: "20 mins",
    cookTime: "40 mins",
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
    ],
    tips: [
        "Use a mix of apple varieties for complex flavor",
        "Keep butter cold for the best crumbly topping",
        "Cover with foil if topping browns too quickly"
    ],
    nutrition: {
        calories: 285,
        fat: "8g",
        carbs: "52g",
        protein: "3g"
    }
};

// Export for the recipe system
if (typeof window !== 'undefined') {
    window.APPLE_CRISP = RECIPE_DATA;
} else if (typeof module !== 'undefined') {
    module.exports = RECIPE_DATA;
}

console.log(`🍎 Loaded recipe: ${RECIPE_DATA.title}`);

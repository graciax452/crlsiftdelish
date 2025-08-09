// Desserts Recipe Category
// This file contains all dessert recipes for better organization

const DESSERTS_RECIPES = [
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

// Export for the recipe manager
if (typeof window !== 'undefined') {
    window.DESSERTS_RECIPES = DESSERTS_RECIPES;
} else if (typeof module !== 'undefined') {
    module.exports = DESSERTS_RECIPES;
}

console.log(`🍰 Loaded ${DESSERTS_RECIPES.length} dessert recipes`);

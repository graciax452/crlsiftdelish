// Vanilla Fudge Recipe
// Individual recipe file for easy management

const RECIPE_DATA = {
    id: 6,
    title: "Vanilla Fudge",
    description: "Rich, creamy vanilla fudge that melts in your mouth - a perfect sweet treat.",
    image: "images/vanilla-fudge.jpg",
    time: "2 hours",
    difficulty: "Medium",
    category: "Desserts",
    youtubeId: "dQw4w9WgXcQ",
    tags: ["fudge", "vanilla", "candy", "dessert", "sweet", "no-bake"],
    servings: 16,
    prepTime: "15 mins",
    cookTime: "10 mins",
    coolTime: "2 hours",
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
    ],
    tips: [
        "Use a candy thermometer for best results (soft-ball stage)",
        "Work quickly once removed from heat",
        "Store in cool, dry place for up to 1 week"
    ],
    nutrition: {
        calories: 275,
        fat: "8g",
        carbs: "48g",
        protein: "2g"
    }
};

// Export for the recipe system
if (typeof window !== 'undefined') {
    window.VANILLA_FUDGE = RECIPE_DATA;
} else if (typeof module !== 'undefined') {
    module.exports = RECIPE_DATA;
}

console.log(`🍫 Loaded recipe: ${RECIPE_DATA.title}`);

// Ultra-Detailed Cinnamon Rolls Recipe
// Individual recipe file for easy management

const RECIPE_DATA = {
    id: 1,
    title: "Cinnamon Rolls (Overnight Tangzhong Method)",
    description: "Hand & Stand Mixer Instructions! Makes 8 big rolls (10cm) or 12 small rolls (7cm) with amazing swirls and fluffy texture.",
    image: "images/cinnamon-rolls.jpg",
    time: "12+ hours (overnight)",
    difficulty: "Hard",
    category: "Breakfast",
    youtubeId: "5QjCBJdYTh0",
    tags: ["cinnamon", "rolls", "overnight", "tangzhong", "breakfast", "sweet"],
    servings: "8-12 rolls",
    prepTime: "30 mins + overnight",
    cookTime: "25 mins",
    ingredients: [
        "For Tangzhong (Night Before):",
        "25g all-purpose flour",
        "120g milk",
        "",
        "For Dough:",
        "260g all-purpose flour",
        "45g brown sugar",
        "5g salt",
        "5g instant yeast",
        "2 large eggs",
        "5g vanilla extract",
        "110g softened butter (cubed)",
        "",
        "For Filling:",
        "40g melted butter",
        "10g ground cinnamon",
        "25g white sugar",
        "45g brown sugar",
        "",
        "Tools Needed:",
        "Stand mixer (with dough hook) or strong arms + wooden spoon",
        "Rolling pin + ruler",
        "Parchment paper",
        "9x13-inch (23x33cm) baking pan"
    ],
    instructions: [
        "NIGHT BEFORE - TANGZHONG:",
        "In a small pot, whisk 25g flour + 120g milk until smooth. Cook on medium heat, stirring non-stop, until thick like pudding (~3 mins). Let cool 10 mins before using.",
        "",
        "MAKE DOUGH - Stand Mixer Method:",
        "In mixer bowl, add cooled tangzhong, 260g flour, 45g brown sugar, 5g salt, 5g yeast, 2 eggs, 5g vanilla.", 
        "Mix on low speed until combined (~10 min). Check for readiness using the windowpane test before adding butter", 
        "Divide 100g softened butter into 8-10 bits. Add the softened butter bit by bit slowly while mixing, waiting till one bit is combined before adding the next. Knead on medium speed for 8-10 mins until smooth & stretchy. Check for readiness using the windowpane test",
        "",
        "MAKE DOUGH - Hand Method:",
        "In big bowl, mix tangzhong + flour + sugar + salt + yeast. Add eggs + vanilla, stir with wooden spoon until sticky until combined (~10 min). Check for readiness using the windowpane test before adding butter",
        "Divide 100g softened butter into 8-10 bits. Add the softened butter bit by bit slowly while mixing, waiting till one bit is combined before adding the next. Knead by hand 10-15 mins until smooth & stretchy. Check for readiness using the windowpane test",
        "",
        "FIRST RISE (Overnight):",
        "Cover bowl with cling film, refrigerate 8-12 hours. (Winter tip: If kitchen is cold, let dough sit at room temp 1 hour first.)",
        "",
        "MAKE FILLING (Night Before):",
        "Mix 40g melted butter, 10g cinnamon, 25g white sugar, 45g brown sugar into thick paste. Cover and leave at room temp.",
        "",
        "NEXT MORNING - Shape the Rolls:",
        "Take dough from fridge, let sit 15 mins. On floured surface, roll into rectangle: For 8 BIG rolls: 30cm width x 40cm length. For 12 SMALL rolls: 25cm width x 45cm length.",
        "Spread filling paste evenly, leaving 2cm empty at top edge.",
        "",
        "ROLL & CUT:",
        "Start rolling from long side for tight swirls. Cut with sharp knife or floss: 8 big rolls = 5cm wide slices, 12 small rolls = 3.5cm wide slices.",
        "",
        "SECOND RISE:",
        "Place rolls on parchment-lined pan, cover with towel. Let rise until puffy & almost doubled (~1 hour). (Winter tip: Place near warm oven or bowl of hot water.)",
        "",
        "BAKE & FINISH:",
        "Preheat oven to 180°C (350°F). Bake 20-25 mins until golden. Spread icing on warm rolls."
    ],
    tips: [
        "✅ More Swirls? Roll dough with width facing you (shorter side = tighter rolls)",
        "✅ Clean Cuts? Use dental floss to slice dough without squishing",
        "✅ No-Stick Pan? Always use parchment paper!",
        "Cold dough is easier to roll - don't skip the 15-min rest after refrigeration",
        "Tangzhong method creates extra fluffy, soft texture that stays fresh longer",
        "Make filling night before so it's ready when you need it"
    ],
    nutrition: {
        calories: 385,
        fat: "12g",
        carbs: "65g",
        protein: "7g",
        sugar: "32g"
    }
};

// Export for the recipe system
if (typeof window !== 'undefined') {
    window.CLASSIC_CHOCOLATE_CHIP_COOKIES = RECIPE_DATA;
} else if (typeof module !== 'undefined') {
    module.exports = RECIPE_DATA;
}

console.log(`� Loaded recipe: ${RECIPE_DATA.title}`);

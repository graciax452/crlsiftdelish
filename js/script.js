// Recipe collection - Replace placeholder images and YouTube IDs with your actual content
const recipes = [
    {
        id: 1,
        title: "Ultra-Detailed Cinnamon Rolls (Overnight Tangzhong Method)",
        description: "Perfect for teens – fluffy overnight cinnamon rolls using the tangzhong method for extra soft texture.",
        image: "images/cinnamon-rolls.jpg",
        time: "Overnight + 3 hours",
        difficulty: "Medium",
        youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
        ingredients: [
            "25g flour (for tangzhong)",
            "120g milk (for tangzhong)",
            "260g flour",
            "45g brown sugar",
            "5g salt",
            "5g yeast",
            "2 eggs",
            "5g vanilla",
            "110g softened butter",
            "40g melted butter (filling)",
            "10g cinnamon",
            "25g white sugar (filling)",
            "45g brown sugar (filling)"
        ],
        instructions: [
            "Night before: Make tangzhong by whisking 25g flour + 120g milk, cook until thick like pudding.",
            "Mix tangzhong with 260g flour, brown sugar, salt, yeast, eggs, and vanilla.",
            "Add softened butter slowly, knead 8-10 mins until smooth.",
            "First rise: Cover and refrigerate overnight (8-12 hours).",
            "Make filling: Mix melted butter, cinnamon, and both sugars into a paste.",
            "Next morning: Roll dough into 30x40cm rectangle.",
            "Spread filling, roll tightly from long side, cut into 8 pieces.",
            "Second rise: Let rise 1 hour until puffy.",
            "Bake at 180°C (350°F) for 20-25 mins until golden.",
            "Frost while warm and enjoy!"
        ]
    },
    {
        id: 2,
        title: "Homemade Focaccia Bread",
        description: "Crispy outside, fluffy inside Italian focaccia bread with olive oil and herbs.",
        image: "images/focaccia-bread.jpg",
        time: "2 hours",
        difficulty: "Easy",
        youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
        ingredients: [
            "256g flour",
            "5g salt",
            "4g yeast",
            "70g olive oil",
            "15g oil (for pan)",
            "225g water (approx.)"
        ],
        instructions: [
            "Mix flour, salt, yeast, and water. Knead 5 minutes.",
            "Add 35g olive oil, knead 5 more minutes until smooth.",
            "Let rise 1 hour until doubled.",
            "Oil a pan, stretch dough to fit.",
            "Dimple with fingers, drizzle remaining oil on top.",
            "Bake at 220°C (425°F) for 20-25 minutes until golden."
        ]
    },
    {
        id: 3,
        title: "Classic Butter Scones",
        description: "Tender, flaky British-style scones perfect for afternoon tea or breakfast.",
        image: "images/butter-scones.jpg",
        time: "30 mins",
        difficulty: "Easy",
        youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
        ingredients: [
            "350g flour",
            "50g white sugar",
            "20g baking powder",
            "3g salt",
            "110g unsalted butter (cold, cubed)",
            "225g milk",
            "5g vanilla"
        ],
        instructions: [
            "Whisk together dry ingredients in a large bowl.",
            "Cut in cold butter until mixture resembles coarse crumbs.",
            "Add milk and vanilla, mix gently until just combined.",
            "Pat dough into a circle on floured surface.",
            "Cut into 8 wedges with sharp knife.",
            "Bake at 200°C (400°F) for 15-18 minutes until golden."
        ]
    },
    {
        id: 4,
        title: "Apple Crisp",
        description: "Classic dessert with tender spiced apples topped with a buttery oat crumble.",
        image: "images/apple-crisp.jpg",
        time: "1 hour",
        difficulty: "Easy",
        youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
        ingredients: [
            "1000g apples (peeled and sliced)",
            "0.5 lemon (juiced)",
            "105g white sugar",
            "55g soft brown sugar",
            "10g cinnamon",
            "140g flour",
            "40g rolled oats",
            "110g unsalted butter (cold)"
        ],
        instructions: [
            "Toss sliced apples with lemon juice, 55g brown sugar, and cinnamon.",
            "Mix flour, oats, and 105g white sugar in a bowl.",
            "Cut in cold butter until mixture is crumbly.",
            "Layer seasoned apples in a baking dish.",
            "Top evenly with crumb mixture.",
            "Bake at 180°C (350°F) for 40 minutes until golden and bubbly."
        ]
    },
    {
        id: 5,
        title: "Creamy Vanilla Fudge",
        description: "Rich, smooth vanilla fudge that melts in your mouth – perfect for gifts!",
        image: "images/vanilla-fudge.jpg",
        time: "30 mins + cooling",
        difficulty: "Medium",
        youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
        ingredients: [
            "450g soft brown sugar",
            "150g milk",
            "115g unsalted butter",
            "1 can condensed milk (≈400g)",
            "5g vanilla extract"
        ],
        instructions: [
            "Melt butter, brown sugar, milk, and condensed milk in a heavy pan.",
            "Bring to a boil, stirring constantly until mixture reaches 115°C (240°F).",
            "Remove from heat and add vanilla extract.",
            "Beat vigorously for about 5 minutes until thick and creamy.",
            "Pour into a lined pan and let cool completely.",
            "Cut into squares when set and enjoy!"
        ]
    },
    {
        id: 6,
        title: "Rich Chocolate Fudge",
        description: "Decadently smooth chocolate fudge made with just three simple ingredients.",
        image: "images/chocolate-fudge.jpg",
        time: "15 mins + chilling",
        difficulty: "Easy",
        youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
        ingredients: [
            "340g semi-sweet chocolate chips",
            "1 can condensed milk (≈400g)",
            "5g vanilla extract"
        ],
        instructions: [
            "Combine chocolate chips and condensed milk in a heavy saucepan.",
            "Cook over low heat, stirring constantly until chocolate melts and mixture is smooth.",
            "Remove from heat and stir in vanilla extract.",
            "Pour into a parchment-lined pan and spread evenly.",
            "Chill for at least 2 hours until firm.",
            "Cut into squares and serve!"
        ]
    }
];

// DOM elements
const recipeGrid = document.getElementById('recipe-grid');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    renderRecipes();
    setupNavigation();
    setupSmoothScrolling();
});

// Render recipes to the grid
function renderRecipes() {
    recipeGrid.innerHTML = '';
    
    recipes.forEach(recipe => {
        const recipeCard = createRecipeCard(recipe);
        recipeGrid.appendChild(recipeCard);
    });
}

// Create a recipe card element
function createRecipeCard(recipe) {
    const card = document.createElement('div');
    card.className = 'recipe-card';
    card.setAttribute('data-recipe-id', recipe.id);
    
    card.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image">
        <div class="recipe-content">
            <h3 class="recipe-title">${recipe.title}</h3>
            <p class="recipe-description">${recipe.description}</p>
            <div class="recipe-meta">
                <span class="recipe-time">
                    <i class="fas fa-clock"></i>
                    ${recipe.time}
                </span>
                <span class="recipe-difficulty">
                    <i class="fas fa-chart-bar"></i>
                    ${recipe.difficulty}
                </span>
            </div>
            <div class="recipe-actions">
                <button class="btn btn-primary" onclick="viewRecipe(${recipe.id})">
                    <i class="fas fa-eye"></i>
                    View Recipe
                </button>
                <a href="https://youtube.com/watch?v=${recipe.youtubeId}" target="_blank" class="btn btn-secondary">
                    <i class="fab fa-youtube"></i>
                    Watch Video
                </a>
            </div>
        </div>
    `;
    
    return card;
}

// View recipe in modal or new page
function viewRecipe(recipeId) {
    const recipe = recipes.find(r => r.id === recipeId);
    if (!recipe) return;
    
    // Create modal overlay
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>${recipe.title}</h2>
                <button class="modal-close" onclick="closeModal()">&times;</button>
            </div>
            <div class="modal-body">
                <img src="${recipe.image}" alt="${recipe.title}" class="modal-recipe-image">
                <div class="recipe-details">
                    <div class="recipe-meta">
                        <span class="recipe-time">
                            <i class="fas fa-clock"></i>
                            ${recipe.time}
                        </span>
                        <span class="recipe-difficulty">
                            <i class="fas fa-chart-bar"></i>
                            ${recipe.difficulty}
                        </span>
                        <a href="https://youtube.com/watch?v=${recipe.youtubeId}" target="_blank" class="btn btn-secondary">
                            <i class="fab fa-youtube"></i>
                            Watch Video
                        </a>
                    </div>
                    <div class="ingredients-section">
                        <h3>Ingredients</h3>
                        <ul class="ingredients-list">
                            ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="instructions-section">
                        <h3>Instructions</h3>
                        <ol class="instructions-list">
                            ${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // Add modal styles if not already added
    if (!document.querySelector('#modal-styles')) {
        const modalStyles = document.createElement('style');
        modalStyles.id = 'modal-styles';
        modalStyles.textContent = `
            .modal-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.8);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 2000;
                animation: fadeIn 0.3s ease;
            }
            
            .modal-content {
                background: white;
                border-radius: 8px;
                max-width: 800px;
                max-height: 90vh;
                width: 90%;
                overflow-y: auto;
                animation: slideIn 0.3s ease;
            }
            
            .modal-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 1.5rem;
                border-bottom: 1px solid #eee;
            }
            
            .modal-close {
                background: none;
                border: none;
                font-size: 2rem;
                cursor: pointer;
                color: #999;
            }
            
            .modal-body {
                padding: 1.5rem;
            }
            
            .modal-recipe-image {
                width: 100%;
                height: 300px;
                object-fit: cover;
                border-radius: 8px;
                margin-bottom: 1.5rem;
            }
            
            .ingredients-section, .instructions-section {
                margin-bottom: 2rem;
            }
            
            .ingredients-section h3, .instructions-section h3 {
                color: var(--primary-color);
                margin-bottom: 1rem;
                font-size: 1.3rem;
            }
            
            .ingredients-list, .instructions-list {
                margin-left: 1rem;
            }
            
            .ingredients-list li, .instructions-list li {
                margin-bottom: 0.5rem;
                line-height: 1.6;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            @keyframes slideIn {
                from { transform: translateY(-50px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
        `;
        document.head.appendChild(modalStyles);
    }
}

// Close modal
function closeModal() {
    const modal = document.querySelector('.modal-overlay');
    if (modal) {
        modal.remove();
        document.body.style.overflow = '';
    }
}

// Setup mobile navigation
function setupNavigation() {
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Setup smooth scrolling for navigation links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Close modal when clicking outside
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal-overlay')) {
        closeModal();
    }
});

// Close modal with ESC key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Animation on scroll
function animateOnScroll() {
    const cards = document.querySelectorAll('.recipe-card');
    
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const cardVisible = 150;
        
        if (cardTop < window.innerHeight - cardVisible) {
            card.style.animation = 'fadeInUp 0.6s ease forwards';
        }
    });
}

window.addEventListener('scroll', animateOnScroll);

// Export functions for global access
window.viewRecipe = viewRecipe;
window.closeModal = closeModal;

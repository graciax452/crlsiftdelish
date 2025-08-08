// Sample recipe data - Replace with your actual recipes
const recipes = [
    {
        id: 1,
        title: "Classic Chocolate Chip Cookies",
        description: "Soft, chewy chocolate chip cookies that are perfect for any occasion.",
        image: "https://via.placeholder.com/400x250/ff6b6b/ffffff?text=Chocolate+Chip+Cookies",
        time: "30 mins",
        difficulty: "Easy",
        youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
        ingredients: [
            "2¼ cups all-purpose flour",
            "1 tsp baking soda",
            "1 tsp salt",
            "1 cup butter, softened",
            "¾ cup granulated sugar",
            "¾ cup brown sugar",
            "2 large eggs",
            "2 tsp vanilla extract",
            "2 cups chocolate chips"
        ],
        instructions: [
            "Preheat oven to 375°F (190°C).",
            "Mix flour, baking soda, and salt in a bowl.",
            "Cream butter and sugars until fluffy.",
            "Beat in eggs and vanilla.",
            "Gradually add flour mixture.",
            "Stir in chocolate chips.",
            "Drop rounded tablespoons onto ungreased cookie sheets.",
            "Bake 9-11 minutes until golden brown.",
            "Cool on baking sheet for 2 minutes before removing."
        ]
    },
    {
        id: 2,
        title: "Homemade Pizza Margherita",
        description: "Authentic Italian pizza with fresh tomatoes, mozzarella, and basil.",
        image: "https://via.placeholder.com/400x250/4ecdc4/ffffff?text=Pizza+Margherita",
        time: "45 mins",
        difficulty: "Medium",
        youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
        ingredients: [
            "1 lb pizza dough",
            "½ cup pizza sauce",
            "8 oz fresh mozzarella, sliced",
            "2 tomatoes, sliced",
            "Fresh basil leaves",
            "2 tbsp olive oil",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Preheat oven to 475°F (245°C).",
            "Roll out pizza dough on floured surface.",
            "Transfer to pizza stone or baking sheet.",
            "Spread sauce evenly over dough.",
            "Add mozzarella and tomato slices.",
            "Drizzle with olive oil, season with salt and pepper.",
            "Bake 12-15 minutes until crust is golden.",
            "Add fresh basil before serving."
        ]
    },
    {
        id: 3,
        title: "Creamy Chicken Alfredo",
        description: "Rich and creamy pasta dish with tender chicken and homemade Alfredo sauce.",
        image: "https://via.placeholder.com/400x250/45b7d1/ffffff?text=Chicken+Alfredo",
        time: "25 mins",
        difficulty: "Medium",
        youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
        ingredients: [
            "1 lb fettuccine pasta",
            "2 chicken breasts, sliced",
            "½ cup butter",
            "1 cup heavy cream",
            "1 cup Parmesan cheese, grated",
            "3 cloves garlic, minced",
            "Salt and pepper to taste",
            "Fresh parsley for garnish"
        ],
        instructions: [
            "Cook pasta according to package directions.",
            "Season and cook chicken until golden brown.",
            "In same pan, melt butter and sauté garlic.",
            "Add cream and simmer for 2 minutes.",
            "Stir in Parmesan cheese until melted.",
            "Add cooked pasta and chicken to sauce.",
            "Toss until well coated.",
            "Garnish with parsley and serve immediately."
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

// Recipe Website JavaScript

// Recipe data container
let recipes = [];

// DOM elements
let recipeGrid;
let hamburger;
let navMenu;

// Initialize the application
document.addEventListener('DOMContentLoaded', async function() {
    // Get DOM elements
    recipeGrid = document.getElementById('recipe-grid');
    hamburger = document.querySelector('.hamburger');
    navMenu = document.querySelector('.nav-menu');
    
    if (!recipeGrid) {
        console.error('Recipe grid element not found!');
        return;
    }
    
    // Show loading
    recipeGrid.innerHTML = '<div class="loading">Loading recipes...</div>';
    
    try {
        // Load recipes directly
        recipes = await window.recipeLoader.loadAllRecipes();
        await initializeApp();
    } catch (error) {
        console.error('Failed to load recipes:', error);
        recipeGrid.innerHTML = '<div class="error">Failed to load recipes. Please refresh the page.</div>';
    }
});

// Initialize the app once recipes are available
async function initializeApp() {
    try {
        if (!recipes || recipes.length === 0) {
            throw new Error('No recipes loaded');
        }
        
        // Render everything
        await renderRecipes();
        setupNavigation();
        setupSmoothScrolling();
        
        console.log(`🎉 Successfully initialized with ${recipes.length} recipes from individual files`);
        
    } catch (error) {
        console.error('❌ Failed to initialize app:', error);
        console.error('🔍 Error details:', {
            hasRecipeUtils: !!window.RecipeUtils,
            hasRecipesData: !!window.RECIPES_DATA,
            recipesDataLength: window.RECIPES_DATA?.length,
            errorMessage: error.message,
            errorStack: error.stack
        });
        
        recipeGrid.innerHTML = `
            <div class="error" style="text-align: center; padding: 2rem; color: #e53e3e;">
                <i class="fas fa-exclamation-triangle" style="font-size: 2rem; margin-bottom: 1rem;"></i>
                <h3>Failed to load recipes</h3>
                <p>Could not load individual recipe files.</p>
                <p>Error: ${error.message}</p>
                <details style="margin-top: 1rem; text-align: left;">
                    <summary>Debug Info</summary>
                    <pre style="font-size: 0.8rem; margin-top: 0.5rem;">
RecipeUtils: ${!!window.RecipeUtils}
RECIPES_DATA: ${!!window.RECIPES_DATA}
Data length: ${window.RECIPES_DATA?.length || 'N/A'}
                    </pre>
                </details>
                <button onclick="window.location.reload()" class="btn btn-primary" style="margin-top: 1rem;">
                    <i class="fas fa-refresh"></i>
                    Refresh Page
                </button>
            </div>
        `;
    }
}

// Make initializeApp available globally for re-initialization
window.initializeApp = initializeApp;

// Render recipes to the grid
async function renderRecipes() {
    recipeGrid.innerHTML = '';
    
    recipes.forEach(recipe => {
        const recipeCard = createRecipeCard(recipe);
        recipeGrid.appendChild(recipeCard);
    });
}

// Create a recipe card element - PAGE NAVIGATION ONLY
function createRecipeCard(recipe) {
    const card = document.createElement('div');
    card.className = 'recipe-card';
    card.setAttribute('data-recipe-id', recipe.id);
    
    card.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image" onclick="viewRecipePage(${recipe.id})" style="cursor: pointer;">
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
                <button class="btn btn-primary" onclick="viewRecipePage(${recipe.id})">
                    <i class="fas fa-eye"></i>
                    View Recipe
                </button>
                <a href="https://youtube.com/watch?v=${recipe.youtubeId || 'dQw4w9WgXcQ'}" target="_blank" class="btn btn-secondary">
                    <i class="fab fa-youtube"></i>
                    Watch Video
                </a>
            </div>
        </div>
    `;
    
    return card;
}

// Setup mobile navigation
function setupNavigation() {
    if (!hamburger || !navMenu) return;
    
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
                const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

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

// Navigate to recipe detail page - NO MODAL, PAGE ONLY
function viewRecipePage(recipeId) {
    window.location.href = `recipe.html?id=${recipeId}`;
}

// Export functions for global access
window.viewRecipePage = viewRecipePage;
window.recipes = recipes;

// Make sure no modal functions exist
if (window.viewRecipe) {
    delete window.viewRecipe;
}
if (window.closeModal) {
    delete window.closeModal;
}

console.log('Page navigation script loaded successfully');

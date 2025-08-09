// Recipe Website JavaScript - Simple Individual Recipe System
console.log('🎯 Script.js loaded - Simple individual recipe system');

// Recipe data container
let recipes = [];

console.log('✅ Ready to load recipes from simple individual system');

// DOM elements
let recipeGrid;
let hamburger;
let navMenu;

// Initialize the application - SIMPLE INDIVIDUAL SYSTEM
document.addEventListener('DOMContentLoaded', async function() {
    console.log('🎯 DOM loaded, initializing simple individual system...');
    console.log('🔍 Current RECIPES_DATA:', window.RECIPES_DATA);
    console.log('🔍 RecipeUtils available:', typeof window.RecipeUtils);
    
    // Get DOM elements
    recipeGrid = document.getElementById('recipe-grid');
    hamburger = document.querySelector('.hamburger');
    navMenu = document.querySelector('.nav-menu');
    
    if (!recipeGrid) {
        console.error('❌ Recipe grid element not found!');
        return;
    }
    
    console.log('📋 Found recipe grid element');
    
    // Show loading
    recipeGrid.innerHTML = '<div class="loading">Loading individual recipe files...</div>';
    
    // Check if recipes are already loaded
    if (window.RECIPES_DATA && window.RECIPES_DATA.length > 0) {
        console.log('🎉 Recipes already available, initializing immediately');
        await initializeApp();
    } else {
        console.log('⏳ Waiting for recipes to load...');
        
        // Listen for the recipes loaded event
        window.addEventListener('recipesLoaded', async (event) => {
            console.log('📨 Received recipesLoaded event:', event.detail);
            if (event.detail.system === 'simple-individual') {
                await initializeApp();
            }
        });
        
        // Fallback: try to initialize after delays
        setTimeout(async () => {
            console.log('🔄 Timeout 1: Checking for recipes...');
            if (!recipes.length && window.RECIPES_DATA) {
                await initializeApp();
            }
        }, 2000);
        
        setTimeout(async () => {
            console.log('🔄 Timeout 2: Final check for recipes...');
            if (!recipes.length) {
                console.warn('⚠️ No recipes loaded after timeout, showing error');
                recipeGrid.innerHTML = `
                    <div class="error" style="text-align: center; padding: 2rem; color: #e53e3e;">
                        <i class="fas fa-exclamation-triangle" style="font-size: 2rem; margin-bottom: 1rem;"></i>
                        <h3>No Recipes Loaded</h3>
                        <p>The recipe system failed to load any recipes.</p>
                        <button onclick="window.location.reload()" class="btn btn-primary" style="margin-top: 1rem;">
                            <i class="fas fa-refresh"></i>
                            Refresh Page
                        </button>
                    </div>
                `;
            }
        }, 5000);
    }
});

// Initialize the app once recipes are available
async function initializeApp() {
    try {
        console.log('🚀 Initializing app with simple individual system...');
        console.log('🔍 window.RecipeUtils:', typeof window.RecipeUtils);
        console.log('🔍 window.RECIPES_DATA:', window.RECIPES_DATA?.length || 'undefined');
        
        // Get recipes from the simple system
        if (window.RecipeUtils) {
            console.log('📚 Using RecipeUtils.getAllRecipes()');
            recipes = await RecipeUtils.getAllRecipes();
        } else if (window.RECIPES_DATA) {
            console.log('📚 Using window.RECIPES_DATA directly');
            recipes = window.RECIPES_DATA;
        } else {
            throw new Error('No recipe data source available');
        }
        
        console.log('📋 Recipes loaded:', recipes.map(r => r.title));
        
        if (!recipes || recipes.length === 0) {
            throw new Error('No recipes loaded from simple individual system');
        }
        
        console.log(`📚 Loaded ${recipes.length} individual recipe files`);
        
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
    console.log(`Navigating to recipe page for ID: ${recipeId}`);
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

console.log('✅ Page navigation script loaded successfully - MODULAR SYSTEM!');

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const recipesList = document.getElementById('recipes-list');

document.addEventListener('DOMContentLoaded', function () {
    // Array of recipes with title, type, ingredients, and image
    const recipes = [
        { title: 'Oatmeal', type: 'breakfast', ingredients: ['oatmeal'], image: 'MC4f77e0_shutterstock_127734134.jpg', info: 'A healthy breakfast option made with oats. Quick and easy to prepare.', duration: '10 minutes' },
        { title: 'Chicken with Vegetables', type: 'lunch', ingredients: ['chicken', 'vegetables'], image: '124208nudlicky-masa-zelenina-smes-indruchova-detail.jpg', info: 'A nutritious lunch dish featuring chicken and assorted vegetables.', duration: '30 minutes' },
        { title: 'Pasta with Tomatoes', type: 'lunch', ingredients: ['pasta', 'tomatoes'], image: 'testoviny-s-kremovou-rajcatovou-omackou-a-mozzarellou.jpg', info: 'A classic pasta dish with a flavorful tomato sauce.', duration: '20 minutes' },
        { title: 'Grilled Fish', type: 'dinner', ingredients: ['fish', 'vegetables'], image: 'unnamed.jpg', info: 'Healthy grilled fish served with a side of fresh vegetables.', duration: '25 minutes' },
        { title: 'Spinach Omelette', type: 'breakfast', ingredients: ['eggs', 'spinach'], image: 'DSC_0024cz.jpg', info: 'A nutritious breakfast omelette with the goodness of spinach.', duration: '15 minutes' },
        { title: 'Pasta with Salmon', type: 'lunch', ingredients: ['pasta', 'salmon'], image: 'img1.jpg', info: 'Delicious pasta served with succulent salmon pieces.', duration: '25 minutes' },
        { title: 'Salad with Avocado', type: 'lunch', ingredients: ['lettuce', 'avocado'], image: 'd2d7215d155ac5475100740c03f71503.jpg', info: 'A refreshing salad featuring crisp lettuce and creamy avocado.', duration: '15 minutes' },
        { title: 'Fruit Smoothie', type: 'breakfast', ingredients: ['strawberries', 'bananas', 'kiwi'], image: 'ovocne smoothie na ledu.jpg', info: 'A delicious blend of strawberries, bananas, and kiwi.', duration: '10 minutes' }
    ];

    const recipesList = document.getElementById('recipes-list');
    const mealTypeFilter = document.getElementById('meal-type-filter');
    const ingredientFilter = document.getElementById('ingredient-filter');

    // Function to render recipes based on filters
    function renderRecipes(recipes) {
        recipesList.innerHTML = '';
        recipes.forEach(recipe => {
            const recipeItem = document.createElement('div');
            recipeItem.classList.add('recipe');
            recipeItem.innerHTML = `
                <img src="images/${recipe.image}" alt="${recipe.title}">
                <div class="recipe-content">
                    <h2>${recipe.title}</h2>
                    <p><strong>Type:</strong> ${recipe.type}</p>
                    <p><strong>Ingredients:</strong> ${recipe.ingredients.join(', ')}</p>
                    <p><strong>Info:</strong> ${recipe.info}</p>
                    <p><strong>Duration:</strong> ${recipe.duration}</p>
                </div>
            `;
            recipesList.appendChild(recipeItem);
        });
    }

    // Function to filter recipes based on meal type and ingredient
    function filterRecipes() {
        const selectedMealType = mealTypeFilter.value;
        const selectedIngredient = ingredientFilter.value;

        let filteredRecipes = recipes;

        if (selectedMealType !== 'all') {
            filteredRecipes = filteredRecipes.filter(recipe => recipe.type === selectedMealType);
        }

        if (selectedIngredient !== 'all') {
            filteredRecipes = filteredRecipes.filter(recipe => recipe.ingredients.includes(selectedIngredient));
        }

        renderRecipes(filteredRecipes);
    }

    // Event listeners for filter changes
    mealTypeFilter.addEventListener('change', filterRecipes);
    ingredientFilter.addEventListener('change', filterRecipes);

    // Load all recipes when the page loads
    renderRecipes(recipes);
});

document.addEventListener('DOMContentLoaded', function () {
    const recipesList = document.getElementById('recipes-list');

    // Adding and removing class on hover
    recipesList.addEventListener('mouseover', function (event) {
        const recipeItem = event.target.closest('.recipe');
        if (recipeItem) {
            recipeItem.classList.add('hovered');
        }
    });

    recipesList.addEventListener('mouseout', function (event) {
        const recipeItem = event.target.closest('.recipe');
        if (recipeItem) {
            recipeItem.classList.remove('hovered');
        }
    });
});

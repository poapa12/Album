document.addEventListener('DOMContentLoaded', function () {
  const recipes = [
      { title: 'Oatmeal', type: 'breakfast', ingredients: ['oatmeal'], image: 'MC4f77e0_shutterstock_127734134.jpg' },
      { title: 'Chicken with Vegetables', type: 'lunch', ingredients: ['chicken', 'vegetables'], image: '124208nudlicky-masa-zelenina-smes-indruchova-detail.jpg' },
      { title: 'Pasta with Tomatoes', type: 'lunch', ingredients: ['pasta', 'tomatoes'], image: 'testoviny-s-kremovou-rajcatovou-omackou-a-mozzarellou.jpg' },
      { title: 'Grilled Fish', type: 'dinner', ingredients: ['fish', 'vegetables'], image: 'unnamed.jpg' },
      { title: 'Spinach Omelette', type: 'breakfast', ingredients: ['eggs', 'spinach'], image: 'DSC_0024cz.jpg' },
      { title: 'Pasta with Salmon', type: 'lunch', ingredients: ['pasta', 'salmon'], image: '8c81b06ae7d08c376f191f3f082e5392.jpg' },
      { title: 'Salad with Avocado', type: 'lunch', ingredients: ['lettuce', 'avocado'], image: 'd2d7215d155ac5475100740c03f71503.jpg' },
      { title: 'Fruit Smoothie', type: 'breakfast', ingredients: ['strawberries', 'bananas', 'kiwi'], image: 'ovocne smoothie na ledu.jpg' }
  ];

  const recipesList = document.getElementById('recipes-list');
  const mealTypeFilter = document.getElementById('meal-type-filter');
  const ingredientFilter = document.getElementById('ingredient-filter');

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
              </div>
          `;
          recipesList.appendChild(recipeItem);
      });
  }

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

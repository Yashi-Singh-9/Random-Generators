async function getRecipe() {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const data = await response.json();
    const meal = data.meals[0];

    document.getElementById('mealName').textContent = meal.strMeal;
    document.getElementById('mealImg').src = meal.strMealThumb;
    document.getElementById('instructions').textContent = meal.strInstructions;

    const ingredientsList = document.getElementById('ingredients');
    ingredientsList.innerHTML = '';

    // Loop through ingredients
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal['strIngredient' + i];
      const measure = meal['strMeasure' + i];
      if (ingredient && ingredient.trim() !== "") {
        const li = document.createElement('li');
        li.textContent = `${measure} ${ingredient}`;
        ingredientsList.appendChild(li);
      }
    }
  }

  // Load a recipe on page load
  window.onload = getRecipe;
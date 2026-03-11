async function getRandomCocktail() {
    const res = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
    const data = await res.json();
    const drink = data.drinks[0];

    // Set name and image
    document.getElementById("cocktailName").innerText = drink.strDrink;
    document.getElementById("cocktailImage").src = drink.strDrinkThumb;

    // Ingredients list
    const ingredientsList = document.getElementById("ingredientsList");
    ingredientsList.innerHTML = "";
    for (let i = 1; i <= 15; i++) {
    const ingredient = drink[`strIngredient${i}`];
    const measure = drink[`strMeasure${i}`];
    if (ingredient) {
        const li = document.createElement("li");
        li.textContent = `${measure || ''} ${ingredient}`;
        ingredientsList.appendChild(li);
    }
    }

    // Instructions
    document.getElementById("instructions").innerHTML = `<h4>Instructions:</h4> ${drink.strInstructions}`;

    document.getElementById("cocktailCard").style.display = "block";
}
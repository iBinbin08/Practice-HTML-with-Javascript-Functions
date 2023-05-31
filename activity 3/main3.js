class Recipe {
  constructor(title, ingredients, instructions) {
    this.title = title;
    this.ingredients = ingredients;
    this.instructions = instructions;
  }
}
  
let recipes = [];

// Function to create a list item
function createListItem(text) {
  const listItem = document.createElement('li');
  listItem.innerText = text;
  return listItem;
}

// For adding ingredients to the recipe
function addIngredient() {
  const ingredientInput = document.getElementById('ingredient-input');
  const ingredientList = document.getElementById('ingredient-list');
  const ingredient = ingredientInput.value;

  if (ingredient) {
    const listItem = createListItem(ingredient)
    ingredientList.appendChild(listItem);
    ingredientInput.value = '';
  }
}

// For adding list of instructions to the recipe
function addInstruction() {
  const instructionInput = document.getElementById('instruction-input');
  const instructionList = document.getElementById('instruction-list');
  const instruction = instructionInput.value;

  if (instruction) {
    const listItem = createListItem(instruction)
    instructionList.appendChild(listItem);
    instructionInput.value = '';
  }
}

// Function to clear recipe details when click Save Recipe
function clearRecipeDetails() {
  const recipeDetails = document.getElementById('recipe-details');
  recipeDetails.innerHTML = '';
  recipeDetails.style.display = 'none';
}

// Function to save the recipe
function saveRecipe() {
  const titleInput = document.getElementById('recipe-title');
  const ingredientList = document.getElementById('ingredient-list');
  const instructionList = document.getElementById('instruction-list');

  const title = titleInput.value;
  const ingredients = Array.from(ingredientList.getElementsByTagName('li')).map(li => li.innerText);
  const instructions = Array.from(instructionList.getElementsByTagName('li')).map(li => li.innerText);

  if (title && ingredients.length > 0 && instructions.length > 0) {
    const recipe = new Recipe(title, ingredients, instructions);
    recipes.push(recipe);

    // This is to clear input fields and lists
    titleInput.value = '';
    ingredientList.innerHTML = '';
    instructionList.innerHTML = '';

    // Clear recipe details
    clearRecipeDetails();

    // Update recipe list
    updateRecipeList();
  }
}

//This is to update the recipe list
function updateRecipeList() {
  const recipeList = document.getElementById('recipe-list');
  recipeList.innerHTML = '';

  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];

    const listItem = document.createElement('li');
    listItem.className = 'recipe-list-item';
    listItem.innerText = recipe.title;

    // Add click event to display recipe details
    listItem.addEventListener('click', function() {
      showRecipeDetails(i);
    });

    recipeList.appendChild(listItem);
  }
}

// Function to display recipe details
function showRecipeDetails(index) {
  const recipe = recipes[index];

  const recipeDetails = document.getElementById('recipe-details');
  recipeDetails.innerHTML = '';

  const title = document.createElement('h2');
  title.innerText = recipe.title;

  const ingredients = document.createElement('h3');
  ingredients.innerText = 'Ingredients';
  const ingredientList = document.createElement('ul');
  recipe.ingredients.forEach(ingredient => {
    const listItem = document.createElement('li');
    listItem.innerText = ingredient;
    ingredientList.appendChild(listItem);
  });

  const instructions = document.createElement('h3');
  instructions.innerText = 'Instructions';
  const instructionList = document.createElement('ol');
  recipe.instructions.forEach(instruction => {
    const listItem = document.createElement('li');
    listItem.innerText = instruction;
    instructionList.appendChild(listItem);
  });

  recipeDetails.appendChild(title);
  recipeDetails.appendChild(ingredients);
  recipeDetails.appendChild(ingredientList);
  recipeDetails.appendChild(instructions);
  recipeDetails.appendChild(instructionList);

  recipeDetails.style.display = 'block';
}

// Initial update of recipe list
updateRecipeList();
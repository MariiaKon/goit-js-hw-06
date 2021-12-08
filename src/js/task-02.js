const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById('ingredients');
let arr = [];

for (let i = 0; i < ingredients.length; i+=1) {
  const ingredient = ingredients[i];
  
  const liItem = document.createElement('li');
  liItem.textContent = ingredient;
  liItem.classList.add('item');
  arr.push(liItem)
}

ingredientsList.append(...arr);

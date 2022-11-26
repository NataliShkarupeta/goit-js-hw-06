const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = function (arr){
  const colection = []
   arr.forEach(ingredient => {
  const ingredientItem = document.createElement('li')
  ingredientItem.classList.add('item')
  ingredientItem.textContent = [ingredient];
  colection.push(ingredientItem)
  });
  const listEl = document.querySelector('#ingredients')
  console.log(listEl);
  listEl.append(...colection)
}
list(ingredients)








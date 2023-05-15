const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");
let li;

for (let i = 0; i < ingredients.length; i++){
  li = document.createElement("li");
  li.textContent = ingredients[i];
  list.append(li);
}
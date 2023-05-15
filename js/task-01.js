const categoriesList = document.querySelector('#categories'); // Вибір елементу ul#categories
const categoriesItems = categoriesList.querySelectorAll('.item'); // Вибір всіх елементів li.item

console.log('Number of categories:', categoriesItems.length); // Виведення кількості категорій

categoriesItems.forEach((item) => {
  const categoryTitle = item.querySelector('h2').textContent; // Отримання тексту заголовку (тегу <h2>)
  const elements = item.querySelectorAll('li').length; // Отримання кількості елементів в категорії (усіх <li>)

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${elements}`);
});
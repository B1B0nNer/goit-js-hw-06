const categoriesList = document.getElementById("categories");
const categories = categoriesList.childNodes;

console.log("Number of categories:", categories.length);

categories.forEach((category) => {
  if (category.nodeType === 1) {
    const title = category.firstChild.textContent;
    const elements = category.lastChild.childNodes.length;

    console.log("Category:", title);
    console.log("Elements:", elements);
  }
});

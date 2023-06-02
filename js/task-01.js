const ul = document.getElementById("categories");
const items = ul.childNodes;

console.log("Number of categories:", items.length);

items.forEach((item) => {
  if (item.nodeType === 1) {
    const category = item.firstChild.textContent;
    const elements = item.lastChild.getElementsByTagName("li").length;

    console.log("Category:", category);
    console.log("Elements:", elements);
  }
});

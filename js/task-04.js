let couterValue = 0;
const plusButton = document.querySelector('[data-action="increment"]');
const minusButton = document.querySelector('[data-action="decrement"]');
const span = document.querySelector("#value");
plusButton.addEventListener("click", () =>{
    couterValue++;
    span.textContent = couterValue;
});
minusButton.addEventListener("click", () =>{
    couterValue--;
    span.textContent = couterValue;
});
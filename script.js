let clicks = 0;

const button = document.getElementById("clickButton");
const counterText = document.getElementById("counterText");
const itemContainer = document.getElementById("itemContainer");

button.addEventListener("click", function () {

  clicks++;

  counterText.textContent =
    `you just clicked it ${clicks} times!`;

  counterText.classList.remove("show");

  setTimeout(() => {
    counterText.classList.add("show");
  }, 10);

  // Unlock image at 10 clicks
  if (clicks >= 10) {
    itemContainer.classList.add("show");
  }

});

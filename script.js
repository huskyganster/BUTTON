let clicks = 0;

const button = document.getElementById("clickButton");
const counterText = document.getElementById("counterText");

button.addEventListener("click", function () {
  clicks++;

  counterText.textContent =
    `you just clicked it ${clicks} times!`;

  counterText.classList.remove("show");

  setTimeout(() => {
    counterText.classList.add("show");
  }, 10);
});

let clicks = 0;
let dancing = false;

const button = document.getElementById("clickButton");

const counterText =
  document.getElementById("counterText");

const itemContainer =
  document.getElementById("itemContainer");

const baldiImage =
  document.getElementById("baldiImage");

const danceContainer =
  document.getElementById("danceContainer");

const danceGif =
  document.getElementById("danceGif");


function updateCounter() {

  counterText.textContent =
    `you just clicked it ${clicks} times!`;

  counterText.classList.add("show");


  // Baldi appears after 10 clicks
  if (clicks >= 10) {
    itemContainer.classList.add("show");
  }

}


/* MAIN BUTTON */

button.addEventListener("click", function () {

  clicks++;

  updateCounter();

});


/* BALDI SHOP CLICK */

baldiImage.addEventListener("click", function () {

  if (dancing) {
    return;
  }


  if (clicks < 25) {
    return;
  }


  dancing = true;


  // Take 25 clicks
  clicks -= 25;

  updateCounter();


  // Force GIF to restart
  danceGif.src =
    "baldidancing.gif?v=" + Date.now();


  // Show GIF on LEFT side
  danceContainer.classList.add("show");


  // Play for 13 seconds
  setTimeout(function () {

    danceContainer.classList.remove("show");


    // Reward
    clicks += 10;

    updateCounter();


    setTimeout(function () {

      danceGif.src = "";

      dancing = false;

    }, 600);


  }, 13000);

});


updateCounter();

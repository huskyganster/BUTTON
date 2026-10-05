let clicks = 0;
let dancing = false;

const button = document.getElementById("clickButton");
const counterText = document.getElementById("counterText");

const itemContainer = document.getElementById("itemContainer");
const baldiImage = document.getElementById("baldiImage");

const danceContainer = document.getElementById("danceContainer");
const danceGif = document.getElementById("danceGif");


function updateCounter() {

  counterText.textContent =
    `you just clicked it ${clicks} times!`;

  counterText.classList.add("show");


  // Unlock Baldi at 10 clicks
  if (clicks >= 10) {
    itemContainer.classList.add("show");
  }

}


/* MAIN BUTTON */

button.addEventListener("click", function () {

  clicks++;

  updateCounter();

});


/* CLICK BALDI */

baldiImage.addEventListener("click", function () {

  // Stop user from starting multiple GIFs
  if (dancing) {
    return;
  }


  // Need 25 clicks
  if (clicks < 25) {
    return;
  }


  dancing = true;


  // Pay 25 clicks
  clicks -= 25;

  updateCounter();


  /*
    Reload the GIF every time.

    Adding ?time= makes the browser treat it
    like a fresh GIF so it starts from frame 1.
  */

  danceGif.src =
    "baldidancing.gif?time=" + new Date().getTime();


  // Fade GIF in
  danceContainer.classList.add("show");


  /*
    GIF plays for 13 seconds
  */

  setTimeout(function () {

    // Fade GIF out
    danceContainer.classList.remove("show");


    // Reward player
    clicks += 10;

    updateCounter();


    // Allow another purchase
    dancing = false;


    // Stop/remove GIF
    setTimeout(function () {
      danceGif.src = "";
    }, 800);


  }, 13000);

});


updateCounter();

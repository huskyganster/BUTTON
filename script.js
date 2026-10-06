body {
  margin: 0;
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #c0c0c0;

  font-family: "MS Sans Serif", Arial, sans-serif;
}

.main {
  text-align: center;
}


/* WINDOWS BUTTON */

button {
  font-family: "MS Sans Serif", Arial, sans-serif;
  font-size: 16px;

  padding: 8px 28px;

  background: #c0c0c0;
  color: black;

  border-top: 2px solid white;
  border-left: 2px solid white;
  border-right: 2px solid #404040;
  border-bottom: 2px solid #404040;

  cursor: pointer;
}

button:active {
  border-top: 2px solid #404040;
  border-left: 2px solid #404040;
  border-right: 2px solid white;
  border-bottom: 2px solid white;
}


/* COUNTER */

#counterText {
  margin-top: 15px;

  font-size: 16px;

  opacity: 0;

  transition: opacity 0.4s ease;
}

#counterText.show {
  opacity: 1;
}


/* BALDI SHOP */

/* COMPLETELY HIDDEN AT FIRST */

#baldiShop {
  display: none;

  position: relative;

  width: fit-content;

  margin: 18px auto 0;

  opacity: 0;
}

#baldiShop.show {
  display: block;

  animation: fadeIn 0.8s forwards;
}


/* BALDI IMAGE */

#baldiImage {
  width: 70px;
  height: auto;

  display: block;

  cursor: pointer;
}


/* PRICE */

.price {
  position: absolute;

  left: 50%;
  top: 78px;

  transform: translateX(-50%);

  width: 225px;

  padding: 6px 8px;

  background: #ffffcc;
  color: black;

  border: 1px solid black;

  font-size: 12px;

  opacity: 0;

  pointer-events: none;

  z-index: 20;
}

#baldiShop:hover .price {
  opacity: 1;
}


/* DANCING GIF */

/* COMPLETELY HIDDEN UNTIL PURCHASE */

#danceArea {
  display: none;

  margin-top: 18px;

  opacity: 0;
}

#danceArea.show {
  display: block;

  animation: fadeIn 0.8s forwards;
}

#danceGif {
  width: 180px;
  height: auto;

  display: block;

  margin: auto;
}


/* FADE */

@keyframes fadeIn {

  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }

}

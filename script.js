body {
  margin: 0;
  width: 100vw;
  height: 100vh;

  background: #c0c0c0;

  font-family: "MS Sans Serif", Arial, sans-serif;

  overflow: hidden;
}


/* MAIN AREA */

.main {
  position: fixed;

  left: 50%;
  top: 50%;

  transform: translate(-50%, -50%);

  text-align: center;
}


/* OLD WINDOWS BUTTON */

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


/* CLICK COUNTER */

#counterText {
  margin-top: 15px;

  font-size: 16px;

  opacity: 0;

  transition: opacity 0.5s ease;
}

#counterText.show {
  opacity: 1;
}


/* BALDI ITEM */

#itemContainer {
  position: absolute;

  left: 50%;
  top: 75px;

  transform: translateX(-50%);

  opacity: 0;
  visibility: hidden;

  transition: opacity 1s ease;
}

#itemContainer.show {
  opacity: 1;
  visibility: visible;
}


/* BALDI IMAGE */

#baldiImage {
  width: 70px;
  height: auto;

  display: block;

  cursor: pointer;
}


/* BALDI HOVER TEXT */

.price {
  position: absolute;

  left: 50%;
  top: 80px;

  transform: translateX(-50%);

  width: 210px;

  padding: 6px;

  background: #ffffcc;
  color: black;

  border: 1px solid black;

  font-size: 12px;

  opacity: 0;

  pointer-events: none;
}

#itemContainer:hover .price {
  opacity: 1;
}


/* DANCING GIF */

#danceContainer {
  position: fixed;

  left: 30px;
  bottom: 30px;

  opacity: 0;
  visibility: hidden;

  transition: opacity 0.6s ease;

  z-index: 100;
}

#danceContainer.show {
  opacity: 1;
  visibility: visible;
}

#danceGif {
  width: 220px;
  height: auto;
}

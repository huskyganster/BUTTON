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


/* EVERYTHING STAYS CENTERED */

.main {
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


/* CLICK TEXT */

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

#baldiShop {
  position: relative;

  margin: 18px auto 0;

  width: fit-content;

  opacity: 0;
  visibility: hidden;

  transition: opacity 0.8s ease;
}

#baldiShop.show {
  opacity: 1;
  visibility: visible;
}


/* BALDI IMAGE */

#baldiImage {
  display: block;

  width: 70px;
  height: auto;

  cursor: pointer;
}


/* HOVER PRICE */

.price {
  position: absolute;

  left: 50%;
  top: 78px;

  transform: translateX(-50%);

  width: 220px;

  padding: 6px 8px;

  background: #ffffcc;
  color: black;

  border: 1px solid black;

  font-size: 12px;

  opacity: 0;

  pointer-events: none;

  z-index: 10;
}

#baldiShop:hover .price {
  opacity: 1;
}


/* DANCING GIF */

#danceArea {
  margin-top: 20px;

  opacity: 0;
  visibility: hidden;

  transition: opacity 0.8s ease;
}

#danceArea.show {
  opacity: 1;
  visibility: visible;
}

#danceGif {
  width: 180px;
  height: auto;
}

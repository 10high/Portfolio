//TODO: add head meta data, 
//add entries, bio bold bug


import * as myUIElements from "../modules/uiElements.js";
import { eventListenerManager } from "../modules/eventListenerManager.js";
import "../modules/bioCopy.js";
import { storeReturnURL } from "../modules/impressum.js";

storeReturnURL("https://www.flyingtens.com/Portfolio/index.html");

const addInitialEventListeners = () => {
  document.querySelector("#sortButton").addEventListener("pointerdown", myUIElements.toggleSortByRecent);
  if (window.matchMedia("(max-width: 699px)").matches) {
    eventListenerManager.smallScreen();
  } else {
    eventListenerManager.bigScreen();
  }
}; 
addInitialEventListeners();

window.matchMedia("(max-width: 699px)").addEventListener("change", function () {
  if (window.matchMedia("(max-width: 699px)").matches) {
    eventListenerManager.smallScreen();
  } else {
    eventListenerManager.bigScreen();
  }
});

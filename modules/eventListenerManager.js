import { cardManager } from "./cardManager.js";
import * as myBioManagers from "./bioManagers.js";
import * as myUIElements from "./uiElements.js";


export const eventListenerManager = {
    aboutMeButton: document.querySelector("#aboutMeButton"),
    bioCloseButton: document.querySelector("#bioCloseButton"),
    showMoreButton: document.querySelector("#showMoreButton"),
    smallScreen() {
      cardManager.removeAllCardsFromPage();
      cardManager.cardNumberManager(true);
      this.aboutMeButton.addEventListener("pointerdown", myBioManagers.bioMobileManager.manageBioMobileButtons);
      this.bioCloseButton.addEventListener("pointerdown", myBioManagers.bioMobileManager.manageBioMobileButtons);
      window.addEventListener("scroll", myUIElements.scrollManager.detectScrollDirection);
      this.showMoreButton.addEventListener("pointerdown", myUIElements.showMore);
      this.aboutMeButton.removeEventListener("pointerdown", myBioManagers.animateBioPicBigScreen);
    },
    bigScreen() {
      cardManager.removeAllCardsFromPage();
      cardManager.cardNumberManager(false);
      myBioManagers.bioMobileManager.closeBioMobile();
      this.aboutMeButton.removeEventListener("pointerdown", myBioManagers.bioMobileManager.manageBioMobileButtons);
      this.bioCloseButton.removeEventListener("pointerdown", myBioManagers.bioMobileManager.manageBioMobileButtons);
      window.removeEventListener("scroll", myUIElements.scrollManager.detectScrollDirection);
      this.showMoreButton.removeEventListener("pointerdown", myUIElements.showMore);
      this.aboutMeButton.addEventListener("pointerdown", myBioManagers.animateBioPicBigScreen);
    }
  }
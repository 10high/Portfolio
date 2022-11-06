import { cardManager } from "./cardManager.js";

const toggleSortByRecent = (event) => {
  event.target.classList.toggle("header__button--downArrow");
  event.target.classList.toggle("header__button--upArrow");
  cardManager.removeAllCardsFromPage();
  cardManager.reverseStoredCards();
  cardManager.cardNumberManager();
}

const showMore = (event) => {
  const showMoreButton = event.target;
  cardManager.removeAllCardsFromPage(),
    cardManager.addAllCardsToPage();
  cardManager.showMore = true;
  showMoreButton.setAttribute("hidden", "true");
}

const scrollManager = {
  scrollWindow: document.querySelector("HTML"),
  navbar: document.querySelector("#navbar"),
  lastScrollTop: 0,
  detectScrollDirection() {
    scrollManager.scrollWindow.scrollTop > this.lastScrollTop ?
      scrollManager.navbar.classList.add("navbar--animated") :
      scrollManager.navbar.classList.remove("navbar--animated");
    this.lastScrollTop = scrollManager.scrollWindow.scrollTop;
  }
}

const popupOverheadClearanceManager = {
  navbar: document.querySelector("#navbar"),
  sayHi: document.querySelector("#sayHi"),
  clearOverheadOnOpen(event) {
    let card = event.currentTarget;
    setTimeout(() => {
      const navbarBottom = popupOverheadClearanceManager.navbar.getBoundingClientRect().bottom;
      const topClearance = card.popupWrapper.getBoundingClientRect().top;
      popupOverheadClearanceManager.sayHi.classList.add("sayHi--hidden");
      if (topClearance < navbarBottom) {
        document.documentElement.style.setProperty("--popupWrapperTopClearance", `${(navbarBottom - topClearance) + 16}px`);
        card.classList.add("card--clearTop");
      }
    }, 200)
  },
  resetOnClose(event) {
    let cardPopupWrapper = event.currentTarget.popupWrapper;
    let computedStyles = window.getComputedStyle(cardPopupWrapper);
    let currentVisibility = computedStyles.getPropertyValue("visibility");
    if (currentVisibility === "hidden") {
      event.currentTarget.classList.remove("card--clearTop");
    };
  },
  manageOverheadAllCards() {
    for (let card of cardManager.storedCards) {
      card.popupWrapper = card.querySelector(".card__popupWrapper");
      card.addEventListener("focus", this.clearOverheadOnOpen);
      card.addEventListener("transitionend", this.resetOnClose);
    }
  }
}

export { toggleSortByRecent, showMore, scrollManager, popupOverheadClearanceManager };
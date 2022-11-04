import { cardManager } from "./cardManager.js";

const toggleSortByRecent = (event) => {
  const sortButton = event.target;
  sortButton.innerText === "Most recent ⇑" ?
    sortButton.innerText = "Most recent ⇓" :
    sortButton.innerText = "Most recent ⇑";
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

const popupAboveClearance = () => {
  const allCardWrappersArr = document.querySelectorAll(".card");
  const navbar = document.querySelector("#navbar");
  const sayHi = document.querySelector("#sayHi");
  for (let card of allCardWrappersArr) {
    const cardPopupWrapper = card.querySelector(".card__popupWrapper");
    card.addEventListener("focus", function () {
      sayHi.classList.add("sayHi--hidden");
      setTimeout(() => {
        const navbarBottom = navbar.getBoundingClientRect().bottom;
        const topClearance = cardPopupWrapper.getBoundingClientRect().top;
        if (topClearance < navbarBottom) {
          document.documentElement.style.setProperty("--popupWrapperTopClearance", `${(navbarBottom - topClearance) + 16}px`);
          card.classList.add("card--clearTop");
        }
      }, 200)
    });
    card.addEventListener("transitionend", function () {
      let computedStyles = window.getComputedStyle(cardPopupWrapper);
      let currentVisibility = computedStyles.getPropertyValue("visibility");
      if (currentVisibility === "hidden") {
        card.classList.remove("card--clearTop");
        sayHi.classList.remove("sayHi--hidden");
      }
    })
  }
}

export { toggleSortByRecent, showMore, scrollManager, popupAboveClearance };
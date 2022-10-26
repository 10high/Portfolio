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

export {toggleSortByRecent, showMore, scrollManager};
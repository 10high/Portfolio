import { portfolioItems } from "../modules/portfolioItems.js";
import { assembleCard } from "../modules/cardBuilder.js";

export const cardManager = {
    storedCards: [],
    cardContainer: document.querySelector("#cardContainer"),
    showMore: false,
    initialBuildStoreAdd() {
      const sortedPortfolioItems = portfolioItems.sort((a, b) => b.date - a.date);
      for (let portfolioItem of sortedPortfolioItems) {
        this.storedCards.push(assembleCard(portfolioItem));
      };
      this.cardNumberManager();
    },
    cardNumberManager(matchesSmall = window.matchMedia("(max-width: 699px)").matches) {
      matchesSmall && !this.showMore ?
        this.addLimitedCardsToPage() :
        this.addAllCardsToPage();
    },
    addAllCardsToPage() {
      for (let card of this.storedCards) {
        this.cardContainer.append(card);
      }
    },
    addLimitedCardsToPage() {
      for (let i = 0; i < 3; i++) {
        this.cardContainer.append(this.storedCards[i]);
      }
    },
    removeAllCardsFromPage() {
      while (this.cardContainer.firstChild) {
        this.cardContainer.removeChild(this.cardContainer.lastChild);
      };
    },
    reverseStoredCards() {
      this.storedCards.reverse();
    }
  }
  cardManager.initialBuildStoreAdd();
import { portfolioItems } from "./modules/portfolioItems.js";

const buildCardElements = portfolioItem => {
  //div wrapper//
  const card = document.createElement("div");
  //popup//
  const card__popupWrapper = document.createElement("div");
  const card__popupIconLinksContainer = document.createElement("div");
  const card__popupWebsiteLink = document.createElement("a");
  const card__popupWebsiteIconSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const card__popupWebsiteIconPath1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  const card__popupWebsiteIconPath2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  const card__popupGitLink = document.createElement("a");
  const card__popupGitIconSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const card__popupGitIconPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
  const card__popupDescription = document.createElement("p");
  const card__popupListContainer = document.createElement("ul");
  const card__popupListItems = portfolioItem.descriptionList.map(listItem => document.createElement("li"));
  const card__popupTail = document.createElement("div");
  //card body//
  const card__cardWrapper = document.createElement("section");
  const card__category = document.createElement("h2");
  const card__thumbnailContainer = document.createElement("div");
  const card__title = document.createElement("h3");

  //builds website SVG icon
  card__popupWebsiteIconSVG.setAttribute("width", "16");
  card__popupWebsiteIconSVG.setAttribute("height", "16");
  card__popupWebsiteIconSVG.setAttribute("fill", "currentColor");
  card__popupWebsiteIconSVG.setAttribute("viewBox", "0 0 16 16");
  card__popupWebsiteIconPath1.setAttribute("fill-rule", "evenodd");
  card__popupWebsiteIconPath1.setAttribute("d", "M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z");
  card__popupWebsiteIconPath2.setAttribute("fill-rule", "evenodd");
  card__popupWebsiteIconPath2.setAttribute("d", "M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z");
  card__popupWebsiteIconSVG.append(card__popupWebsiteIconPath1, card__popupWebsiteIconPath2);
  card__popupWebsiteLink.append(card__popupWebsiteIconSVG);
  //builds Git SVG icon
  card__popupGitIconSVG.setAttribute("width", "16");
  card__popupGitIconSVG.setAttribute("height", "16");
  card__popupGitIconSVG.setAttribute("fill", "currentColor");
  card__popupGitIconSVG.setAttribute("viewBox", "0 0 16 16");
  card__popupGitIconPath.setAttribute("d", "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z");
  card__popupGitIconSVG.append(card__popupGitIconPath);
  card__popupGitLink.append(card__popupGitIconSVG);
  card__popupTail.style.backgroundImage = "url(./images/popupTail.svg)"

  card.classList.add("card");
  card.setAttribute("tabindex", 0);
  card__popupWrapper.classList.add("card__popupWrapper");
  card__popupIconLinksContainer.classList.add("card__popupIconLinksContainer");
  card__popupWebsiteLink.classList.add("card__popupWebsiteLink");
  card__popupWebsiteLink.setAttribute("target", "_blank");
  card__popupGitLink.classList.add("card__popupGitLink");
  card__popupGitLink.setAttribute("target", "_blank");
  card__popupDescription.classList.add("card__popupDescription");
  card__popupListContainer.classList.add("card__popupListContainer");
  for (let item of card__popupListItems) {
    item.classList.add("card__popupListItem")
  }
  card__popupTail.classList.add("card__popupTail");
  card__cardWrapper.classList.add("card__cardWrapper");
  card__category.classList.add("card__category");
  card__thumbnailContainer.classList.add("card__thumbnailContainer");
  card__title.classList.add("card__title");

  //structure card elements
  //div wrapper
  card.append(card__popupWrapper);
  //popup
  card__popupWrapper.append(card__popupIconLinksContainer);
  card__popupIconLinksContainer.append(card__popupWebsiteLink);
  card__popupIconLinksContainer.append(card__popupGitLink);
  card__popupWrapper.append(card__popupDescription);
  card__popupWrapper.append(card__popupListContainer);
  for (let item of card__popupListItems){
    card__popupListContainer.append(item);
  };
  card__popupWrapper.append(card__popupTail);
  //card body
  card.append(card__cardWrapper);
  card__cardWrapper.append(card__category);
  card__cardWrapper.append(card__thumbnailContainer);
  card__cardWrapper.append(card__title);

  return card;
}

//TODO: iterate list array on object to add list items.

const populateCard = (card, portfolioItem) => {
  //popup
  card.querySelector(".card__popupWebsiteLink").href = portfolioItem.websiteLink;
  card.querySelector(".card__popupGitLink").href = portfolioItem.githubLink;
  card.querySelector(".card__popupDescription").innerText = portfolioItem.description;
  const listItemsCollection = card.querySelector(".card__popupListContainer").children;
  for (let i = 0; i < listItemsCollection.length; i++){
    listItemsCollection[i].innerText = portfolioItem.descriptionList[i];
  };
  //card body
  card.querySelector(".card__category").innerText = portfolioItem.category;
  card.querySelector(".card__thumbnailContainer").style.backgroundImage = portfolioItem.imageSrc;
  card.querySelector(".card__title").innerText = portfolioItem.heading;

  return card;
}

const assembleCard = portfolioItem => {
  let assembledCard = buildCardElements(portfolioItem);
  assembledCard = populateCard(assembledCard, portfolioItem);
  const popupWrapper = assembledCard.querySelector(".card__popupWrapper");
  const cardWrapper = assembledCard.querySelector(".card__cardWrapper");
  assembledCard.addEventListener("focus", function () {
    popupWrapper.classList.add("card__popupWrapper--isSelected");
    cardWrapper.classList.add("card__cardWrapper--isSelected");
  });
  assembledCard.addEventListener("blur", function () {
    popupWrapper.classList.remove("card__popupWrapper--isSelected");
    cardWrapper.classList.remove("card__cardWrapper--isSelected");
  });
  return assembledCard;
}

const addCardsToPage = () => {
  const landmarkMain = document.querySelector("main");
  const sortedPortfolioItems = portfolioItems.sort((a, b) => b.date - a.date);
  for (let portfolioItem of sortedPortfolioItems) {
    const assembledCard = assembleCard(portfolioItem)
    landmarkMain.append(assembledCard);
  }
}

addCardsToPage();

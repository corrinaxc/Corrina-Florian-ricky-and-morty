import { createCharacterCard } from "./components/card/card.js";
import {
  nextButtonEvent,
  prevButtonEvent,
} from "./components/nav-button/nav-button.js";
import { setPagination } from "./components/nav-pagination/nav-pagination.js";
import { submitEventListener } from "./components/search-bar/search-bar.js";
export const cardContainer = document.querySelector(
  '[data-js="card-container"]'
);
export const searchBar = document.querySelector('[data-js="search-bar"]');
export const prevButton = document.querySelector('[data-js="button-prev"]');
export const nextButton = document.querySelector('[data-js="button-next"]');
export const pagination = document.querySelector('[data-js="pagination"]');

console.clear();

export let APIurl = "https://rickandmortyapi.com/api/character";
let urlSpecifierStorage = "";
export let maxPage = 0;
export let pageNumber = 1;

export async function fetchData(page, urlSpecifier) {
  if (page === 1) {
    pageNumber = page;
  }
  if (page === "up") {
    pageNumber++;
  }
  if (page === "down") {
    pageNumber--;
  }

  if (urlSpecifier) {
    urlSpecifierStorage = urlSpecifier;
  }
  const url = APIurl + `?${urlSpecifierStorage}&page=${pageNumber}`;

  try {
    const response = await fetch(url);

      if (!response.ok) {
      cardContainer.innerHTML = `<img id="error-img" src="assets/not-found-img.jpeg" alt="entries not found" ></img>`;
      setPagination(1, 1);
      throw new Error("Bad response");
    }
    cardContainer.innerHTML = "";
    const APIdata = await response.json();
    const characters = APIdata.results;
    maxPage = APIdata.info.pages; 

    setPagination(pageNumber, maxPage);

    characters.forEach((character) => {
      const newCharacter = [
        character.image,
        character.name,
        character.status,
        character.type,
        character.episode.length,
      ];
      const newCard = createCharacterCard(...newCharacter);
      cardContainer.append(newCard);
    });
    window.scrollTo(0, 0)
  } catch (error) {
    console.error(error);
  }
}

fetchData(1);
nextButtonEvent();
prevButtonEvent();
submitEventListener();

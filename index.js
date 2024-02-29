// 1. Florian - sort page number funtionality (with search bar)
// 2. Corrina - finish styling 
// 3. CC/FR - refactoring 
// 4. Florian - tests


import { createCharacterCard } from "./components/card/card.js";

import { nextPagination, prevPagination } from "./components/nav-pagination/nav-pagination.js";
import { submitEventListener } from "./components/search-bar/search-bar.js";
export const cardContainer = document.querySelector(
  '[data-js="card-container"]'
);
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
export const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');

export const prevButton = document.querySelector('[data-js="button-prev"]');
export const nextButton = document.querySelector('[data-js="button-next"]');
export const pagination = document.querySelector('[data-js="pagination"]');

// example for the creation of a new card
// const newCard = createCharacterCard(
//   "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/800px-Cat03.jpg",
//   "Catty",
//   "super cat",
//   "animal",
//   "52"
// );
// cardContainer.append(newCard);

console.clear();

const APIurl = "https://rickandmortyapi.com/api/character";
export let maxPage = 0;

export async function fetchData(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      cardContainer.innerHTML =
        "No such entries found or service unavaliable at the moment. Try again with different search request.";
      throw new Error("Bad response");
    }

    const APIdata = await response.json();
    const characters = APIdata.results;
    maxPage = APIdata.info.pages;
    if (maxPage === 1) {
      nextButton.classList.add("hidden");
    }
    if (!url.includes("page")) {
      prevButton.classList.add("hidden");
    }
    console.log(APIdata);
    console.log(characters);
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
  } catch (error) {
    console.error(error);
  }
}

fetchData(APIurl);

nextPagination();
prevPagination();
submitEventListener();


// 1, Corina - API: fetch characters from show - fetchCharacters function, do import
// 2, Florian - create function to create cards from API Data (createCharacterCard in cardContainer.js)
//     -parameters: src, name, status, type, occurences - li as containter returned
// 3, Corina - pagination: several pages with 20 char each
// 4, Florian - searchbar: searchQuery
// 5, BONUS: refactor
// 6, styling
// 7, tests

import { createCharacterCard } from "./components/card/card.js";
import { nextPagination, prevPagination } from "./components/nav-pagination/nav-pagination.js";

export const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
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



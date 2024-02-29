// 1, Corina - API: fetch characters from show - fetchCharacters function, do import
// 2, Florian - create function to create cards from API Data (createCharacterCard in cardContainer.js)
//     -parameters: src, name, status, type, occurences - li as containter returned
// 3, Corina - pagination: several pages with 20 char each
// 4, Florian - searchbar: searchQuery
// 5, BONUS: refactor
// 6, styling
// 7, tests

import { createCharacterCard } from "./components/card/card.js";
// import { submitEvent } from "./components/search-bar/search-bar.js";

export const cardContainer = document.querySelector(
  '[data-js="card-container"]'
);
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
let searchQuery = "";

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
// const characterArray = [];

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
    console.log(characters);
    characters.forEach((character) => {
      const newCharacter = [
        character.image,
        character.name,
        character.status,
        character.type,
        character.episode.length,
      ];
      // characterArray.push(newCharacter);
      // console.log(characterArray);

      const newCard = createCharacterCard(...newCharacter);
      cardContainer.append(newCard);
    });
  } catch (error) {
    console.error(error);
  }
}

fetchData(APIurl);
// console.log(characterArray);

// eventListener for searchBar:
searchBar.addEventListener("submit", (e) => {
  console.log("click");
  e.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log("data", data);
  searchQuery = data.query;
  console.log("searchQuery", searchQuery);
  cardContainer.innerHTML = "";
  fetchData(`https://rickandmortyapi.com/api/character?name=${searchQuery}`);
});

// 1, Corina - API: fetch characters from show - fetchCharacters function, do import
// 2, Florian - create function to create cards from API Data (createCharacterCard in cardContainer.js)
//     -parameters: src, name, status, type, occurences - li as containter returned
// 3, Corina - pagination: several pages with 20 char each
// 4, Florian - searchbar: searchQuery
// 5, BONUS: refactor
// 6, styling
// 7, tests

const cardContainer = document.querySelector('[data-js="card-container"]');
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
const searchQuery = "";

console.clear();

const APIurl = "https://rickandmortyapi.com/api"

async function fetchData() {
  try {
      const response = await fetch(APIurl);

  if (!response.ok){
      console.error("Bad response");
      return;
  }
  const APIdata = await response.json();
  const characters = APIdata.characters;
    console.log(characters);

  } catch (error) {
    console.error("error");
}
}

fetchData();

// imageSource - url
// characterName - string
// status - string
// type - string
// occurencies - array.length 

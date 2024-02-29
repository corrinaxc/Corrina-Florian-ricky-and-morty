import { cardContainer, searchBar, fetchData } from "/index.js";

let searchQuery = "";

export function submitEventListener() {
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
}

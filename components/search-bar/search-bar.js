import { cardContainer, searchBar, fetchData } from "/index.js";

export function submitEventListener() {
  searchBar.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const searchQuery = data.query;
    // cardContainer.innerHTML = "";
    searchBar.reset();
    fetchData(
      1,
      `https://rickandmortyapi.com/api/character?name=${searchQuery}`
    );
  });
}

import { searchBar, fetchData } from "../../index.js";

export function submitEventListener() {
  searchBar.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const searchQuery = data.query;
    searchBar.reset();
    fetchData(1, `name=${searchQuery}`);
  });
}

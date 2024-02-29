// import { fetchData } from "../..";
// import { cardContainer } from "../..";

function submitEvent(eventObject, search) {
  eventObject.addEventListener("submit", (e) => {
    e.preventDefault();
    search = eventObject.textContent;
    cardContainer.innerHTML = "";

    // create if-clause that will give alert, if character does not exist
    fetchData(`https://rickandmortyapi.com/api/character?name=${searchQuery}`);
  });
}

import { fetchData } from "../..";

export 



searchbar.addEventListener("submit", ()=>{
    searchQuery = searchbar.textContent;
    cardContainer.innerHTML = "";

    // create if-clause that will give alert, if character does not exist
    fetchData(`https://rickandmortyapi.com/api/character?name=${searchQuery}`)
})
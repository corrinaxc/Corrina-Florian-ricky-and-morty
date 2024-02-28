// ### Pagination

// Great Job! But we want to see not only 20 characters, we want all of them! So lets implement the
// pagination.

// - By adding the string `?page=<pageIndex>` to the end of the fetch URL, you can receive the
//   respective page of characters.
// - Use here the state variable `page` to keep track of the current page index.
// - Inside of the `info` part of the received data you can find the max page count.
// - Add an event listener on each of the next and prev buttons which do the following
//   - it is prevented that the page index could go higher than the max page index or below 1
//   - the page index is increased / decreased
//   - the `fetchCharacters` function is called
// - Update the pagination display each time characters are fetched to show the current page index and
//   the current max page index.

import { fetchData } from "./index.js";

fetchData("https://rickandmortyapi.com/api/character?page=19");


// 
// "https://rickandmortyapi.com/api/character?page=<pageIndex>"
// set the page number
// amend the url as per page number 
// max page count = 42 max page
// 


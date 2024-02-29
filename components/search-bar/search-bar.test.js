import { submitEventListener } from "./search-bar.js";

test("The function adds an event listener to the submit button next to the search bar. The event listener enables the button to return card-elements on the card-container-html-element, that fit a search, or if a search has no results, will return the message in cardContainer.innerHTML", () => {
  const result = submitEventListener();
  expect(result).toBe();
  // this seems to be super hard to test, we need the test result to be a number of card elements
});

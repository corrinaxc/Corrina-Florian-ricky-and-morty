import { nextButton, prevButton, fetchData } from "/index.js";

export function nextButtonEvent() {
  nextButton.addEventListener("click", function (event) {
    //   cardContainer.innerHTML = "";
    //   pageNumber++;
    //   const url = `${APIurl}page=${pageNumber}`;
    fetchData("up");
    // pagination();
    // pagination.textContent = `${pageNumber}/${maxPage}`;
    // prevButton.classList.remove("hidden");
    // if (pageNumber === maxPage) {
    //   nextButton.classList.add("hidden");
    // }
  });
}

export function prevButtonEvent() {
  prevButton.addEventListener("click", function (event) {
    //   cardContainer.innerHTML = "";
    //   pageNumber--;
    //   const url = `https://rickandmortyapi.com/api/character?page=${pageNumber}`;
    fetchData("down");
    // pagination();
    // pagination.textContent = `${pageNumber}/${maxPage}`;
    // nextButton.classList.remove("hidden");
    // if (pageNumber === 1) {
    //   prevButton.classList.add("hidden");
  });
}

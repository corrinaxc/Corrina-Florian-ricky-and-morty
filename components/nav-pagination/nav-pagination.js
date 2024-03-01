import {
  //   fetchData,
  //   cardContainer,
  prevButton,
  nextButton,
  pagination,
  //   maxPage,
  //   pageNumber,
  //   APIurl,
} from "/index.js";

export function setPagination(current, max) {
  pagination.textContent = `${current}/${max}`;
  prevButton.classList.remove("hidden");
  nextButton.classList.remove("hidden");
  if (max === 1) {
    nextButton.classList.add("hidden");
    prevButton.classList.add("hidden");
    pagination.textContent = "";
  }
  //   if (!url.includes("page")) {
  //     prevButton.classList.add("hidden");
  //     pageNumber = 1;
  //   }
  if (current === max) {
    nextButton.classList.add("hidden");
  }
  // else {
  //     nextButton.classList.remove("hidden");
  // }
  if (current === 1) {
    prevButton.classList.add("hidden");
  }
  // else {
  // prevButton.classList.remove("hidden");
  // }
}

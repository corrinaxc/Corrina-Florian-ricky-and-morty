import {
  prevButton,
  nextButton,
  pagination,
} from "./../../index.js";

export function setPagination(current, max) {
  pagination.textContent = `${current}/${max}`;
  prevButton.classList.remove("hidden");
  nextButton.classList.remove("hidden");
  if (max === 1) {
    nextButton.classList.add("hidden");
    prevButton.classList.add("hidden");
    pagination.textContent = "";
  }
  if (current === max) {
    nextButton.classList.add("hidden");
  }
  if (current === 1) {
    prevButton.classList.add("hidden");
  }
}

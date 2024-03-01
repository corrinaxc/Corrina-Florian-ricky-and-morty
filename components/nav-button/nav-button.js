import { nextButton, prevButton, fetchData } from "../../index.js";

export function nextButtonEvent() {
  nextButton.addEventListener("click", function (event) {
    fetchData("up");
  });
}

export function prevButtonEvent() {
  prevButton.addEventListener("click", function (event) {
    fetchData("down");
  });
}

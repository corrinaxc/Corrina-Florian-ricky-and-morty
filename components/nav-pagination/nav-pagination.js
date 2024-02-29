import { fetchData, cardContainer, prevButton, nextButton, pagination } from "/index.js";

// prevent buttons on page 1, 42
// get dynamic page numbers - info.pages

// function getPageCount(url) {
//     fetchData();

// }

let pageNumber = 1;

export function nextPagination() {
    nextButton.addEventListener('click', function(event) {
    cardContainer.innerHTML = '';
    if (pageNumber < 42) {
    pageNumber++;
    const url = `https://rickandmortyapi.com/api/character?page=${pageNumber}`;
    fetchData(url);
    pagination.textContent = `${pageNumber}/42`
    }
    pageNumber === 42;
    nextButton.style.backgroundColor = "white";
    nextButton.style.color = "white";
})
};

export function prevPagination() {
    prevButton.addEventListener('click', function(event) {
    cardContainer.innerHTML = '';
    if (pageNumber > 1) {
        pageNumber--;
        const url = `https://rickandmortyapi.com/api/character?page=${pageNumber}`;
        fetchData(url);
        pagination.textContent = `${pageNumber} / 42`
    }
    if (pageNumber === 1) {
    prevButton.style.backgroundColor = "white";
    prevButton.style.color = "white";
    }
})
};

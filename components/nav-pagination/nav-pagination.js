import { fetchData, cardContainer, prevButton, nextButton, pagination } from "/index.js";

// prevent buttons on page 1, 42
// get dynamic page numbers - info.pages

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
    const url = `https://rickandmortyapi.com/api/character?page=${pageNumber}`;
    fetchData(url);
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
    pageNumber === 1;
    const url = `https://rickandmortyapi.com/api/character?page=${pageNumber}`;
    fetchData(url);
})
};

import { fetchData, cardContainer, prevButton, nextButton, pagination, maxPage } from "/index.js";

let pageNumber = 1;

export function nextPagination() {
    nextButton.addEventListener('click', function(event) {
    cardContainer.innerHTML = '';
    pageNumber++;
    const url = `https://rickandmortyapi.com/api/character?page=${pageNumber}`;
    fetchData(url);
    pagination.textContent = `${pageNumber}/${maxPage}`
    prevButton.classList.remove("hidden");
    if (pageNumber === maxPage) {
    nextButton.classList.add("hidden");
    }
})
};

export function prevPagination() {
    prevButton.addEventListener('click', function(event) {
    cardContainer.innerHTML = '';
        pageNumber--;
        const url = `https://rickandmortyapi.com/api/character?page=${pageNumber}`;
        fetchData(url);
        pagination.textContent = `${pageNumber}/${maxPage}`
        nextButton.classList.remove("hidden");
    if (pageNumber === 1) {
    prevButton.classList.add("hidden");
    }
})
};
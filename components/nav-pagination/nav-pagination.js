import { fetchData, cardContainer, prevButton, nextButton, pagination, maxPage } from "/index.js";

// prevent buttons on page 1, 42
// get dynamic page numbers - info.pages

// function getPageCount(url) {
//     fetchData();

// }


// async function getMaxPages(url) {
//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//         throw new Error("Bad response");
//         }
    
//         const APIdata = await response.json();
        
//         maxPage = APIdata.info.pages;
//         console.log(maxPage);
//         return;

//     } catch (error) {
//         console.error(error);
//     }}
  
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
//    nextButton.disabled = "true";
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
 //   prevButton.disabled = "true"
    }
})
};

// function firstPage () {
//     prevButton.style.backgroundColor = "white";
//     prevButton.style.color = "white";
//     prevButton.disabled = "true";
//     }  
  

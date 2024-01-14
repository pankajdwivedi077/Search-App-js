import { setSearchFocus } from './searchBar.js';
import { getSearchTerm } from './dataFunctions.js';
import { retrieveSearchResults } from './dataFunctions.js'

document.addEventListener("readystatechange", (e) => {
    if(e.target.readyState === "complete") {
       initApp();
    }
});

const initApp = () => {
    setSearchFocus();

    // 3 listeners clear text

    const form = document.getElementById("searchBar");
    form.addEventListener("submit", submitTheSearch);
};

// procedural workflow function  || call the when we need them

const submitTheSearch = (e) => {
  e.preventDefault();
// delete the search results
processTheSearch();

setSearchFocus();

};

// procedural
const processTheSearch = async () => {
    // clear the stats line
    const searchTerm = getSearchTerm();
    if (searchTerm === "") return;
    const resultArray = await retrieveSearchResults(searchTerm);
    
}
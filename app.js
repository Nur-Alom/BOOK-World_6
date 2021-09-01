
// console.log('Hello World');

const searchValue = () => {
    const searchInput = document.getElementById('input');
    const searchValue = searchInput.value;
    // console.log(searchText);
    searchInput.value = '';

    const url = `http://openlibrary.org/search.json?q=${searchValue}`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data))
};

const displaySearchResult = (books) => {
    console.log(books)
}









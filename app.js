
// console.log('Hello World');

const searchValue = () => {
    const searchInput = document.getElementById('input');
    const searchValue = searchInput.value;
    // console.log(searchText);
    searchInput.value = '';

    const url = `https://openlibrary.org/search.json?q=${searchValue}`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.docs))
};

const displaySearchResult = (books) => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    if (books.length === 0 || books.length === '') {
        document.getElementById('error').innerText = 'No Result Found!!';
    }
    books.forEach(book => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
            <div class="card-body">
                <h3 class="text-warning">Book Name: ${book.title}</h3>
                <h5>Author Name: ${book.author_name}</h5>
                <p><strong class="text-success">First Publish Year: ${book.first_publish_year}</strong></p>
            </div>
        </div>
        `;
        searchResult.appendChild(div);
        // console.log(book);
    })
}









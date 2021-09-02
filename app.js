
//  1. Get Data and JSON.
const searchValue = () => {
    const searchInput = document.getElementById('input');
    const searchValue = searchInput.value;
    searchInput.value = '';

    // Spinner Added.
    const spinner = document.getElementById('spinner');
    spinner.classList.remove('d-none');

    // Get and Fetch Data.
    const url = `https://openlibrary.org/search.json?q=${searchValue}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.docs))
        .finally(() =>
            spinner.classList.add('d-none'));
};


//  2. Convert Data.
const displaySearchResult = (books) => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';

    // Add Condition and Error handle.
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
    })
};









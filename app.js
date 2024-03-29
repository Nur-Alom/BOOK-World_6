
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
    const numCount = document.getElementById('total-data');
    numCount.innerText = `
    Total Result Found: ${books.length}
    `;
    numCount.style.color = 'green';

    // Add Condition and Error handle.
    if (books.length === 0 || books.length === '') {
        document.getElementById('error').innerText = 'No Result Found!!';
    }

    // Display Output Result.
    books.forEach(book => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
            <div class="card-body overflow-hidden">
                <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top w-100">
                <h3 class="mt-5"><span class="text-warning">Book Name: </span>${book.title}</h3>
                <h5><span class="text-warning">Author Name: </span>${book.author_name ? book.author_name.slice(0, 2) : 'Unknown Author'}</h5>
                <p><b><span class="text-warning">First Publish Year: </span></b>${book.first_publish_year ? book.first_publish_year : 'Unknown'}</p>
                <p><b><span class="text-warning">Publisher:</span></b> ${book.publisher ? book.publisher : 'Unknown Publisher'}</p>
            </div>
        </div>
        `;
        searchResult.appendChild(div);
    })
};


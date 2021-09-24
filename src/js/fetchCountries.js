const BASE_URL = 'https://restcountries.com/v3/'
function fetchCountry(searchQuery) {
    return fetch(`${BASE_URL}name/${searchQuery}`)
        .then(response => response.json())
}

export default {fetchCountry}
import './sass/main.scss';
import { debounce } from 'lodash';
import countryCardTpl from './templates/country-card.hbs'
import API from './js/fetchCountries'
import getRefs from './js/get-refs'

const { cardContainer, inputCountry } = getRefs();
inputCountry.addEventListener('input', debounce(callback, 500))


function callback(e) {
    e.preventDefault();
    const searchQuery = e.target.value;
    API.fetchCountry(searchQuery).then(renderCountryCard)
        .catch(onFetchError)
        //.finally(reset())
}

function renderCountryCard(country) {
    const markup = countryCardTpl(country);
    cardContainer.innerHTML = markup;
}

function onFetchError() {
    alert('aaaaaaaa')
}
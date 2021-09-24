import './sass/main.scss';
import { debounce } from 'lodash';
import countryCardTpl from './templates/country-card.hbs'


//const debounce = require('lodash.debounce');

const inputCountry = document.getElementById('input-country')
inputCountry.addEventListener('input', debounce(callback, 500))

//const searchQuery = inputCountry    ${searchQuery}
function callback() {
    console.log(inputCountry);
}

fetch(`https://restcountries.com/v3/name/belgien`)
    .then(response => {
        return response.json();
    }).then(country => {
        const markup = countryCardTpl(country);
        console.log(markup);
    }).catch(err => {
    console.log(err);
})
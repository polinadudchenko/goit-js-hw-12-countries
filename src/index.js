import './sass/main.scss';
import { debounce } from 'lodash';
import countryCardTpl from './templates/country-card.hbs'

const refs = {
    cardContainer: document.querySelector('.js-card-container'),
    inputCountry: document.getElementById('input-country'),
}

const { cardContainer, inputCountry } = refs;

//const inputCountry = document.getElementById('input-country')
inputCountry.addEventListener('input', debounce(callback, 500))


function callback(e) {
    e.preventDefault();
    const searchQuery = e.target.value;
    fetch(`https://restcountries.com/v3/name/${searchQuery}`)
        .then(response => {
            return response.json();
        }).then(country => {
            const markup = countryCardTpl(country);
            cardContainer.innerHTML = markup;
        }).catch(err => {
            console.log(err);
        })
}
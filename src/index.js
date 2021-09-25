import './sass/main.scss';
import { debounce } from 'lodash';
import countryCardTpl from './templates/country-card.hbs'
import countryListTpl from './templates/country-list.hbs'
import API from './js/fetchCountries'
import getRefs from './js/get-refs'
import {error, alert, defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
defaultModules.set(PNotifyMobile, {});

const { cardContainer, inputCountry } = getRefs();
inputCountry.addEventListener('input', debounce(callback, 500))


function callback(e) {
    e.preventDefault();
    const searchQuery = e.target.value.trim();
    API.fetchCountry(searchQuery).then(renderCountryCard).catch(onFetchError).finally(clearInput)
}

function renderCountryCard(country) {
    let markup;
    console.log(country);
    if (country.length == 1) {
        markup = countryCardTpl(country);
        cardContainer.innerHTML = markup;
    } else if (country.length > 1 && country.length < 11) {
        markup = countryListTpl(country);
        cardContainer.innerHTML = markup;
    } else if (country.length > 10) {
        alert({ text: 'Too many matches. Please precise your request' })
    }  else {
        throw (country)
    }
}

function  onFetchError(err) {
    if (err.status === 404) {
        error({
            text: 'No matches found, please enter a new query.'
        })
    }
}

function clearInput() {
    inputCountry.value = ''
}
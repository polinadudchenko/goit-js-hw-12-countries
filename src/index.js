import './sass/main.scss';
import { debounce } from 'lodash';


//const debounce = require('lodash.debounce');

const inputCountry = document.getElementById('input-country')
inputCountry.addEventListener('input', debounce(callback, 500))


function callback() {
    console.log(inputCountry);
}
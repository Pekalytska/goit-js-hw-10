import '../css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import refs from './getRef';
import API from './fetchCountries';
import countryCardId from '../templates/country-card.hbs';

const DEBOUNCE_DELAY = 300;

refs.input.addEventListener('input', debounce(onInputEnter, DEBOUNCE_DELAY));

function onInputEnter(e) {
    const inputValue = e.target.value.trim();
    console.dir(e)

    //API.fetchCountries(inputValue)
    //    .then(renderCountryCard)
    //    .catch(() => Notify.failure("Oops, there is no country with that name"))
    //    .finally(() => inputValue === '');
}

function renderCountryCard(country) {

    console.log(country)
//        //    console.log(country);
//        //const markup = countryCardId(country);
//        //console.log(markup)
//        //refs.card.innerHTML = countryCardId(country);
//    const markup = country.map(item => {
//           return `<div class="card">
//    <div class="card-top">
//        <img src="${flags.svg}" alt="${name.official}">
//        <h2> ${name.official}</h2>
//    </div>
//    <div class="card body">
//        <p><span>Capital:</span>${capital}</p>
//        <p><span>Population:</span>${population}</p>
//        <p><span>Languages:</span>${languages}</p>
//    </div>
//</div>`
    //}
    //)
}

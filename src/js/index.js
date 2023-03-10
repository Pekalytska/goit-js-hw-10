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

  if (inputValue) {
    API.fetchCountries(inputValue)
      .then(renderCountryCard)
      .catch(() => {
        Notify.failure('Oops, there is no country with that name');
        refs.card_list.innerHTML = '';
        refs.card_information.innerHTML = '';
        return;
      });
  } else {
    refs.card_list.innerHTML = '';
    refs.card_information.innerHTML = '';
  }
}

function renderCountryCard(country) {
  if (country.length > 10) {
    Notify.info('Too many matches found. Please enter a more specific name.');
    return;
  }

  if (country.length < 10 && country.length > 1) {
    const markup = country
      .map(({ name, flags }) => {
        return `<li class="card_item">
                    <img class ="card_img" src="${flags.svg}" alt="${name.official}">
                    <h2 class ="card_title"> ${name.official}</h2>
                </li>`;
      })
      .join('');
    //const markup = countryCardId(country);
    refs.card_list.innerHTML = markup;
    refs.card_information.innerHTML = '';
    return markup;
  }

  const markup = country
    .map(({ name, flags, capital, population, languages }) => {
      languages = Object.values(languages).join(', ');
      return `<div class="card_top">
                <img class ="card_img" src="${flags.svg}" alt="${name.official}">
                <h2 class ="card_title"> ${name.official}</h2>
            </div>
            <div class="card_body">
                <p><span>Capital: </span>${capital}</p>
                <p><span>Population: </span>${population}</p>
                <p><span>Languages: </span>${languages}</p>
            </div>`;
    })
    .join('');
  refs.card_information.innerHTML = markup;
  refs.card_list.innerHTML = '';
  return markup;
}

import refs from './getRef';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import countryCardListId from '../templates/country-card_list.hbs';
import countryCardInfoId from '../templates/country-card_info.hbs';

function renderCountryCard(countries) {
  if (countries.length > 10) {
    Notify.info('Too many matches found. Please enter a more specific name.');
    return;
  }

  if (countries.length < 10 && countries.length > 1) {
    //const markup = countries
    //  .map(({ name, flags }) => {
    //    return `<li class="card-item">
    //                <img class ="card-img" src="${flags.svg}" alt="${name.official}">
    //                <h2 class ="card-title"> ${name.official}</h2>
    //            </li>`;
    //  })
    //  .join('');

    const markup = countries
      .map(item => {
        return countryCardListId(item);
      })
      .join('');
    refs.card_information.innerHTML = markup;
    refs.card_list.innerHTML = '';
    return markup;
  }

  //  const markup = countries
  //    .map(({ name, flags, capital, population, languages }) => {
  //      languages = Object.values(languages).join(', ');
  //      return `<div class="card-top">
  //                  <img class ="card-img" src="${flags.svg}" alt="${name.official}">
  //                  <h2 class ="card-title"> ${name.official}</h2>
  //              </div>
  //              <div class="card-body">
  //                  <p><span>Capital: </span>${capital}</p>
  //                  <p><span>Population: </span>${population}</p>
  //                  <p><span>Languages: </span>${languages}</p>
  //              </div>`;
  //    })
  //    .join('');

  const markup = countries
    .map(item => {
      item.languages = Object.values(item.languages).join(', ');
      return countryCardInfoId(item);
    })
    .join('');
  refs.card_information.innerHTML = markup;
  refs.card_list.innerHTML = '';
  return markup;
}

export default { renderCountryCard };

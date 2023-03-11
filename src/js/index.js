import '../css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import refs from './getRef';
import API from './fetchCountries';
import CARD from './renderCountryCard';

const DEBOUNCE_DELAY = 300;

refs.input.addEventListener('input', debounce(onInputEnter, DEBOUNCE_DELAY));

function onInputEnter(e) {
  const inputValue = e.target.value.trim();

  if (inputValue) {
    API.fetchCountries(inputValue)
      .then(CARD.renderCountryCard)
      .catch(() => {
        Notify.failure('Oops, there is no country with that name');
        refs.card_list.innerHTML = '';
        refs.card_information.innerHTML = '';
        return;
      });
  }
  refs.card_list.innerHTML = '';
  refs.card_information.innerHTML = '';
}

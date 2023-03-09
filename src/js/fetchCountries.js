//import { Notify } from 'notiflix/build/notiflix-notify-aio';

const BASE_URL = 'https://restcountries.com/v3.1';

function fetchCountries(country) {
    return fetch(`${BASE_URL}/name/${country}/?fields=name.official,capital,population,flags.svg,languages`)
        .then(response => {
                            console.log('response',response)
            if (!response.ok) {

                Notify.failure("Oops, there is no country with that name");
                //throw new Error(response.statusText);
            }
            return response.json();
        })
}

export default { fetchCountries };
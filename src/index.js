import Notiflix from 'notiflix';
import './css/styles.css';
import API from '../src/js/fetchCountries';
import { debounce } from 'throttle-debounce';

Notiflix.Notify.init({
  useIcon: false,
});

const DEBOUNCE_DELAY = 300;

const refs = {
  input: document.querySelector('#search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};

refs.input.addEventListener('input', debounce(DEBOUNCE_DELAY, true, onSearchCountry));



function onSearchCountry(evt) {
  const a = evt.currentTarget.value.trim();
console.log(a)
  API.fetchCountry(a)
    .then(renderCountry)
    .catch(error => {
      Notiflix.Notify.failure(`❌ Oops, there is no country with that name`);
    });
}

function renderCountry(country) {
  refs.countryList.textContent = '';
  refs.countryInfo.textContent = '';

  if (country.length > 10) {
    Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
  } else if (country.length >= 2 && country.length <= 10) {
    for (let i = 0; i < country.length; i += 1) {
      refs.countryList.insertAdjacentHTML(
        'beforeend',
        `<li><img  class="img_js" 
            src="${country[i].flags.svg}" alt="${country[i].name.common}"><h2>${country[i].name.common}</h2></li>`,
      );
    }
  } else if (country.length === 1) {
    refs.countryList.insertAdjacentHTML(
      'beforeend',
      `<li><img  class="img_js" 
            src="${country[0].flags.svg}" alt="${country[0].name.common}"><h1>${country[0].name.common}</h1></li>`,
    );

    refs.countryInfo.insertAdjacentHTML(
      'beforeend',
      `<h2 class="country_js">Capital: <span class="country_info">${country[0].capital}</span></h2>`,
    );
    refs.countryInfo.insertAdjacentHTML(
      'beforeend',
      `<h2 class="country_js">Population: <span class="country_info">${
        (Number(country[0].population) / 1000000).toFixed(3)
      } million</span></h2>`,
    );
    refs.countryInfo.insertAdjacentHTML(
      'beforeend',
      `<h2 class="country_js">Languages: <span class="country_info">${Object.values(
        country[0].languages,
      )}</span></h2>`,
    );
  } else {
    Notiflix.Notify.failure(`❌ Oops, there is no country with that name`);
  }
}

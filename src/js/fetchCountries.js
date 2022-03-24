function fetchCountry (countryNameInput){
    return fetch (`https://restcountries.com/v3.1/name/${countryNameInput}?fields=name,capital,population,flags,languages`).then(response => response.json())
    }

    export default {fetchCountry}
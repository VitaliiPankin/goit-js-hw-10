function fetchCountry(countryNameInput) {
  return fetch(
    `https://restcountries.com/v2/name/${countryNameInput}`,
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
export default { fetchCountry };


// ?fields=name,capital,population,flags,languages
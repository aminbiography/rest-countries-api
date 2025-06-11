<<<<<<< HEAD
const loadCountries = () => {
  fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => {
      console.log('Countries loaded:', data);
      displayCountries(data);
    })
    .catch(err => console.error('Error loading countries:', err));
};

const displayCountries = countries => {
  const countriesHTML = countries.map(country => getCountryHTML(country));
  const container = document.getElementById('countries');
  container.innerHTML = countriesHTML.join('');
};

const getCountryHTML = country => {
  return `
    <div class="country">
      <h2>${country.name?.common || 'No Name'}</h2>
      <img src="${country.flags?.png || ''}" alt="Flag of ${country.name?.common}" />
      <h3>Capital: ${country.capital ? country.capital[0] : 'N/A'}</h3>
      <h4>Population: ${country.population?.toLocaleString() || 'Unknown'}</h4>
      <h4>Region: ${country.region || 'Unknown'}</h4>
    </div>
  `;
};

loadCountries();
=======
const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data));
}

const displayCountries = countries =>{
    // console.log(countries);
    const countriesHTML = countries.map(country => getCountryHTML(country));
    // console.log(countriesHTML);
    const container = document.getElementById('countries');
   container.innerHTML = countriesHTML.join(' ');
    }

    const getCountryHTML = country => {
        return`
        <div class="country">
        <h2>${country.name.common}</h2>
        <img src="${country.flags.png}">
        <h3>Capital: ${country.capital}</h3>
        <h4>Population: ${country.population}</h4>
        <h4>Region: ${country.region}</h4>
        </div>`
    }


loadCountries();
>>>>>>> 8d6b9ce74683da76f4abcc8fff4d8b6d9db19530

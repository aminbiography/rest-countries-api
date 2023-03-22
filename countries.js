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
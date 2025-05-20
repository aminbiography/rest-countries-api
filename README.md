Live URL:

https://aminbiography.github.io/rest-countries-api/


# 🌍 Rest Countries API

A simple web app that displays information about countries using the [REST Countries API](https://restcountries.com/).

## 🚀 Features

- Fetches data from a public API
- Displays:
  - Country name
  - Flag image
  - Capital
  - Population
  - Region
- Styled layout with CSS Grid
- Fully responsive front-end

![Screenshot](screenshot.png) <!-- Replace this with the path to your actual screenshot -->


## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- REST Countries API

## 📂 Project Structure

rest-countries-api/
├── index.html # Main HTML file
├── style.css # CSS styling
├── countries.js # JavaScript logic
└── README.md # Project documentation


## 📜 How It Works

1. `countries.js` fetches all countries from the API on page load.
2. Each country is displayed in a styled card layout.
3. Country card includes:
   - Name
   - Flag
   - Capital
   - Population
   - Region
4. Cards are shown in a 3-column grid.

## 🔧 Setup Instructions

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/rest-countries-api.git
   ```

2. Navigate to the project directory: ```cd rest-countries-api```

3. Open index.html in your browser.
### No server setup or build tools required. This is a pure front-end project.

🌐 API Reference

Endpoint: ```https://restcountries.com/v3.1/all```

Used Data Fields:

- name.common

- flags.png

- capital

- population

- region

🎨 CSS Overview

```
.heading {
  text-align: center;
  font-size: xx-large;
}

.countries {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
}

.country {
  border: 30px solid #9fb9e2;
  background-color: chartreuse;
  border-radius: 20px;
  padding: 20px;
  text-align: center;
}

.country img {
  width: 300px;
}
```

💻 HTML Overview

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Rest Countries</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <h2 class="heading">Rest Countries</h2>
  <div id="countries" class="countries"></div>
  <script src="countries.js"></script>
</body>
</html>
```

⚙️ JavaScript Overview

```
const loadCountries = () => {
  fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data));
};

const displayCountries = countries => {
  const countriesHTML = countries.map(country => getCountryHTML(country));
  const container = document.getElementById('countries');
  container.innerHTML = countriesHTML.join(' ');
};

const getCountryHTML = country => {
  return `
    <div class="country">
      <h2>${country.name.common}</h2>
      <img src="${country.flags.png}" />
      <h3>Capital: ${country.capital}</h3>
      <h4>Population: ${country.population}</h4>
      <h4>Region: ${country.region}</h4>
    </div>
  `;
};

loadCountries();
```

📄 License
This project is licensed under the MIT License.

🙏 Acknowledgements
REST Countries API
```

You can copy and paste this directly into your `README.md` file. Let me know if you want a deployed version or extra enhancements.

```




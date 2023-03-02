export function firstWay(country) {
  const { name, flags, capital, population, languages } = country;
  const langs = Object.values(languages).join(', ');

  const markup = `<div>
  
  <div class='container'>  
  <img href=${flags.svg} alt='flag image'/> 
  <p class='name'>${name.official}</p>
  </div>

  <p class='capital'>Capital: ${capital}</p>
  <p class='population'>Population: ${population}</p>
  <p class='population'>Languages: ${langs}</p>
  
  </div>`;

  return markup;
}

export function secondWay(countryAr) {
  return countryAr;
}

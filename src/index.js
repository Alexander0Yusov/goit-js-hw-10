import './css/styles.css';
import apiService from './js/apiService';
import { firstWay, secondWay } from './js/markup';
//import singleCountry from './templates/singleCountry.hbs';

var img = document.createElementNS('http://www.w3.org/2000/svg', 'image');

img.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', 'move.png');

const rfs = {
  inputEl: document.querySelector('#search-box'),
  singleCountryEl: document.querySelector('.country-info'),
};

rfs.inputEl.addEventListener('input', onInput);

const DEBOUNCE_DELAY = 300;
const api = new apiService();

function onInput(e) {
  e.preventDefault;

  const inputValue = e.target.value;

  api
    .getData(inputValue)
    .then(ar => {
      if (ar.length === 1) {
        rfs.singleCountryEl.innerHTML = firstWay(ar[0]);
        console.log(firstWay(ar[0]));
      } else {
        secondWay(ar);
      }

      return ar;
    })
    .then(data => console.log(data))
    .catch(e => e.message);
}

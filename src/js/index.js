import * as catAPI from './cat-api';
import SlimSelect from 'slim-select';
import 'izitoast/dist/css/iziToast.min.css';
import iziToast from 'izitoast';

const elements = {
  select: document.querySelector('.breed-select'),
  catComtainer: document.querySelector('.cat-info'),
  loader: document.querySelector('.loader'),
};

let all_breeds;

catAPI
  .fetchBreeds()
  .then(data => {
    all_breeds = data;
    elements.select.innerHTML = data
      .map(({ id, name }) => `<option value="${id}">${name}</option>`)
      .join('');
    new SlimSelect({ select: elements.select });
    elements.select.classList.toggle('hiden-elem', false);
    elements.loader.classList.toggle('hiden-elem', true);
  })
  .catch(() => showErrorMassage());

elements.select.addEventListener('change', handlerSelectBreed);

function handlerSelectBreed(ev) {
  elements.catComtainer.classList.toggle('hiden-elem', true);
  elements.loader.classList.toggle('hiden-elem', false);

  catAPI
    .fetchCatByBreed(ev.target.value)
    .then(([{ url: imageURL }]) => {
      elements.catComtainer.innerHTML = createSelectedCatMarkup(
        imageURL,
        all_breeds.find(({ id }) => id === ev.target.value)
      );

      document
        .querySelector('.image')
        .addEventListener('load', handlerLoadImage);
    })
    .catch(() => {
      showErrorMassage();
      elements.loader.classList.toggle('hiden-elem', true);
    });
}

function handlerLoadImage() {
  elements.catComtainer.classList.toggle('hiden-elem', false);
  elements.loader.classList.toggle('hiden-elem', true);
}

function createSelectedCatMarkup(
  imgURL,
  {
    name,
    description,
    adaptability,
    affection_level,
    child_friendly,
    dog_friendly,
    energy_level,
    intelligence,
    temperament,
  }
) {
  return `
       <img class="image" src="${imgURL}" alt="${name}" />
       <div> 
       <h2 class="breed">${name}</h2>
        <p class="description">${description}</p>
        <p class="temperament"><span class="temperament-acent">Temperament: </span>${temperament}</p>
        <ul class="trait-list">
          <li class="trait-list-item"><span class="trait-name">Adaptabylity:</span>${generateStrOfStars(
            adaptability
          )}</li>
           <li class="trait-list-item"><span class="trait-name">Affectionate:</span>${generateStrOfStars(
             affection_level
           )}</li>
          <li class="trait-list-item"><span class="trait-name">Child friendly:</span>${generateStrOfStars(
            child_friendly
          )}</li>          
          <li class="trait-list-item"><span class="trait-name">Dog friendly:</span>${generateStrOfStars(
            dog_friendly
          )}</li>
          <li class="trait-list-item"><span class="trait-name">Energy level:</span>${generateStrOfStars(
            energy_level
          )}</li>
        
          <li class="trait-list-item"><span class="trait-name">Inteligence:</span>${generateStrOfStars(
            intelligence
          )}</li>

        </ul>
        </div>
    `;
}

function generateStrOfStars(num) {
  return Array.from({ length: +num }, x => '⭐').join(' ');
}

function showErrorMassage() {
  iziToast.error({
    title: 'Oops!',
    message: 'Something went wrong! Try reloading the page!',
    position: 'center',
  });
}

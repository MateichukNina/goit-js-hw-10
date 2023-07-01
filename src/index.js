import axios from "axios";
import Notiflix from "notiflix";
import {fetchBreeds, 
  fetchCatByBreed} from './cat-api.js';

axios.defaults.headers.common["x-api-key"] = "live_6Gow9TW6tmIclTOC2a7y63FlAyttaeTEXx4qIzIlhoUl290sWeddEKD9wHxxYCSn";

const breedSelect = document.querySelector('.breed-select');
const catImage = document.querySelector('.cat-image');
const catContainer = document.querySelector(".cat-info");
const error = document.querySelector('.error');
const loader = document.querySelector('.loader');



 function hideLoader() {
   loader.style.display = 'none';
   
 }

 function showError() {
   error.style.display = 'block';
}

 function hideError() {
   error.style.display = 'none';
 }

 function showLoader() {
  loader.style.display = 'block';
}
 function showCatInfo() {
   catContainer.style.display = 'block';
   catImage.style.display = 'block';
 }

 function hideCatInfo() {
   catContainer.style.display = 'none';
   catImage.style.display = 'none';
 }



fetchBreeds()
  .then(breeds => {
   
    breeds.forEach(breed => {
      const option = document.createElement('option');
      option.value = breed.id;
      option.textContent = breed.name;
      breedSelect.appendChild(option);
    });
  })
  .catch(error => {
   
    Notiflix.Notify.failure(error);
  });

breedSelect.addEventListener('change', () => {
  const breedId = breedSelect.value;

 showLoader();
   hideError();
   hideCatInfo();

   fetchCatByBreed(breedId)
   .then(catData => {
     hideLoader();
     showCatInfo();
 
     const imageUrl = catData[0].url;
     const catDescr = catData[0].breeds[0].description;
     const catTemp = catData[0].breeds[0].temperament;
 
     const markUp = `
       <img class="img-cat" src="${imageUrl}" width="400" height="400" loading="lazy">
       <div class="info">
         <p class="cat-info"><b>Description: </b>${catDescr}</p>
         <p class="cat-info"><b>Temperament: </b>${catTemp}</p>
       </div>
     `;
 
     catContainer.innerHTML = markUp;
   })
   .catch(error => {
     hideLoader();
     showError();
     Notiflix.Notify.failure(error);
   });
  });
    // спроба задеплоїти ще раз
import axios from "axios";
import Notiflix from "notiflix";

export function fetchBreeds() {
    return axios.get("https://api.thecatapi.com/v1/breeds")
      .then(response => response.data)
      .catch(error => {
        Notiflix.Notify.failure(`Failed to fetch breeds: ${error}`);
      });
  }

  export function fetchCatByBreed(breedId) {
    return axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
      .then(response => response.data)
      .catch(error => {
        Notiflix.Notify.failure(`Failed to fetch cat by breed: ${error}`);
      });
  }

  
export function showLoader() {
    loader.style.display = 'block';
  }
 
 export function hideLoader() {
    loader.style.display = 'none';
    
  }
 
 export function showError() {
    error.style.display = 'block';
 }
 
 export function hideError() {
    error.style.display = 'none';
  }
 
 export function showCatInfo() {
    catContainer.style.display = 'block';
    catImage.style.display = 'block';
  }
 
 export function hideCatInfo() {
    catContainer.style.display = 'none';
    catImage.style.display = 'none';
  }
 







   
  
  
  
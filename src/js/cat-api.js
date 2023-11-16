import axios from 'axios';

const BASE_URL = 'https://api.thecatapi.com/v1';

axios.defaults.headers.common['x-api-key'] =
  'live_eExR10hETQ1PGkLSXvefxxX5tvuslw5lXSJg9XEiZJSO8ILtQPGLSp0SInZo4dhh';

async function fetchBreeds() {
  return await fetch(`${BASE_URL}/breeds`).then(res => {
    if (!res.ok) {
      throw new Error('Bad request');
    }
    return res.json();
  });
}

async function fetchCatByBreed(breedId) {
  const params = new URLSearchParams({
    breed_ids: breedId,
  });

  return await fetch(`${BASE_URL}/images/search?${params}`).then(res => {
    if (!res.ok) {
      throw new Error('Bad request');
    }
    return res.json();
  });
}

export { fetchBreeds, fetchCatByBreed };

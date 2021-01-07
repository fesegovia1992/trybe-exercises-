const API_URL = 'https://dog.ceo/api/breeds/image/random';

const fetchJoke = () => {
  return fetch(API_URL, { headers: { Accept: 'application/json' }})
    .then(response => response.json())
    .then(data);
    
};
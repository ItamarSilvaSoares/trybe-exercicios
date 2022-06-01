// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';
const joker = document.querySelector('#jokeContainer');
const fetchJoke = () => {
    const myObject = {
      method: 'GET',
      headers: { 'Accept': 'application/json' }
    };
  
    fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => joker.innerHTML = data.joke);
  };
window.onload = () => fetchJoke();
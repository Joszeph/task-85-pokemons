import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

const url = 'https://pokeapi.co/api/v2/pokemon?limit=10'

  fetch(url)
  .then(response => response.json())
  .then(data => {
    const ul = document.querySelector('ul');
    data.results.forEach(pokemon => {
        const li = document.createElement('li');
        li.innerHTML = pokemon.name;
        ul.appendChild(li);
    });
  })
  .catch(error => console.error(error));



});

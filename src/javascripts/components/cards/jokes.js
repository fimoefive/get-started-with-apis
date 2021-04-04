import { makeJoke, renderJoke, renderPunchline } from '../../helpers/data/jokesData';

const showJoke = () => {
  document.querySelector('#form-container').innerHTML = `
    <h1 id="joke">${renderJoke()}</h1>`;
  document.querySelector('#button-container').innerHTML = '';
  document.querySelector('#button-container').innerHTML = '<button id="get-punchline" class="btn">GET PUNCHLINE</button>';
};

const jokePunchline = () => {
  document.querySelector('#form-container').innerHTML = `
  <h1 id="joke">${renderPunchline()}</h1>`;
  document.querySelector('#button-container').innerHTML = '';
  document.querySelector('#button-container').innerHTML = '<button id="new-joke" class="btn">NEW JOKE</button>';
};

const emptyJokes = () => {
  makeJoke();
  document.querySelector('#display-area').innerHTML = '<h1>No Jokes</h1>';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#button-container').innerHTML = '';
  document.querySelector('#button-container').innerHTML = '<button id="get-joke" class="btn">GET A JOKE</button>';
};

export { showJoke, jokePunchline, emptyJokes };

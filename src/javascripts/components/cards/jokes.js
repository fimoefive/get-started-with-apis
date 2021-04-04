import { showSetup } from './getJoke';

const showJoke = () => {
  document.querySelector('#content-container').innerHTML = `
    <h1 id="setup-joke">${showSetup()}</h1>`;
  document.querySelector('#button-container').innerHTML = '';
  document.querySelector('#button-container').innerHTML = '<button id="get-punchline" class="btn">GET PUNCHLINE</button>';
};

const emptyJokes = () => {
  document.querySelector('#content-container').innerHTML = `
    <h1 id="setup-joke">${showSetup()}</h1>`;

  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#display-area').innerHTML = '<h1>No Jokes</h1>';
};
export { showJoke, emptyJokes };

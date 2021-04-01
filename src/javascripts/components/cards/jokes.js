import { showSetup } from './getJoke';

const printSetup = () => {
  document.querySelector('#content-container').innerHTML = `
    <h1 id="setup-joke">${showSetup()}</h1>`;
  document.querySelector('#button-container').innerHTML = '';
  document.querySelector('#button-container').innerHTML = '<button id="get-punchline" class="btn">GET PUNCHLINE</button>';
};

export default printSetup;

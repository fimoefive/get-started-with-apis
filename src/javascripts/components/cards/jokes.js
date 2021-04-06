import { makeJoke, renderJoke, renderPunchline } from '../../helpers/data/jokesData';

export const showJoke = (jokeObj) => {
  document.querySelector('#main-container').innerHTML = `
    <h1 id="joke">${renderJoke()}</h1>`;
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#form-container').innerHTML = `<div class="container" id="jokeContainer">
    < div class="title" >
      <img src="" class="img-fluid" alt="">
    </div>
    <div class="jokeDisplay">${jokeObj.setup}</div>
    <div class="punchLine">${jokeObj.punchline}</div>
    <button type="button" class="btn btn-dark jokeButton" id="getPunchLine">GET PUNCHLINE</button>
    <button type="button" class="btn btn-dark jokeButton" id="hiddenGetNewJoke">GET A NEW JOKE</button>
  </div>`;
};

export const jokePunchline = () => {
  document.querySelector('#form-container').innerHTML = `
  <h1 id="joke">${renderPunchline()}</h1>`;
  document.querySelector('#button-container').innerHTML = '';
  document.querySelector('#button-container').innerHTML = '<button id="new-joke" class="btn">NEW JOKE</button>';
};

export const emptyJokes = () => {
  makeJoke();
  document.querySelector('#display-area').innerHTML = '<h1>No Jokes</h1>';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#button-container').innerHTML = '';
  document.querySelector('#button-container').innerHTML = '<button id="get-joke" class="btn">GET A JOKE</button>';
};

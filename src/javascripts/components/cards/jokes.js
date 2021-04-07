export const showJoke = (jokeObj) => {
  // document.querySelector('#main-container').innerHTML = `
  //   <h1 id="joke">${renderJoke()}</h1>`;
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#form-container').innerHTML = `<div class="container" id="jokeContainer">
    <div class="card-body">
    <img src="" class="img-fluid" alt="">
    
    <div class="jokeDisplay">${jokeObj.setup}</div>
    <div class="punchLine"></div>
    <button type="button" class="btn btn-dark jokeButton" id="get-punchLine">GET PUNCHLINE</button>
    <button type="button" class="btn btn-dark jokeButton" id="new-joke">GET A NEW JOKE</button>
    </div>
  </div>`;
};

export const jokePunchline = (jokeObj) => {
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#form-container').innerHTML = `
< div class="container" id = "jokeContainer" >
    <div class="card-body">
    <img src="" class="img-fluid" alt="">
    </div>
      <div class="jokeDisplay"></div>
      <div class="punchLine">${jokeObj.punchline}</div>
      <button type="button" class="btn btn-dark jokeButton" id="new-joke">GET A NEW JOKE</button>
      </div>
    </div>`;
};

export const emptyJokes = () => {
  document.querySelector('#main-container').innerHTML = '<h1>No Jokes</h1>';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#form-container').innerHTML = `<div class="container" id="jokeContainer">
    <div class="card-body">
      <img src="" class="img-fluid" alt="">
    </div>
    <div class="jokeDisplay"></div>
    <div class="punchLine"></div>
    <button type="button" class="btn btn-dark jokeButton" id="new-joke">GET JOKE</button>
    </div>
  </div>`;
};

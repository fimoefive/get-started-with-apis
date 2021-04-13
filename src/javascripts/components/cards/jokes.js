export const showJoke = (jokeObj) => {
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#form-container').innerHTML = `<div class="container" id="jokeContainer">
    <div class="card-body">
    <img src="" class="img-fluid" alt="">
    
    <div class="jokeDisplay">${jokeObj.setup}</div>
    <div id="joke-punch" class="punchLine">${jokeObj.punchline}</div>
    <button type="button" class="btn btn-dark jokeButton" id="get-punchLine">GET PUNCHLINE</button>
    <button type="button" class="btn btn-dark jokeButton" id="joke-form-btn">GET NEW JOKE</button>
    </div>
  </div>`;
};

export const jokePunchline = (jokeObj) => {
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#form-container').innerHTML = `
<div class="container" id = "jokeContainer">
    <div class="card-body">
    <img src="" class="img-fluid" alt="">
      <div class="jokeDisplay">${jokeObj.setup}</div>
      <div class="punchLine">${jokeObj.punchline}</div>
      <button type="button" class="btn btn-dark jokeButton" id="joke-form-btn">GET NEW JOKE</button>
      </div>
    </div>`;
};

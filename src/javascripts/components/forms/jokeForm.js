const jokeForm = () => {
  document.querySelector('#form-container').innerHTML = `
  <div class="container" id="jokeContainer">
    <div class="title">
      <img src="" class="img-fluid" alt="">
    </div>
    <div class="jokeDisplay"></div>
    <div class="punchLine"></div>
    <button type="button" class="btn btn-dark jokeButton" id="jokeGenerator">GET A JOKE</button>
  </div>`;
};

export default jokeForm;

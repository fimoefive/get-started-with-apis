const jokeForm = () => {
  document.querySelector('#form-container').innerHTML = `
  <div class="container" id="jokeContainer">
    <div class="card-image">
      <img src="" class="img-fluid" alt="">
    </div>
    <h3>THE JOKE GENERATOR</h3>
    <div class="jokeDisplay"></div>
    <div class="punchLine"></div>
    <button type="button" class="btn btn-dark jokeButton" id="joke-form-btn">GET JOKE</button>
  </div>`;
};

export default jokeForm;

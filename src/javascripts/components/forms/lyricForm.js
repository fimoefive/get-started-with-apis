import { lyrics } from "../cards/lyrics";

const lyricForm = () => {
  document.querySelector('#form-container').innerHTML = `
    <form>
  <div class="form-group">
    <label for="artist" class="form-label" id="artist-label">Artist</label>
    <input type="text" class="form-control" id="artist" aria-describedby="artist" placeholder="damien jurado">
    <small id="insult" class="form-text">We'll only judge you a little bit.</small>
  </div>
  <div class="form-group">
    <label for="title" class="form-label">Title</label>
    <input type="text" class="form-control" id="title" placeholder="sheets">
  </div>
  <button type="submit" id="search-songs" class="btn btn-grad">Submit</button>
</form>`;
};

export default lyricForm;

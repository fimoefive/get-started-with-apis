const lyricForm = () => {
  document.querySelector('#form-container').innerHTML = `
    <form>
  <div class="form-group">
    <label for="artist" class="form-label" id="artist-label">Artist</label>
    <input type="text" class="form-control" id="artist" aria-describedby="artist" placeholder="Artist Name">
  </div>
  <div class="form-group">
    <label for="title" class="form-label">Title</label>
    <input type="text" class="form-control" id="title" placeholder="Song Title">
  </div>
  <button type="submit" id="search-song" class=class="btn btn-primary">Search Song</button>
</form>`;
};

export default lyricForm;

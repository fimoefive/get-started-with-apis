const songInfo = (artist, title) => {
  document.querySelector('#form-container').innerHTML = `<h2>${title}</h2>
  <h3>By: ${artist}</h3>`;
};

const lyrics = (response) => {
  document.querySelector('#content-container').innerHTML = `<div>${response}`;
};

const emptyLyric = () => {
  document.querySelector('#form-container').innerHTML = '<h1>Enter Artist and Song Title</h1>';
};

export { songInfo, lyrics, emptyLyric };

import axios from 'axios';
import { songInfo, lyrics, emptyLyric } from '../components/cards/lyrics';

const dbUrl = 'https://api.lyrics.ovh/v1/';

const getLyrics = (artist, title) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}${artist}${title}`)
    .then((response) => resolve((response.data)))
    .catch((error) => reject(error));
});

const songSearch = () => {
  const artist = document.querySelector('#artist').value;
  const title = document.querySelector('#title').value;
  getLyrics(artist, title).then((response) => lyrics(response));
  if (artist && title) {
    songInfo(artist, title);
  } else {
    emptyLyric();
  }
};

export { getLyrics, songSearch };

import signOut from '../helpers/auth/signOut';
import getJokes from '../helpers/data/jokesData';
import { emptyJokes, showJoke } from '../components/cards/jokes';
import getLyrics from '../helpers/data/lyricsData';
import { emptyLyric, songInfo } from '../components/cards/lyrics';

// Navigation Events
const navigationEvents = () => {
  // ALL JOKES
  document.querySelector('#jokes-link').addEventListener('click', () => {
    // Get Jokes on click
    getJokes().then((jokesArray) => {
      if (jokesArray.length) {
        showJoke(jokesArray);
      } else {
        emptyJokes();
      }
    });
  });

  // click event to show lyrics
  document.querySelector('#lyrics-link').addEventListener('click', () => {
    getLyrics().then((lyricArray) => {
      if (lyricArray.length) {
        songInfo(lyricArray);
      } else {
        emptyLyric();
      }
    });
  });

  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);
};

export default navigationEvents;

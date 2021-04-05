import { showJoke, jokePunchline, emptyJokes } from '../components/cards/jokes';
import { songSearch } from '../helpers/data/lyricsData';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    // CLICK EVENT FOR SHOWING A JOKE
    if (e.target.id.includes('get-joke')) {
      showJoke();
    }
    // CLICK EVENT FOR SHOWING PUNCHLINE
    if (e.target.id.includes('get-punchline')) {
      jokePunchline();
    }
    // CLICK EVENT FOR SHOWING NEW JOKE
    if (e.target.id.includes('new-joke')) {
      emptyJokes();
    }
    // CLICK EVENT FOR SHOWING LYRICS
    if (e.target.id.includes('new-joke')) {
      emptyJokes();
    }
    // CLICK EVENT FOR SONG SEARCH
    if (e.target.id.includes('search-song')) {
      e.preventDefault();
      songSearch();
    }
  });
};

export default domEvents;

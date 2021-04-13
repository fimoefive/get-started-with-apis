import getJokes from '../helpers/data/jokesData';
import { showJoke } from '../components/cards/jokes';
import { songSearch } from '../helpers/data/lyricsData';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    // CLICK EVENT FOR SHOWING A JOKE
    if (e.target.id.includes('joke-form-btn')) {
      getJokes().then((jokeObj) => showJoke(jokeObj));
    }
    // CLICK EVENT FOR SHOWING PUNCHLINE
    if (e.target.id.includes('get-punchLine')) {
      // jokePunchline();
      // document.querySelector('.punchLine').style.display = 'none';
      document.querySelector('#get-punchLine').style.display = 'nonw';
    }
    // CLICK EVENT FOR SONG SEARCH
    if (e.target.id.includes('search-song')) {
      e.preventDefault();
      songSearch();
    }
  });
};

export default domEvents;

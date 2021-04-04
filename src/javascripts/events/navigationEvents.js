import signOut from '../helpers/auth/signOut';
import getJokes from '../helpers/data/jokesData';
import { emptyJokes, showJoke } from '../components/cards/jokes';

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

  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);
};

export default navigationEvents;

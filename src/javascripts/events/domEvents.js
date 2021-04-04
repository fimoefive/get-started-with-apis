import { showJoke } from '../components/cards/jokes';
import { renderJoke, renderPunchline } from '../helpers/data/jokesData';
const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    // CLICK EVENT FOR SHOWING A JOKE
    if (e.target.id.includes('get-Joke')) {
      showJoke();
    }

    if (e.target.id.includes('get-punchline')) {
      renderPunchline();
    }

    if (e.target.id.includes('new-Joke')) {

    }
  });
};

export default domEvents;

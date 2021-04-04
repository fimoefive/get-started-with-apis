// import logoutButton from '../components/buttons/loginButton';
import domBuilder from '../components/domBuilder';
import navigationEvents from '../events/navigationEvents';
import navBar from '../components/navBar';
import domEvents from '../events/domEvents';
import getJokes from '../helpers/data/jokesData';
import { showJoke, emptyJokes } from '../components/cards/jokes';

const startApp = () => {
  domBuilder();
  navBar();
  domEvents();
  navigationEvents();
  // logoutButton();
  getJokes().then((jokesArray) => {
    if (jokesArray.length) {
      showJoke(jokesArray);
    } else {
      emptyJokes();
    }
  });
};

export default startApp;

// import logoutButton from '../components/buttons/loginButton';
import domBuilder from '../components/domBuilder';
import navigationEvents from '../events/navigationEvents';
import navBar from '../components/navBar';
import domEvents from '../events/domEvents';
import { showBoards, emptyBoards } from '../components/boards';
import { showPins, emptyPins } from '../components/pins';
import { getJokes } from '../helpers/data/jokesData';

const startApp = () => {
  domBuilder();
  navBar();
  domEvents();
  navigationEvents();
  // logoutButton();
  getJokes().then((jokesArray) => {
    if (boardsArray.length) {
      showBoards(jokesArray);
    } else {
      emptyBoards();
    }
  });
  // getPins().then((Array) => {
  //   if (Array.length) {
  //     showPins(Array);
  //   } else {
  //     emptyPins();
  //   }
  // });
};

export default startApp;

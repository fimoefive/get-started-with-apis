import domBuilder from '../components/domBuilder';
import navigationEvents from '../events/navigationEvents';
import navBar from '../components/navBar';
import domEvents from '../events/domEvents';

const startApp = () => {
  domBuilder();
  navBar();
  domEvents();
  navigationEvents();
};

export default startApp;

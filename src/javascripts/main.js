// USE WITH FIREBASE AUTH
// import checkLoginStatus from './helpers/router.js';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import startApp from './views/startApp';

const init = () => {
  document.querySelector('#app').innerHTML = '<h1>HELLO! You are up and running!</h1>';
  console.warn('YOU ARE UP AND RUNNING!');
  startApp();
  // USE WITH FIREBASE AUTH
  // checkLoginStatus();
};

init();

import jokeForm from '../components/forms/jokeForm';
import lyricForm from '../components/forms/lyricForm';

// Navigation Events
const navigationEvents = () => {
  // ALL JOKES
  document.querySelector('#jokes-link').addEventListener('click', () => {
    // Get Jokes on click
    jokeForm();
  });

  // click event to show lyrics
  document.querySelector('#lyrics-link').addEventListener('click', () => {
    lyricForm();
  });
};

export default navigationEvents;

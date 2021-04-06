import axios from 'axios';

const dbUrl = 'https://official-joke-api.appspot.com/random_joke';

const getJokes = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}`)
    .then((response) => {
      resolve(response.data);
    }).catch((error) => reject(error));
});

let joke = {};

const makeJoke = () => {
  getJokes().then((response) => {
    joke = response;
  });
};

const renderJoke = () => {
  const getJoke = joke.setup;
  return getJoke;
};

const renderPunchline = () => {
  const getPunchline = joke.punchline;
  return getPunchline;
};

export {
  getJokes, makeJoke,
  renderJoke, renderPunchline
};

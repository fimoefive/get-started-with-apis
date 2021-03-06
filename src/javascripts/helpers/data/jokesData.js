import axios from 'axios';

const dbUrl = 'https://official-joke-api.appspot.com/random_joke';

const getJokes = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}`)
    .then((response) => {
      resolve(response.data);
    }).catch((error) => reject(error));
});

export default getJokes;

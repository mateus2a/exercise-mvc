const axios = require('axios');

const END_POINT =
  'https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist&type=single';

const getJokes = () => {
  return axios
    .get(END_POINT)
    .then((response) => {
      console.log(response);
    })
    .then((data) => console.log(data.joke))
    .catch((error) => {
      console.log(error);
    });
};

module.exports = getJokes;

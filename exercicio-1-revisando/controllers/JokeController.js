const Joke = require('../models/Joke');

module.exports = {
  async listJokes(_req, res) {
    const joke = await Joke;
    res.json(joke);
  },
};

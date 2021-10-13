const express = require('express');
const app = express();
const JokeController = require('./controllers/JokeController');

app.set('view engine', 'ejs');

app.set('views', './views');

app.get('/', JokeController.listJokes);

app.listen(3000, () => console.log('listen to the port 3000'));

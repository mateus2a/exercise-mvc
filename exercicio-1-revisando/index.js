const express = require('express');
const Joke = require('./models/Joke');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', Joke);
app.listen(3000);

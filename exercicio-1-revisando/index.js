const express = require('express');
const Joke = require('./models/Joke');
const app = express();

app.get('/', Joke);
app.listen(3000);

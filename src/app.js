const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./routes');

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(routes);

app.get('/', (req, res) => {
    res.send(`Saulo Joab\n\nMay everything here be used for good.\nhttps://github.com/saulojoab`);
});

app.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status = 404;
    res.status(404).json(error);
});

module.exports = app;
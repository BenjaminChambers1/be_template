require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const knex = require('./db.js');
const db = require('./database')(knex);
const port = 3000;
const body_parser = require('body-parser');
app.use(body_parser.urlencoded({ extended: false }));
app.use(body_parser.json());

let test = true;


app.use(cors({
    credentials: true,
    origin: test ? process.env.HOST_API_URL : process.env.SERV_API_URL
}));


app.get('/', (req, res) => {
    res.send('Welcome to the be template api');
});

app.use(
    '/users',
    require('./users')(knex)
);

app.listen(port, () => console.log(`Running on port ${port}`));
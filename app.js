const express = require('express');
const app = express();
const cors = require('cors');

let test = true;
app.use(cors({credentials: true, origin: test ? 'http://localhost:8080' : 'http://18.216.160.160/'}));
console.log('Server Started');

app.get('/', (req, res) => {
    res.send('Welcome to the be template api')
});

app.listen(3000);
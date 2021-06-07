const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors({credentials: true, origin: 'http://18.216.160.160/'}));

console.log('Server Started');

//example route

app.get('/', (req, res) => {
    res.send('Welcome to the be template api')
});

app.listen(3000);
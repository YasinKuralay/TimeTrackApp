const express = require('express');
// const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/testing', function (req, res) {
    console.log('testing successfull');
    return res.send('testing successfull');
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

//Ports will later be handled through dotenv
app.listen(8080, function () {
    console.log('Server is listening');
});

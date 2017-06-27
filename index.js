const express = require('express');
const bodyParser = require('body-parser');

var app = express();
app.use(express.static('assets'));
app.use(bodyParser.json());

var messages = []; // this will temporarily hold our messages

app.get('/messages', (req, res, next) => {
    res.status(200).json({messages});
});

app.post('/messages', (req, res, next) => {
    messages.push({message: req.body.message, time: new Date().getHours() + ":" + new Date().getMinutes()} ); // this adds the message to the array of messages
    res.status(200).json({messages}); // this sends back the full array of messages to be displayed
});

app.listen(3000);

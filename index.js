//Modules
const express = require('express');
const fs = require('fs');
require('dotenv').config();

//Express App
const app = express(); 

//Variables
var port = process.env.PORT;
var message = process.env.MESSAGE;

//Time
let dt = new Date();
let hours = dt.getHours();
let minutes = dt.getMinutes();
let seconds = dt.getSeconds();

//Listen on port
app.listen(port, () => {
    console.log(`[LOG] [${hours}:${minutes}:${seconds}] Server Online At Port ${port}`);
});

//Listen to base URL (https://127.0.0.1/)
app.get('/', (req, res) => {
    res.json({ message: message, time: `${hours + ':' + minutes + ':' + seconds}` });
    console.log(`[LOG] Someone made a request to your server!`);
});

//Listen to API URL (https://127.0.0.1/api/)
app.get('/api', (req, res) => {
    res.json({ message: 'This is an API!', time: `${hours + ':' + minutes + ':' + seconds}` });
    console.log(`[LOG] Someone made a request to your api!`);
});
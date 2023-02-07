'use strict';

const express = require('express');
const app = new express();
const port = 8080;

app.listen(port);
app.use(express.static('js_output'));
app.use(express.static('styles'));

app.get('/', function (request, response) {
    response.sendFile(__dirname + '/html/index.html');
});

setInterval(() => { }, 1000);
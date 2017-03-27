'use strict';

const express = require('express');
const app = express();

app.use(express.static(__dirname + '/html'));

app.get('/chickens', (req, res, next) => {
	res.sendFile(__dirname + '/html/seechickens.html');
})

app.get('/egg', (req, res, next) => {
	res.sendFile(__dirname + '/html/seeoureggs.html');
})

app.listen(8080, () => {

})

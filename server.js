'use strict';

const express = require('express');
const app = express();

app.use(express.static(__dirname + '/html'));

app.get('/chickens', (req, res, next) => {
	res.sendFile(__dirname + '/html/seechickens.html');
})

app.listen(8080, () => {

})

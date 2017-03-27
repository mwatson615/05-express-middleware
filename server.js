'use strict';

const express = require('express');
const app = express();
const moment = require('moment');
let currentDate = moment();

const getTime = (req, res, next) => {
	// let now = new Date();
	req.currentTime = moment(Date.now());
	// req.getNowTime = now.toISOString();
	next();
}

// const getEgg = (req, res, next) => {
// 	let egg = ',ggadddd8888888bbbbaaa,_
// 		     ,ad888,      `Y88,      `Y888baa,'
// 		   ,dP"  "Y8b,      `"Y8b,      `"Y8888ba,'
// 		  ,88      "Y88b,      `"Y8ba,       `"Y88Ya,'
// '		 ,P88b,      `"Y88b,       `"Y8ba,_       ""8a,'
// '		,P'"Y88b,        Y88b,        `Y8ba,_      `Ya,'
// '		8'    "Y88b,        ""Y8ba,         ""Y8ba,_   `8,'
// '		8b       "Y88b,         ""Y8ba,_         ""Y88baaY'
// '		88b,        "Y88ba,         ""Y88ba,_         `""P'
// '		8Y88ba,        ""Y88ba,_         ""Y88ba,,_    ,P''
// '		`b,"Y88ba,         ""Y88baa,_         """Y888bd"'
// '		 `b, `"Y88ba,_         ""Y888baa,_         ,8"'
// '		  `8,   `""Y88ba,_         `"""Y8888baaaaaP"'
// '		   `Ya,     `""Y888ba,_           `"d88P"'
// '		     `"Yb,,_     `""Y888baa,__,,adP""''
// 		         `"""YYYY8888888PPPP"""`''
// }

app.use(express.static(__dirname + '/html'));
app.use(getTime);
// app.use(getEgg);

app.get('/chickens', (req, res, next) => {
	res.sendFile(__dirname + '/html/seechickens.html');
})

app.get('/egg', (req, res, next) => {
	res.sendFile(__dirname + '/html/seeoureggs.html');
	res.send(`<h3>You found the egg at ${req.currentTime}</h3>`)
	// res.send(`<p>${egg}</p>`)
	console.log(`You found the egg at ${req.currentTime}`)
});

app.use((req, res) => {
	res.send("No time for love, Dr Jones")
});

app.listen(8080, () => {

});

'use strict';

const faker = require('faker');
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27018/music', (err, db) => {
	console.log(err);

	let allUsers = [];

	db.collection('users').find({favoriteSongs.artist: {$in: "Coldplay"}}{username: 1}).toArray()
		.then(users => { 
			allUsers = users;
			console.log(users);
		})
		.catch(err => { console.log(err); })
		.then(() => db.close())
	; 
});
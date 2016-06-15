'use strict';

const faker = require('faker');
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27018/music', (err, db) => {
	console.log(err);
	let random, randomSong;
	db.createCollection('notes', { validator: { $or: [
		{username: { $type: "string" } }, 
		{note: { $type: "integer" } }
		]} });

	db.collection('songs').find({}, {title: 1, artist:1}).toArray()
		.then(songs => { 
			allSongs = songs;
			db.collection('users').find({}).each(function(err, db){
				random = getRandomIntInclusive(0,5); 
				randomSong = getRandomIntInclusive(0,5); 
				for(i=0; i<random, i++){
					//db.collection('users').insertOne({username: db.username, song: allSongs[randomSong], note: random });
				}
			});
		})
		.catch(err => { console.log(err); })
		.then(() => db.close())
	; 
});

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min +1)) + min;
}
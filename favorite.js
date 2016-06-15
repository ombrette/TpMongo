'use strict';

const faker = require('faker');
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27018/music', (err, db) => {
	console.log(err);

	let allSongs = [];
	let random, randomSong;

	db.collection('songs').find({}, {title: 1, artist:1}).toArray()
		.then(songs => { 
			allSongs = songs;
			db.collection('users').find({}).each(function(err, db){
				random = getRandomIntInclusive(0,10); 
				randomSong = getRandomIntInclusive(0,10); 
				for(i=0; i<random, i++){
					//db.insertOne({favoriteSongs: { title: allSongs[randomSong].title, artist: allSongs[randomSong].artist}});
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
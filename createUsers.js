'use strict';

const faker = require('faker');
const MongoClient = require('mongodb').MongoClient;

let users = [];
for(i=0; i<1000; i++){
	users.push({
		username: 		faker.internet.userName(),
		displayName: 	faker.name.findName(),
		email: 	  		faker.internet.email()
	});
}

MongoClient.connect('mongodb://localhost:27018/music', (err, db) => {
	console.log(err);
	db.createCollection('users', { max: 1000, validator: { $or: [
		{username: { $type: "string" } }, 
		{displayName: { $type: "string" } },
		{email: { $regex: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/ } }
		]} })
		.then(users => { db.collection('users').insertMany(users); console.log(users); })
		.catch(err => { console.log(err); })
		.then(() => db.close())
	; 
});
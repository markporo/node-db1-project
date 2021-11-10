//NOTES FROM CLASS**********************
const db = require('./db-config');

// add user in to users
db('users').insert({ name: 'amanda', age: 55 })

db.select('*').from('users');
//or
db('users');

//select specific user
db('users').where({ id: 3 }) // shows array of users that match id: 3

//updates
db('users').where({ age: 55 }).update({ age: 56 }); // returns a number of records updated


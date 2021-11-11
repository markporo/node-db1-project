const knex = require('knex');
const configs = require('../knexfile');
const environment = process.env.NODE_ENV || 'development';

//Not best practice, but using for now// set filename from perspective of root folder
const config = {
    client: 'sqlite3',
    connection: {
        filename: './data/budget.db3'
    },
    useNullAsDefault: true,
};



//module.exports = knex(config[environment]);  ?????
module.exports = knex(config);

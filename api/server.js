const express = require("express");

const server = express();
const accountsRouter = require('./accounts/accounts-router')

server.use(express.json());

//connect routes
server.use('/api/accounts', accountsRouter);

// home page
server.get('/', (req, res) => {
    res.status(200).json(
        {
            "status": 200,
            "message": 'HEY EVERYBODY WE ARE CONNECTING THE DATABASE WITH KNEX!',
            "time": new Date().toLocaleTimeString(),
        });
})

// catch all endpoint
server.use('*', (req, res) => {
    res.status(404).json({
        message: 'not found',
    })
})


module.exports = server;

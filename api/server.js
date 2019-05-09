//need express for server building..
const express = require("express");
const server = express();

//middleware from ../config built-in and third-party
const configMiddleware = require('../config/middleware.js')
configMiddleware(server);

//custom middleware from ../common 
customMiddleware = require('../common/customMiddleware.js')


//routes... to give response according to request received 
server.get('/', (req, res) => {
    res.send("SERVER  LIVE........");
    //can use express.static to send static file with all impages and css...
})

server.get('/name', customMiddleware, (req, res) => {
    res.send(`the name received is ${req.query.name} and after custom middleware it is ${req.upper}`);
})

//need to export objects and functions so other file can import and use them
module.exports = server;

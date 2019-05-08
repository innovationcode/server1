//need express for server building..
const express = require("express");
const server = express();
const morgan = require("morgan")

//middleware to change or verify data between request and response
//Three-types middleware
//built-in
//third party
//custom 
//can use middlewares globally by using 'server.use(middleware)' or locally by mentioning that middleware for that particular route
server.use(express.json()); //built-in middleware
server.use(morgan('short'));//morgan('dev') // third-party middleware give all info about request received .. so if needed can be saved to database


//routes... to give response according to request received 
server.get('/', (req, res) => {
    res.send("SERVER  LIVE........");
    //can use express.static to send static file with all impages and css...
})

//need to export objects and functions so other file can import and use them
module.exports = server;

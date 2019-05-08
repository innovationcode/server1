//need express for server building..
const express = require("express");
const server = express();
const morgan = require("morgan")
const helmet = require("helmet")
const cors = require("cors")

//middleware to change or verify data between request and response
//Three-types middleware
//built-in
//third party
//custom 
//can use middlewares globally by using 'server.use(middleware)' or locally by mentioning that middleware for that particular route
//whatever in server.use() will be middlewares.............
server.use(express.json()); //built-in middleware
server.use(morgan('short'));//morgan('dev') // third-party middleware give all info about request received .. so if needed can be saved to database
server.use(helmet()); //Helmet can help protect your app from some well-known web vulnerabilities and secure our web applications.
server.use(cors()); //Cross-origin resource sharing (CORS) is a mechanism that allows restricted resources
//ORDER MATTERS FOR MIDDLEWARE ... SO THEY SHOULD BE PLACED IN ORDER 1. REQUEST : HELMET 2. SECURITY : HELMET....
//adding custom middleware
function upper(req, res, next) {
    console.log(req.query.name);
    //You can access query from URL passed with '?' like ...http://localhost:5000/name/?name= 'hello........'(to work query string there should be space between name and equal sign)
    const nameRecived = req.query.name;
    if(nameRecived) {
        req.upper = nameRecived.toUpperCase();
        console.log(req.upper);
        next();
    } else {
        res.status(400).send("Please provide ..name...");
    }
}
server.use(upper);

//routes... to give response according to request received 
server.get('/', (req, res) => {
    res.send("SERVER  LIVE........");
    //can use express.static to send static file with all impages and css...
})

server.get('/name', (req, res) => {
    res.send(`the name received is ${req.query.name} and after custom middleware it is ${req.upper}`);
})

//need to export objects and functions so other file can import and use them
module.exports = server;

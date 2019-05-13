//need express for server building..
const express = require("express");
const server = express();

//router
const productRouters = require('./routers/productRouters');
const clientRouters = require('./routers/clientRouters');


//middleware from ../config built-in and third-party
const configMiddleware = require('../config/middleware.js')
configMiddleware(server);

//custom middleware from ../common 
customMiddleware = require('../common/customMiddleware.js')


//when ever there is '/products...' requests comes use productRouter which contains endpoint from '../api/routers/productRouters.js'
server.use('/products', productRouters);
//similarly for '/clients' route...
server.use('/clients', clientRouters);

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

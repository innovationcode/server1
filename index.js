//console.log("Running.........")
//importing server form server.js
const server = require('./api/server.js');

//make port dynamic by using process.env.PORT.. if 5000 port is not available..
const port = process.env.PORT || 5000;

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
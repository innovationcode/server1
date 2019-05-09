//adding custom middleware
module.exports = (req, res, next) => {
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

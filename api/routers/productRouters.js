const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
    res.send("GET......  Products endpoint......");
})

router.get('/:id', (req, res) => {
    res.send(`GET......  Products endpoint......${req.params.id}`);
})

module.exports = router;
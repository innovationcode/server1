const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
    res.send("GET......  Clients endpoint......");
})

router.get('/:id', (req, res) => {
    res.send(`GET......  CLIENTS endpoint......${req.params.id}`);
})

module.exports = router;
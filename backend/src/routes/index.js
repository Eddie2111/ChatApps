const express = require('express');
const router = express.Router();

router
    .route('/')
    .get((req, res) => {
        res.send('<h1>Hello world</h1>');
    });
    .post((req, res) => {
        res.send('<h1>Hello world</h1>');
    });

module.exports = router;
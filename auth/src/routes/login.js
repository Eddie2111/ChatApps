const express = require('express');
const router = express.Router();
const {login} = require('../controller/login');
router
.route('/')
.get((req, res) => {
    res.send('Hello World');
})
.post((req, res) => {
    login(req, res)
})

module.exports = router;
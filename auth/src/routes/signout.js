const express = require('express');
const router = express.Router();

router
.route('/')
.get((req, res) => {
    res.send('You are signed out');
    res.cookie('token', '', { path: '/', secure: true, httpOnly: true, expires: 1 });
})
.post((req, res) => {
    //send a cookie to destroy the token cookie
    res.send('You are signed out');
    res.cookie('token', '', { path: '/', secure: true, httpOnly: true, expires: 1 });
})

module.exports = router;
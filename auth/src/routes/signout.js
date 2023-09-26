const express = require('express');
const router = express.Router();

router
.route('/')
.get((req, res) => {
    //res.cookie('token', 0, { path: '/', secure: true, httpOnly: true, expires: new Date(Date.now()) });
    res.clearCookie('token', { path: '/' });
    res.send('You are signed out');
})
.post((req, res) => {
    //send a cookie to destroy the token cookie
    //res.cookie('token', 0, { path: '/', secure: true, httpOnly: true, expires: new Date(Date.now()) });
    res.clearCookie('token', { path: '/' });
    res.send('You are signed out');
})

module.exports = router;
const express = require('express');
const router = express.Router();

router
.route('/')
.get(async(req, res) => {
    //res.cookie('token', 0, { path: '/', secure: true, httpOnly: true, expires: new Date(Date.now()) });
    console.log('hit!')
    res.clearCookie('token', { path: '/' });
    res.cookie('blink', 0, { path: '/', secure: true, httpOnly: true, expires: new Date(Date.now()) });
    res.send('You are signed out');
})
.post(async(req, res) => {
    //send a cookie to destroy the token cookie
    //res.cookie('token', 0, { path: '/', secure: true, httpOnly: true, expires: new Date(Date.now()) });
    console.log('hit!')
    res.clearCookie('token', { path: '/' });
    res.send('You are signed out');
})

module.exports = router;
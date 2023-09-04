const { findUserById } = require('../model/userModel');
const { sign } = require('jsonwebtoken');

async function AuthCheck(req,res) {
    //const {token} = req.cookies;
    const data = req.data;
    console.log(req.data)
    res.json(data)
}

module.exports = {
    AuthCheck,
}
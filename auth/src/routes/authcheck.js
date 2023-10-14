const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const {AuthCheck} = require('../controller/authCheck');
const {findUserById} = require('../model/userModel');

/**
 * this is auth check route
 * this function recevies a jwt token and decodes it to test if it is valid
 * @required -> redis token check
 * @param  {obj}   req  the jwt token
 * @return {obj}        the decoded token
 * @return {obj}        the error message
 */

router
  .route('/')
  .get((req, res) => {
    // get the token from cookie
    const token = req.cookies.token;
    if (!token)
      return res.status(401).send('Access denied. No token provided.');
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      res.send(decoded);
    } catch (ex) {
      res.status(400).send('Invalid token.');
    }
  })
  .post(async (req, res) => {
    const data = req.cookies.token;
    if (!data) return res.status(401).send('Access denied. No token provided.');
    try {
      const decoded = jwt.verify(data, process.env.JWT_SECRET);
      const user = await findUserById(decoded.id);
      console.log('authCheck for', user.id);
      res.json(user);
    } catch (e) {
      res.status(400).send('Invalid token.');
    }
  });

module.exports = router;

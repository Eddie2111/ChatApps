const express = require('express');
const router = express.Router();
const {login} = require('../controller/login');

/**
 * this is login route
 * this function generates a jwt token upon valid user from database
 * @param  {req: {email->str ,password-> str}}   req  the user object
 * @return {obj} the jwt token
 */

router
  .route('/')
  .get((req, res) => {
    res.send('Hello World');
  })
  .post((req, res) => {
    login(req, res);
  });

module.exports = router;

const express = require('express')
const router = express.Router()
const { signup } = require('../controller/signup')
router
  .route('/')
  .get((req, res) => {
    res.send('Hello World')
  })
  .post((req, res) => {
    signup(req, res)
  })

module.exports = router

const express = require('express');
const router = express.Router();
const {updateProfile, UpdateUser} = require('../controller/update');

router
  .route('/')
  .get((req, res) => {
    res.send('Hello World');
  })
  .post((req, res) => {
    const {command} = req.body.command;
    if (command === 'updateProfile') {
      updateProfile(req, res);
    } else if (command === 'UpdateUser') {
      UpdateUser(req, res);
    }
  });

module.exports = router;

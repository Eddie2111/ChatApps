const express = require('express')
const router = express.Router()

const profileInsertion = require('../../controller/profileInsertion')

router
  .route('/')
  .get((req, res) => {
    res.json({
      status: 405,
      message: 'Method not allowed'
    })
  })
  .post(async (req, res) => {
    console.log(req.body)
    const data = req.body
    const result = await profileInsertion(data)
    if (result) {
      res.json({
        status: 200,
        message: 'Profile inserted successfully'
      })
    } else {
      res.json({
        status: 500,
        message: 'Internal server error'
      })
    }
  })

module.exports = router

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
    try {
      const result = await profileInsertion(data)
      res.json({
        status: 200,
        message: 'Profile inserted successfully',
        data: result
      })
    } catch (err) {
      res.json({
        status: 200,
        message: 'Profile insertion failed',
        error: err
      })
    }
  })

module.exports = router

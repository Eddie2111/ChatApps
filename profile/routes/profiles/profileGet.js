const express = require('express')

const router = express.Router()
const { getProfileByID } = require('../../controller/profileGetting')

router
  .route('/')
  .get(async (req, res) => {
    const result = await getProfileByID({ id: req.query.id })
    console.log(req.cookies || 'no cookies')
    res.json({
      status: 200,
      result,
      message: 'success'
    })
  })

  .post(async (req, res) => {
    console.log(req.body.id)
    const result = await getProfileByID({ id: req.body.id })
    console.log(req.cookies || 'no cookies')
    if (result) {
      res.json({
        status: 200,
        message: 'reached route',
        result
      })
    } else {
      res.json({
        status: 500,
        message: 'reached route with error'
      })
    }
  })

module.exports = router

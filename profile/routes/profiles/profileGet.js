const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

router
    .route('/')
    .get((req, res)=>{
        res.json({
            status: 405,
            message: 'Method not allowed',
        });
    })
    .post(async (req, res)=>{
        console.log(req.body);
        if (result) {
            res.json({
                status: 200,
                message: 'reached route',
            });
        } else {
            res.json({
                status: 500,
                message: 'reached route with error',
            });
        }
    });

module.exports = router;

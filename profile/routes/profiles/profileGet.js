const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const {getProfileByID} = require('../../controller/profileGetting');
router
    .route('/')
    .get((req, res)=>{
        res.json({
            status: 405,
            message: 'Method not allowed',
        });
    })
    
    .post(async (req, res)=>{
        console.log(req.body.id);
        const result = await getProfileByID(req.body.id);
        if (result) {
            res.json({
                status: 200,
                message: 'reached route',
                result: result,
            });
        } else {
            res.json({
                status: 500,
                message: 'reached route with error',
            });
        }
    });

module.exports = router;

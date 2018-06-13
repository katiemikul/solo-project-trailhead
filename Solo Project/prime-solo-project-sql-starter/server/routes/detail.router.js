const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');


//Get Request for Trail Details based on trail_name
router.get('/', (req, res) => {
    let param = req.query.trail_name;
    console.log(param);
    pool.query(`SELECT * FROM "trails" WHERE "trail_name" = $1;`, [param])
    .then((results) => {
        res.send(results.rows[0])
        console.log(results)
    })
    .catch((error) => {
        console.log('error with GET to /detail  trail details results', error);
    });
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;
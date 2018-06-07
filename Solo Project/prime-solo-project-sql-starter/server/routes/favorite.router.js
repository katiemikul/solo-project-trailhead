const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');

/**
 * GET route template
 */
//Get route from database to Favorite Page
router.get('/', (req, res) => {
        pool.query(`SELECT * FROM "favorite";`)
        .then((results) => {
            res.send(results.rows)
            console.log(results)
        })
        .catch((error) => {
            console.log('error with GET to /favorite', error);
        });
});


/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
        pool.query(`SELECT * FROM "trails";`)
        .then((results) => {
            res.send(results.rows)
            console.log(results)
        })
        .catch((error) => {
            console.log('error with GET to /trails', error);
        });
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;
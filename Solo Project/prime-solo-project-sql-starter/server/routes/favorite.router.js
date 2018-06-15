const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');

/**
 * GET route template
 */
//Get route from database to Favorite Page
router.get('/', (req, res) => {
        pool.query(`SELECT * FROM "trails";`)
        .then((results) => {
            res.send(results.rows)
            console.log(results)
        })
        .catch((error) => {
            console.log('error with GET to /favorite', error);
        });
});

router.post('/', (req, res) => {
    if (req.isAuthenticated()) {
        const queryText = `INSERT INTO "user_trails" ("user_id", "trail_id") VALUES ($1, $2)`;
        pool.query(queryText, [req.user.id, req.body.trail])
        .then(res.sendStatus(201))
        .catch((error) => {
            console.log('error with post to /favorite', error);
        })
    }else {
        res.sendStatus(403);
    }
    
});

router.delete('/', (req, res) => {
    if (req.isAuthenticated()) {
        const queryText = `DELETE FROM "user_trails"
                            WHERE "person_id" = ($1)
                            AND trails = ($2);`;
        pool.query(queryText, [req.user.id, req.body.trait])
            .then(res.sendStatus(201))
            .catch((err) => {
                console.log('Error on trails server POST', err);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403);
    }
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;
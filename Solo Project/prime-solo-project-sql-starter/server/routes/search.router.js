const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');

/**
 * GET route template
 */
//Get route from API to Search Page
// router.get('/', (req, res) => {
//     axios({
//         method: 'GET',
//         url: `https://www.hikingproject.com/data/get-trails`,
//         params: {
//             lat: '40',
//             lon: '-105',
//             maxDistance: '50',
//             maxResults: '500',
//             key: '200273964-beb10d19c250ee29496c886bf07efaf8',
//         }
//     })
//     .then((results) => {
//         res.send(results.rows)
//         console.log(results.data)
//     })
//     .catch((error) => {
//         console.log('error with GET to API', error);
//     });
// });

//GET Request for Search Page based on location
router.get('/', (req, res) => {
    let param = req.query.location;
    console.log(param);
    pool.query(`SELECT * FROM "trails" WHERE "location" = $1;`, [param])
    .then((results) => {
        res.send(results.rows)
        console.log(results)
    })
    .catch((error) => {
        console.log('error with GET to /search results', error);
    });
});

//Get Request for Trail Details based on trail_name
router.get('/', (req, res) => {
    let param = req.query.trail_name;
    console.log(param);
    pool.query(`SELECT * FROM "trails" WHERE "trail_name" = $1;`, [param])
    .then((results) => {
        res.send(results.rows)
        console.log(results)
    })
    .catch((error) => {
        console.log('error with GET to /search details results', error);
    });
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;
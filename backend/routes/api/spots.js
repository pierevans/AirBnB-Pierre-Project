const express = require('express');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');

const { Spot } = require('../../db/models');
const router = express.Router();

router.get('/', async (req, res, next) => {
    let spots = await Spot.findAll()

    res.json(spots)
})
module.exports = router
const express = require("express");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie, requireAuth } = require("../../utils/auth");

const { Spot, SpotImage, Review, Booking, User  } = require("../../db/models");
const spotimage = require("../../db/models/spotimage");
const router = express.Router();

// Spot validation
const validateSpot = [
  check("address")
    .exists({ checkFalsy: true })
    .withMessage("Street address is required"),
  check("city").exists({ checkFalsy: true }).withMessage("City is required"),
  check("state").exists({ checkFalsy: true }).withMessage("State is required"),
  check("country")
    .exists({ checkFalsy: true })
    .withMessage("Country is required"),
  check("lat")
    .exists({ checkFalsy: true })
    .withMessage("Latitude is not valid"),
  check("lng")
    .exists({ checkFalsy: true })
    .withMessage("Longitude is not valid"),
  check("name")
    .exists({ checkFalsy: true })
    .isLength({ max: 50 })
    .withMessage("Name must be less than 50 characters"),
  check("description")
    .exists({ checkFalsy: true })
    .withMessage("Description is required"),
  check("price")
    .exists({ checkFalsy: true })
    .withMessage("Price per day is required"),
    handleValidationErrors
];

// get all spots
router.get("/", validateSpot, async (req, res, next) => {
  let spots = await Spot.findAll();
  res.json(spots);
});

// create a spot
router.post('/', validateSpot, async (req, res, next) => {

    let {
        address,
        city,
        state,
        country,
        lat,
        lng,
        name,
        description,
        price
    } = req.body;

    let ownerId = req.user.id

    const newSpot = await Spot.create({
        ownerId,
        address,
        city,
        state,
        country,
        lat,
        lng,
        name,
        description,
        price
    })
    res.json(newSpot)
})
module.exports = router;

// Add an Image to a Spot based on the Spot's id

router.post('/:spotId/images', async (req, res, next) => {
    let {url, preview} = req.body
    let spot = await Spot.findOne({
        where: {
            id: req.params.spotId
        }
    })

    if(!spot) {
        return res.json({
            statusCode: 404,
            message: "Spot couldn't be found"
        })
        
    }
    let image = await SpotImage.create({
        url,
        preview,
        spotId: +req.params.spotId
    })
    res.json(image)
})


// Get all Spots owned by the Current User

router.get('/:currentUser/spots', async (req, res, next) => {
    let currentUser = req.user
    let userSpots = await Spot.findAll({
        where: {
            ownerId: currentUser.id
        }
        })
    res.json(userSpots)
    })

// Get details for a Spot from an id

//  Edit a Spot
router.put('/:spotId', requireAuth, validateSpot, async (req, res, next) => {
    
    let {
        address,
        city,
        state,
        country,
        lat,
        lng,
        name,
        description,
        price
    } = req.body;
    let id = req.params.spotId
    let spot = await Spot.findByPk(id);
    
    await spot.update({
        address,
        city,
        state,
        country,
        lat,
        lng,
        name,
        description,
        price
    })
    res.json(spot)
})


// Delete a Spot
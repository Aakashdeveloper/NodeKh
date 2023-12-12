const express = require('express');
const router = express.Router();
const passport = require('passport');
const restaurantController = require('../controller/RestaurantController')

router.get('/all',restaurantController.getAll);

router.get("/get/:id",restaurantController.getRestaurantById);


router.post('/add',restaurantController.addRestaurant);

router.put('/rupdate',(req,res) => {
    res.json({message:'Restaurant Updated'})
});

router.delete('rdelete',(req,res ) => {
    res.json({message:'Restaurant Delete'})
});

module.exports = router;

const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/all',(req,res) => {
    res.json({message:"All Restaurants"})
});

router.get("/get/:id",(req,res) => {
    let id = req.params.id
    res.json({message:`Restaurant with ${id}`})
});


router.post('/add',(req,res) => {
    res.json({message:'Add Restaurants'})
});

router.put('/rupdate',(req,res) => {
    res.json({message:'Restaurant Updated'})
});

router.delete('rdelete',(req,res ) => {
    res.json({message:'Restaurant Delete'})
});

module.exports = router;

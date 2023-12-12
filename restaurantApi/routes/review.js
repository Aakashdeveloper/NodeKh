const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/all',(req,res) => {
    res.json({message:"All Review"})
});

router.get("/get/:id",(req,res) => {
    let id = req.params.id
    res.json({message:`Review with ${id}`})
});


router.post('/add',(req,res) => {
    res.json({message:'Add Review'})
});

module.exports = router
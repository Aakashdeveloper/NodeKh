const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    restId:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        minimum:0,
        maximum:5,
        required:true
    },
    date:{
        type:String,
        required:true
    }
});

const Review = mongoose.model('reviews', ReviewSchema);

module.exports = Review;
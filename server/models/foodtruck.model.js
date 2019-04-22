let mongoose = require('mongoose'),
      ReviewSchema = require('./review.model');

let FoodtruckSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required!"]
    },
    style: {
        type: String,
        required: [true, "Style is required!"]
    },
    avgrating: {
        type: Number,
        required: [true, "Rating is required!"]
    },
    reviews:[ReviewSchema]
}, {timestamps: true});



module.exports = mongoose.model('Foodtruck', FoodtruckSchema);
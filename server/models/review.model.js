let mongoose = require('mongoose');

let ReviewSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Name is required!"]
    },
    content: {
        type: String,
        required: [true, "Style is required!"]
    },
}, {timestamps: true});

mongoose.model('Review', ReviewSchema);

module.exports = ReviewSchema;

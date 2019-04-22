const mongoose = require('mongoose'),
     foodtruck = mongoose.model('Foodtruck'),
        review = mongoose.model('Review');

class Reviews {
    getAll(req, res){
        review.find({}, (err, reviews) => {
            if (err) {console.log(err);}
            res.json({status: 'ok', reviews: reviews});
        })
    }

    getOne(req, res){
        
    }

    create(req, res){
        let r = new review(req.body);
        r.save(err => {
            if(err){
                res.json({status: 'not ok', errors: err});
            } else {
                res.json({status: "okay"});
            }

        })
    }
}

module.exports = new Reviews();


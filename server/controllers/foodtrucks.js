const mongoose = require('mongoose'),
     foodtruck = mongoose.model('Foodtruck');

class Foodtrucks {
    getAll(req,res){
    foodtruck.find({}, (err, foodtrucks) => {
        if (err) {console.log(err);}
        
        var truckMap = {};

        foodtrucks.forEach((truck) => {
            truckMap[truck._id] = truck;
        })

        res.json(truckMap);
        })
    }

    getOne(req, res){
        foodtruck.findOne(req.query._id, (err, ft) => {
            if (err) return res.status(500).send(err);
            return res.status(200).send(ft);
        })
    } 

    create(req, res){
        // if (!req.body) {
        //     return res.status(400).send('Request body missing.');
        // }
        console.log(req.body);
        let newfoodtruck = new foodtruck(req.body);
        
        console.log(newfoodtruck);
        newfoodtruck.save(err => {
            
            if (err){
                res.json(err);
            }
            else {
                res.json({status: 'ok'});
            }
        })



            // .then((doc) => {
            //     if(!doc || doc.length === 0) {
            //         return res.status(500).send(doc);
            //     }
            
            //     return res.status(201).send("good");
            // })
            // .catch(err => {
            //     return res.status(500).json(err);
            // });
    
    }

    update(req, res){
        console.log(req.body.truck);
        if (!foodtruck.findById(req.query._id)){
            return res.status(400).send("Did not find the object.");
        }
        // TODO: implement DB query to update item 
        // TODO: find a way to convert documentquery to js object?
        
        let item = foodtruck.findById(req.query._id);
        let retObj = {};
        for (var key in item){
            item[key] = req.body.truck[key];
        }
        retObj = item;
        return res.status(200).send(retObj);
    }
}

module.exports = new Foodtrucks();


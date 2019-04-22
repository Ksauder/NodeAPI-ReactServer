// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express");
// invoke express and store the result in the variable app
var app = express();

var bodyParser = require('body-parser')
app.use(bodyParser.json());

// let mongoose = require('mongoose');

// Models
let FoodtruckModel = require('./models/foodtruck.model')

// use app's get method and pass it the base route '/' and a callback
app.get('/foodtrucks', function(req, res) {
    FoodtruckModel.find({}, (err, foodtrucks) => {
      var truckMap = {};

      foodtrucks.forEach((truck) => {
        truckMap[truck._id] = truck;
      })

      res.json(truckMap);
    })
})

app.post('/foodtruck/new', (req, res) => {
  if (!req.query) {
    return res.status(400).send('Request query missing.');
  }

  let foodtruck = new FoodtruckModel(req.query);

  foodtruck.save()
    .then((doc) => {
      if(!doc || doc.length === 0) {
        return res.status(500).send(doc);
      }
      
      return res.status(201).send("good");
    })
    .catch(err => {
      return res.status(500).json(err);
    });

})













// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function() {
  console.log("listening on port 8000");
})
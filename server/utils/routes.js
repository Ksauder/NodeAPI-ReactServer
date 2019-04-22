const Foodtrucks = require('../controllers/foodtrucks'),
         Reviews = require('../controllers/reviews');

module.exports = function(app){
    app.get('/foodtrucks', Foodtrucks.getAll);
    app.post('/foodtrucks', Foodtrucks.create);
    app.get('/foodtrucks/:_id', Foodtrucks.getOne);
    app.put('/foodtrucks/:_id', Foodtrucks.update);
    //app.delete('/foodtrucks/:_id', Foodtrucks.delete);

    app.post('/foodtrucks/:_id/review', Reviews.create);
}



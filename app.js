/*when user clicks the homepage it should show two buttons
First button suggests good food.
Second button suggets five good restaurants.*/

/* the following code is an example of Level2 in express Code School
var express = require("express");//require the express library
var app = express();//application instance

app.use(express.static('public')); //default route which is the middleware

app.get('/suggestionForGoodFood', function(req, res){
  var food = ['Poori and channa', 'Chicken Biryani', 'Masal dosa', 'Pani poori'];
  res.send(food);
});

app.get('/suggestionForGoodRestaurants', function(req, res) {
    var restaurants = ['Godavari', 'Narmadha', 'Curry house', 'Minerva'];
    res.send(restaurants);
})

app.listen(process.env.PORT, function() {
    console.log("listening on Port.....");
});*/

var express = require("express");//require the express library
var app = express();//application instance

app.use(express.static('public')); //default route which is the middleware

app.get('/suggestionForGoodFood', function(request, response){
  var food = ['Pizza', 'Chicken Tikka masala', 'Cheese quasadilla', 'Cheesecake'];
      if (request.query.limit >= 0) {
        response.json(food.slice(0, request.query.limit));
    }
    else {
        response.json(food);
    }
 
});

app.get('/suggestionForGoodRestaurants', function(request, response) {
    var restaurants = ['Olive Garden', 'Godavari', 'IHOP', 'Acapulcas'];
    if (request.query.cnt >= 0) {
        response.json(restaurants.slice(0, request.query.cnt));
    }
    else {
        response.json(restaurants);
    }
    
});

app.listen(process.env.PORT, function() {
    console.log("listening on Port.....");
});

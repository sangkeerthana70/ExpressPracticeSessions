/*when user clicks the homepage it should show two buttons
First button suggests good food.
Second five good restaurants.*/


var express = require("express");//require the express library
var app = express();//application instance

app.use(express.static('public')); 

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
});
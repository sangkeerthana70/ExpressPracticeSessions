var express = require("express");//require the express library
var app = express();//application instance
//default route
app.get('/', function(request, response) {
   response.send("I am a default route"); 
});
//static route
app.get('/food', function(request, response) {//sending in a parameter to the
//query with the key value pair /food:pizza
    var favFood = request.query.favorite;
   response.send("I am a food route " + "My favorite food is " + favFood); 
});

/*app.get('/food/pizza', function(request, response) {
    response.send("Here are the instructions for making Pizza");
});

app.get('/food/dosa', function(request, response) {
    response.send("Here are the instructions for making Dosa");
});*/

//dynamic route
app.get('/food/:variety', function(request, response) {
    var foodVariety = request.params.variety;
    response.send('Instructions to make ' + foodVariety);
});

app.listen(process.env.PORT, function() {
    console.log("listening on Port.....");
});
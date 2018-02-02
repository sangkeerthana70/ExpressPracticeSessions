/*This app.js closely resembles Level4 of code school express Lessons.
Practice given by Senthil*/

var express = require("express");//require the express library
var app = express();//application instance
//module to insert a document in db
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";
//console.log(process.env.PORT);

app.use(express.static('public')); 

//add route
//normalising using app.param middleware Level3
app.param('add', function(request, response, next) {
   console.log("I am here");    
   var item = request.query.item;
   var nItem = item[0].toUpperCase() + item.slice(1).toLowerCase();
   request.nItem = nItem;
   next();
});
var foods= {
    
};

app.get('/init', function(request, response) {
    var foodList = Object.keys(foods);
    console.log(foodList);
    response.send(foodList);
    
});
app.get('/add', function(request,response) {
    var itemName = request.query.item;
    var itemQuantity = request.query.quantity;
    var nItemName = itemName[0].toUpperCase() + itemName.slice(1).toLowerCase();
    
    foods[nItemName] = itemQuantity;//adds the user input to the foods object.
    var foodList = Object.keys(foods);//gets the key from the food object and 
    //returns it in a array.
    response.send(foodList);
});

//insert data into mongoDB




var db = 'myGame';


app.listen(process.env.PORT, function() {
    console.log("listening on Port.....");
});
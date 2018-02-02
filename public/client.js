/*global $ */
/*Level2
$('#food').click(function(event) {
    var foodCount = $('#foodCount').val();
    //console.log(foodCount);
     event.preventDefault();
   $.get('/suggestionForGoodFood?limit=' + foodCount, function(food) {//using route to make 
   //the AJAX call and also passing the parameter value for the limit query.
   
       $("#goodFood").empty();
       
       for (var i=0;i<food.length;i++) {
           var list = document.createElement('Li');//create a List item
           list.innerHTML = food[i];//populate the Li
			$('#goodFood').append(list);//append for each run
			
       }
     });  
});

$('#restaurant').click(function(event) {
     event.preventDefault();
     
     var restaurantCount = $('#restaurantCount').val();
     console.log(restaurantCount);
     $.get('/suggestionForGoodRestaurants?cnt=' + restaurantCount, function(restaurants) {
        $("#goodRestaurant").empty();
        for (var i=0; i<restaurants.length; i++) {
            var list = document.createElement('Li');
            list.innerHTML = restaurants[i];
                $('#goodRestaurant').append(list);
        }
        
    });
});*/

//Level4

$(document).ready(function() {//gets the foodlist from the server which another user has entered when the page is refreshed
    $.ajax({ 
        type:'GET',url:'/init'
    }).done(function(foodList){
        populateList(foodList);
    });
});

function populateList(foodList) {
    $('#list').empty();
        for (var i=0; i<foodList.length; i++) {
            var listItem = document.createElement('li');//create a li
            listItem.innerHTML = foodList[i];//populate the dropdown
            $('#list').append(listItem);//append for each run
        }    
}

$('#suggestion').submit(function(event) {
    event.preventDefault();
    var form = $(this);
    var foodData = form.serialize();//create url encoded key value pair for all
    //the elements in the form
    //console.log(foodData);
    $.ajax({
       type:'GET',url:'/add',data:foodData
    }).done(function(foodList){//foodList from (app4.js) server is sent to browser. 
        //console.log(newItem);
        populateList(foodList);//call the function here
        form.trigger('reset');//empty the form
   });
 });


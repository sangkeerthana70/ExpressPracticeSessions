/*global $ */

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
});
    
       
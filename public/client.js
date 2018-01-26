/*global $ */

$('#food').click(function(event) {
     event.preventDefault();
   $.get('/suggestionForGoodFood', function(food) {//using route to make the AJAX call.
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
     $.get('/suggestionForGoodRestaurants', function(restaurants) {
        $("#goodRestaurant").empty();
        for (var i=0; i<restaurants.length; i++) {
            var list = document.createElement('Li');
            list.innerHTML = restaurants[i];
                $('#goodRestaurant').append(list);
        }
        
    });
});
    
       
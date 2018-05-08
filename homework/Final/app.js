$(document).ready(function(){
    $(".embolden > li").each(function(){
        $(this).click(function(){
            $(".embolden > li").css('font-weight','normal');
            $(this).css('font-weight','bold');
        });
    });
});


// $.ajax({
//   type: 'GET',
//   url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json',
//   success: function(element) {
//   	console.log(element)
//   },
//   headers: {
//     "Authorization": "Bearer " + "AIzaSyD9VmgKeL2MWwxRSDYpMRiHvY92k8LgNg0"
//   },
// 	xhrFields: { withCredentials: true }
// });


// As a user
// When I change my selection
// I expect the background image to change into the image of my selection

$('#city-type').change(function () {
	var city = $('#city-type').val();

	$('body').removeClass();

	$('body').addClass(city)
});

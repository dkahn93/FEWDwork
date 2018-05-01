// As a user
// When I change my selection
// I expect the background image to change into the image of my selection
$("#city-type").change(changeCity);

function changeCity() {
	var userSelection = $("#city-type").val();

$("body").css(background,"../images/" + userSelection + ".jpg)")
}
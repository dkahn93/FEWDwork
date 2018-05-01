// As a user
// When I enter a number into the input and submit
// I expect the new entry to appear in the table
var total = 0;
$("#entry").submit(addPrice);

function addPrice(event) {
	event.preventDefault()
	var price = $("#newEntry").val()
	$("#entries").append("<tr>" + "<td>" + price + "</td>" + "</tr>");
	total+=parseInt(price);
	$("#total").html("$" + total);


}
// As a user
// When I enter a number into the input and submit
// I expect the total to be updated as the sum all of the entries

// As a user
// When I enter a number into the input and submit
// I expect the input to be cleared

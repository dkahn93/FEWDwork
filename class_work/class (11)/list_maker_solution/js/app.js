// As a user
// When I enter an item in the input and click the button
// I expect to see a new item in the list

// As a user
// Once I have added an item to the list
// I expect the input to be empty

// Bonus:

// As a user
// Once I have added an item to the list
// I expect the prompt to be focused on the input

// Harder Bonus:

// As a user
// When I try to add a blank item
// I expect to see an alert telling me to add an item

// Legendary Bonus:

// As a user
// When I click on an item I have already added
// I expect it to be removed from the list

$('#clickme').click(function () {

  var newItem = $('#item').val();

  if (newItem.length === 0) {

    alert("You must enter a value, silly!");

  } else {

    $("#list").append("<li>" + newItem + "</li>");

    // add click event for newly created list item

    $("li").click(function(event) {
      $(event.currentTarget).remove();
    });
  }

  $('#item')
    .focus()
    .val('');
});

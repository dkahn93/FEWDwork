// As a user
// When I enter a number into the input and submit
// I expect the new entry to appear in the table

// As a user
// When I enter a number into the input and submit
// I expect the total to be updated as the sum all of the entries

// As a user
// When I enter a number into the input and submit
// I expect the input to be cleared

var total = 0;

$('#entry').submit(function (event) {
  event.preventDefault();

  var currentValue = $('#newEntry').val();

  // what else could I use here instead of parseInt?

  var newEntry = parseInt(currentValue);

  $('#entries').append('<tr><td></td><td>' + newEntry + '</td></tr>');

  total = total + newEntry

    $('#total').html('$' + total)

    $('#newEntry').val('')
});

// Two bugs we can fix:

// what happens if I enter a value like "hello"?

// what happens if I enter nothing in the input?

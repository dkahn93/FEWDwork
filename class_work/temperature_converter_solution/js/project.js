$("#farenheit").on("keyup", convert);
$("#celsius").on("keyup", convert);

function convert(event) {
  var $currentElement = $(event.target);
  var temp = $currentElement.val();

  if ($currentElement.attr("id") == "farenheit") {
    var celsius = (temp - 32) * (5/9);

    $("#celsius").val(celsius);
    $("body").css("background-color", "lightblue")
  } else {
    var faren = temp * (9/5) + 32;

    $("#farenheit").val(faren);
    $("body").css("background-color", "lightpink")

  }
}
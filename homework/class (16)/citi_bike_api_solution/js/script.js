// As a User
// When I visit the site
// I expect to see the names of the all the stations

// As a User
// When I visit the site
// I expect to see only the first fifty stations on the list

// As a User
// When I visit the site
// I expect to see fifty stations with free bikes only

// Bonus

// As a User
// I want to get data from the newer API instead: https://api.citybik.es/v2/networks/citi-bike-nyc
// So that I can get the most accurate results

// Unreal, Super Epic Bonus

// As a User
// When I select "number of free bikes" from a dropdown
// I see fifty stations where the "number of free bikes" is greater than my selection


// $.ajax({
//   type: 'GET',
//   url: 'http://api.citybik.es/citi-bike-nyc.json',
//   success: function (stations) {
//     var freeStations = stations.filter(function(station) {
//       return station.free > 0;
//     });

//     var topFifty = freeStations.splice(0, 50);

//     topFifty.forEach(function(station) {
//       var stationName = station.name;
//       var numberFree = station.free;

//       $(".bikes").append("<li>" + stationName + ": " + numberFree + "</li>")
//     });
//   },
// });


// Bonus Solution:

// $.ajax({
//     type: 'GET',
//     url: 'https://api.citybik.es/v2/networks/citi-bike-nyc',
//     success: function (resp) {
//       var stations = resp.network.stations;

//       var freeStations = stations.filter(function(station) {
//         return station.free_bikes > 0;
//       });

//       var topTen = freeStations.splice(0, 50);

//       topTen.forEach(function(station) {
//         var stationName = station.name;
//         var numberFree = station.free_bikes;

//         $(".bikes").append("<li>" + stationName + ": " + numberFree + "</li>")
//       });
//   },
// });

// Unreal, Super Epic Bonus

$.ajax({
  type: 'GET',
  url: 'http://api.citybik.es/citi-bike-nyc.json',
  success: function (stations) {
    var freeStations = stations.filter(function(station) {
      return station.free > 0;
    });

    var topTen = freeStations.splice(0, 50);

    topTen.forEach(function(station) {
      var stationName = station.name;
      var numberFree = station.free;

      $(".bikes").append("<li>" + stationName + ": " + numberFree + "</li>")
    });
  },
});

$(".free-bikes").change(updateList)

function updateList(event) {
  var value = $(event.currentTarget).val();

  $.ajax({
    type: 'GET',
    url: 'http://api.citybik.es/citi-bike-nyc.json',
    success: function (stations) {
      $(".bikes").empty();

      var freeStations = stations.filter(function(station) {
        return station.free > parseInt(value);
      });

      var topFifty = freeStations.splice(0, 50);

      topFifty.forEach(function(station) {
        var stationName = station.name;
        var numberFree = station.free;

        $(".bikes").append("<li>" + stationName + ": " + numberFree + "</li>")
      });
    },
  });
}

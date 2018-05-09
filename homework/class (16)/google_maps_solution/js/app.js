// As a User
// When I view the site
// I see a map

// As a User
// When I view the site
// I expect to only see NYC

// As a User
// When I view the site
// I want to see a marker on NYC

// Bonus:

// As a User
// When I view the map
// I want to see the terrain view

// More Bonus:

// As a User
// When I press a button
// I see 3 markers appear on the map

// Unbelievable, Seriously???? Bonus

// As a User
// When I view the site
// All the CitiBike stations appear on the map as markers

// Hint: Make sure to use this URL: https://api.citybik.es/v2/networks/citi-bike-nyc

// Homework:

// function initMap() {
//   var mapElem = document.getElementById("map");
//   var nyc = {lat: 40.7128, lng: -74.0060};

//   var map = new google.maps.Map(mapElem, {
//     zoom: 13,
//     center: nyc
//   });

//   var marker = new google.maps.Marker({
//     position: nyc,
//     map: map
//   });
// }

// Bonus:

// function initMap() {
//   var mapElem = document.getElementById("map");
//   var nyc = {lat: 40.7128, lng: -74.0060};

//   var map = new google.maps.Map(mapElem, {
//     zoom: 13,
//     center: nyc,
//     mapTypeId: "terrain"
//   });

//   var marker = new google.maps.Marker({
//     position: nyc,
//     map: map
//   });

  $(".markers-button").click(function(){
    new google.maps.Marker({
      position: {lat: 40.7228, lng: -74.0060},
      map: map
    });
    new google.maps.Marker({
      position: {lat: 40.7328, lng: -74.0060},
      map: map
    });
    new google.maps.Marker({
      position: {lat: 40.7028, lng: -74.0060},
      map: map
    });
  })
}

// Unbelievable, Seriously???? Bonus

// function initMap() {
//   var mapElem = document.getElementById("map");
//   var nyc = {lat: 40.7128, lng: -74.0060};

//   var map = new google.maps.Map(mapElem, {
//     zoom: 13,
//     center: nyc,
//     mapTypeId: "terrain"
//   });

//   $.ajax({
//       type: 'GET',
//       url: 'https://api.citybik.es/v2/networks/citi-bike-nyc',
//       success: function (resp) {

//       resp.network.stations.forEach(dropMarker)

//       function dropMarker(station) {
//         new google.maps.Marker({
//           position: {lat: station.latitude, lng: station.longitude},
//           map: map
//         });
//       }
//     },
//   });

//   $(".markers-button").click(function(){
//     new google.maps.Marker({
//       position: {lat: 40.7228, lng: -74.0060},
//       map: map
//     });
//     new google.maps.Marker({
//       position: {lat: 40.7328, lng: -74.0060},
//       map: map
//     });
//     new google.maps.Marker({
//       position: {lat: 40.7028, lng: -74.0060},
//       map: map
//     });
//   })
// }

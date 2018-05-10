
var map, infoWindow;
function initMap() {



        var mapStyle = [

              	{elementType: 'geometry', stylers: [{color: '#AFE9A1'}]},
              	{elementType: 'labels.text.fill', stylers: [{color: '#2E611F'}]},

                {featureType: 'poi.park',
                elementType: 'geometry.fill',
                stylers: [{color: '#26CE00'}]
              },
              {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{color: '#447530'}]
              },
              {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#C9FBBB'}]
              },
              
              {
                featureType: 'water',
                elementType: 'geometry.fill',
                stylers: [{color: '#029A7D'}]
              },
              {
                featureType: "poi",
                elementType: "labels",
                stylers: [
              { visibility: "off" }]
              },
              {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{color: '#0377a5'}]
              }
            ];
            


        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 40.7654898, lng: -73.9373333},
          zoom: 13,
          styles: mapStyle,
          fullscreenControl: false,
          mapTypeControl: true,
    	  mapTypeControlOptions: {
        	style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        	position: google.maps.ControlPosition.LEFT_BOTTOM
    		}
        });

         
      $.ajax({
      type: 'GET',
      dataType:'json',
      url: 'https://raw.githubusercontent.com/dkahn93/dkahn93.github.io/master/homework/Final/drinking_fountains.json',
      success: function (waterFountains) {
console.log(waterFountains)
      waterFountains.elements.forEach(dropMarker)

      function dropMarker(waterFountain) {
        new google.maps.Marker({
          position: {lat: elements.lat, lng: elements.lon},
          map: map
        });
      }
    },
  })

      // Data for the markers consisting of a name, a LatLng and a zIndex for the
      // order in which these markers should display on top of each other.
      
      // var waterfountains = [
      //   [40.798000, -73.952479],
      //   [40.796809, -73.950002],
      //   [40.794512, -73.951359],
      //   [40.794231, -73.952575],
      //   [40.793577, -73.953051],
      //   [40.794231, -73.952575],
      //   [40.793577, -73.953051],
      //   [40.792869, -73.954309],
      //   [40.793034, -73.955495],
      //   [40.792007, -73.955856],
      //   [40.791532, -73.955416],
      //   [40.790564, -73.954686],
      //   [40.790086, -73.954456],
      //   [40.790104, -73.954451],
      //   [40.79023792172633, -73.95766062088958],
      //   [40.790803, -73.959531],
      //   [40.79080348614056, -73.95953094076155],
      //   [40.792024, -73.961296],
      //   [40.792095, -73.959755],
      //   [40.793547, -73.960607],
      //   [40.791643, -73.958266],
      //   [40.792319, -73.963266]

      // ];
// $("#waterFountains").click(setMarkers)
//       function setMarkers() {
//         // Adds markers to the map.

//         // Marker sizes are expressed as a Size of X,Y where the origin of the image
//         // (0,0) is located in the top left of the image.

//         // Origins, anchor positions and coordinates of the marker increase in the X
//         // direction to the right and in the Y direction down.
//         var image = {
//           url: 'img/drinking-water.png',
//           // This marker is 20 pixels wide by 32 pixels high.
//           size: new google.maps.Size(20, 24),
//           // The origin for this image is (0, 0).
//           origin: new google.maps.Point(0, 0),
//           // The anchor for this image is the base of the flagpole at (0, 32).
//           anchor: new google.maps.Point(0, 24)
//         };
//         // Shapes define the clickable region of the icon. The type defines an HTML
//         // <area> element 'poly' which traces out a polygon as a series of X,Y points.
//         // The final coordinate closes the poly by connecting to the first coordinate.
//         var shape = {
//           coords: [1, 1, 1, 20, 18, 20, 18, 1],
//           type: 'poly'
//         };
//         for (var i = 0; i < waterfountains.length; i++) {
//           var waterfountain = waterfountains[i];
//           var marker = new google.maps.Marker({
//             position: {lat: waterfountain[0], lng: waterfountain[1]},
//             map: map,
//             icon: image,
//             shape: shape,
//           });
//         }
//       }
//         infoWindow = new google.maps.InfoWindow;

//         // Try HTML5 geolocation.
//         if (navigator.geolocation) {
//           navigator.geolocation.getCurrentPosition(function(position) {
//             var pos = {
//               lat: position.coords.latitude,
//               lng: position.coords.longitude
//             };

//             infoWindow.setPosition(pos);
//             infoWindow.setContent('You are here!');
//             infoWindow.open(map);
//             map.setCenter(pos);
//           }, function() {
//             handleLocationError(true, infoWindow, map.getCenter());
//           });
//         } else {
//           // Browser doesn't support Geolocation
//           handleLocationError(false, infoWindow, map.getCenter());
//         }
//       }

//       function handleLocationError(browserHasGeolocation, infoWindow, pos) {
//         infoWindow.setPosition(pos);
//         infoWindow.setContent(browserHasGeolocation ?
//                               'Error: The Geolocation service failed.' :
//                               'Error: Your browser doesn\'t support geolocation.');
//         infoWindow.open(map);
  }


var markers = [];
      // This global polygon variable is to ensure only ONE polygon is rendered.
      var polygon = null;
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
      var markers = []
     $("#waterFountains").click(setMarkers)
      function setMarkers() {  
      if (markers.length > 0) {
        //remove markers
        markers.forEach(removeMarker)
       function removeMarker(marker) {
          marker.setMap(null);
       }
       markers = []
      }
      else {

      $.ajax({
      type: 'GET',
      dataType:'json',
      url: 'https://raw.githubusercontent.com/dkahn93/dkahn93.github.io/master/homework/Final/drinking_fountains.json',
      success: function (waterFountains) {

      waterFountains.elements.forEach(dropMarker)

      function dropMarker(waterFountain) {
        var marker = new google.maps.Marker({
          position: {lat: waterFountain.lat, lng: waterFountain.lon},
          map: map,
          icon: defaultIcon
              });
        markers.push(marker)
            }
          },
        })
      }

var defaultIcon = makeMarkerIcon('0091ff');
        // Create a "highlighted location" marker color for when the user
        // mouses over the marker.
        var highlightedIcon = makeMarkerIcon('FFFF24');
        // The following group uses the location array to create an array of markers on initialize.
        for (var i = 0; i < locations.length; i++) {
          // Get the position from the location array.
          var position = locations[i].location;
          var title = locations[i].title;
          // Create a marker per location, and put into markers array.
          var marker = new google.maps.Marker({
            position: position,
            title: title,
            animation: google.maps.Animation.DROP,
            icon: defaultIcon,
            id: i
          });
          // Push the marker to our array of markers.
          markers.push(marker);
          // Create an onclick event to open the large infowindow at each marker.
          marker.addListener('click', function() {
            populateInfoWindow(this, largeInfowindow);
          });
          // Two event listeners - one for mouseover, one for mouseout,
          // to change the colors back and forth.
          marker.addListener('mouseover', function() {
            this.setIcon(highlightedIcon);
          });
          marker.addListener('mouseout', function() {
            this.setIcon(defaultIcon);
          });
        }
}

        infoWindow = new google.maps.InfoWindow;

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
console.log(pos)
            infoWindow.setPosition(pos);
            infoWindow.setContent('You are here!');
            infoWindow.open(map);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);






}
  

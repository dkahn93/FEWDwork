var markers = [];
// This global polygon variable is to ensure only ONE polygon is rendered.
var polygon = null;
var map, infoWindow;



function initMap() {



    var mapStyle = [

        {
            elementType: 'geometry',
            stylers: [{
                color: '#AFE9A1'
            }]
        },
        {
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#2E611F'
            }]
        },

        {
            featureType: 'poi.park',
            elementType: 'geometry.fill',
            stylers: [{
                color: '#26CE00'
            }]
        },
        {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#447530'
            }]
        },
        {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{
                color: '#C9FBBB'
            }]
        },

        {
            featureType: 'water',
            elementType: 'geometry.fill',
            stylers: [{
                color: '#029A7D'
            }]
        },
        {
            featureType: "poi",
            elementType: "labels",
            stylers: [{
                visibility: "off"
            }]
        },
        {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#0377a5'
            }]
        }
    ];



    var map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 40.7654898,
            lng: -73.9373333
        },
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

    $("#waterFountains").click(setWaterMarkers)
    $("#eRecycling").click(seteMarkers)
    $("#foodCoops").click(setCoopMarkers)

    function setWaterMarkers() {
        if (markers.length > 0) {
            //remove markers
            markers.forEach(removeWaterMarker)

            function removeWaterMarker(marker) {
                marker.setMap(null);
            }
            markers = []
        }

        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: 'https://raw.githubusercontent.com/dkahn93/dkahn93.github.io/master/homework/Final/drinking_fountains.json',
            success: function(waterFountains) {

                waterFountains.elements.forEach(dropMarker)

                function dropMarker(waterFountain) {
                    var contentString = '<h4 style="color:teal;">Drink Up!</h4></br><a href="http://maps.google.com/?q=' + waterFountain.lat + ',' + waterFountain.lon + '" style="text-decoration:none;">Get Directions</a>';
                    var infowindow = new google.maps.InfoWindow({
                    content: contentString
                    });
                    var marker = new google.maps.Marker({
                        position: {
                            lat: waterFountain.lat,
                            lng: waterFountain.lon
                        },
                        map: map,
                        icon: 'img/water-drop.png',
                        animation: google.maps.Animation.DROP
                    });
                    markers.push(marker)
                    marker.addListener('click', function() {
                    infowindow.open(map, marker);
                  });

                }

            },
        })


    }

    function seteMarkers() {
        if (markers.length > 0) {
            //remove markers
            markers.forEach(removeeMarker)

            function removeeMarker(marker) {
                marker.setMap(null);
            }
            markers = []
        }

        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: 'https://data.cityofnewyork.us/resource/x9rb-8qrt.json',
            success: function(eStations) {

                eStations.forEach(dropMarker)
                // var infowindow = new google.maps.InfoWindow({
                //   content: eStation.location
                //   });
                 

                function dropMarker(eStation) {
                  var contentString = '<h4 style=color:green;>' + eStation.dropoff_sitename + '</h4></br><a href = "http://maps.google.com/?q=' + eStation.location + '"style="text-decoration:none";>' + eStation.location + '</p></a>';
                  var infowindow = new google.maps.InfoWindow({
                    content: contentString
                  });

                    var marker = new google.maps.Marker({
                        position: {
                            lat: parseFloat(eStation.latitude),
                            lng: parseFloat(eStation.longitude)
                        },
                        map: map,
                        icon: 'img/phone-icon.png',
                        animation: google.maps.Animation.DROP,
                        title: eStation.location

                    });

                    markers.push(marker)
                    marker.addListener('click', function() {
                    infowindow.open(map, marker);
                  });
                    // google.maps.event.addListener(marker, 'click', (function(marker) {
                    //     return function() {
                    //         infowindow.setContent(eStation.location);
                    //         infowindow.open(map, marker);
                    //     }
                    // })(marker))

                    //                         google.maps.event.addListener(marker, 'click', function() {
                    //   infowindow.open(map,marker);
                    // })

                }

            },

        })


    }

    function setCoopMarkers() {
        if (markers.length > 0) {
            //remove markers
            markers.forEach(removeCoopMarker)

            function removeCoopMarker(marker) {
                marker.setMap(null);
            }
            markers = []
        }
        var locations = [
            ['<a href="https://4thstreetfoodcoop.org">4th Street Food Coop</a></br> 58 E 4th St</br>New York, NY 10003<div style="padding-top:20px"><a href="https://goo.gl/maps/Gfv2X98FkeA2">Directions</a></div>', 40.7265971, -73.9908374, 1],
            ['<a href="http://flatbushfood.coop">Flatbush Food Coop</a></br>5605, 1415 Cortelyou Rd</br>Brooklyn, NY 11226<div style="padding-top:20px"><a href="https://goo.gl/maps/aBExcHJxbVP2">Directions</a></div>', 40.6412976, -73.9669086, 2],
            ['<a href="https://www.foodcoop.com">Park Slope Food Coop</a> (Members-only)</br>782 Union St</br>Brooklyn, NY 11215<div style="padding-top:20px"><a href="https://goo.gl/maps/5t3gQU4EtPS2">Directions</a></div>', 40.6748629, -73.9789982, 3],
            ['<a href="https://www.bushwickfoodcoop.org">Bushwick Food Cooperative</a> (Members-only)</br>2 Porter Ave</br>Brooklyn, NY 11237</br><p style="color: gray">Located in: Shops at the Loom<div style="padding-top:20px"><a href="https://goo.gl/maps/VqLu89qzzW22">Directions</a></div>', 40.7050867, -73.9304345, 4],
            ['<a href="http://www.greenehillfood.coop">Greene Hill Food Coop</a> (Members-only)</br>1083 Fulton St</br>Brooklyn, NY 11238<div style="padding-top:20px"><a href="https://goo.gl/maps/soQTzrJfaHB2">Directions</a></div>', 40.6818928, -73.9605347, 5]
        ];


        var infowindow = new google.maps.InfoWindow;

        var marker, i;

        for (i = 0; i < locations.length; i++) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                map: map,
                icon: 'img/leaf-icon.png',
                animation: google.maps.Animation.DROP
            });
            markers.push(marker)
            google.maps.event.addListener(marker, 'click', (function(marker, i) {
                return function() {
                    infowindow.setContent(locations[i][0]);
                    infowindow.open(map, marker);
                }
            })(marker, i));
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

            infoWindow.setPosition(pos);
            infoWindow.setContent('<p style="font-weight:bold;color:green;margin:0;">You are here!</p>');
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

// function autoUpdate() {
//   navigator.geolocation.getCurrentPosition(function(position) {  
//     var newPoint = new google.maps.LatLng(position.coords.latitude, 
//                                           position.coords.longitude);

//     if (marker) {
//       // Marker already created - Move it
//       marker.setPosition(newPoint);
//     }
//     else {
//       // Marker does not exist - Create it
//       marker = new google.maps.Marker({
//         position: newPoint,
//         map: map
//       });
//     }

//     // Center the map on the new position
//     map.setCenter(newPoint);
//   }); 

//   // Call the autoUpdate() function every 5 seconds
//   watchPosition(autoUpdate, 5000);
// }

// autoUpdate();

}


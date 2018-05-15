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

    function setWaterMarkers() {
        if (markers.length > 0) {
            //remove markers
            markers.forEach(removeWaterMarker)

            function removeWaterMarker(marker) {
                marker.setMap(null);
            }
            markers = []
        } else {

            $.ajax({
                type: 'GET',
                dataType: 'json',
                url: 'https://raw.githubusercontent.com/dkahn93/dkahn93.github.io/master/homework/Final/drinking_fountains.json',
                success: function(waterFountains) {

                    waterFountains.elements.forEach(dropMarker)

                    function dropMarker(waterFountain) {
                        var marker = new google.maps.Marker({
                            position: {
                                lat: waterFountain.lat,
                                lng: waterFountain.lon
                            },
                            map: map,
                            icon: 'img/water-drop.png'
                        });
                        markers.push(marker)
                       

                    }

                },
            })
        }

    }

    function seteMarkers() {
        if (markers.length > 0) {
            //remove markers
            markers.forEach(removeeMarker)

            function removeeMarker(marker) {
                marker.setMap(null);
            }
            markers = []
        } else {

            $.ajax({
                type: 'GET',
                dataType: 'json',
                url: 'https://data.cityofnewyork.us/resource/x9rb-8qrt.json',
                success: function(eStations) {

                    eStations.forEach(dropMarker)

                    function dropMarker(eStation) {
                      console.log(eStation)
                        var marker = new google.maps.Marker({
                            position: {
                                lat: parseInt(eStation.latitude),
                                lng: parseInt(eStation.longitude)
                            },
                            map: map,
                            icon: 'img/water-drop.png'
                        });
                        markers.push(marker)
                       

                    }

                },
            })
        }

    }

    



}
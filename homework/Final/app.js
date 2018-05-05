function initMap() {

        // Create a new StyledMapType object, passing it an array of styles,
        // and the name to be displayed on the map type control.
        var styledMapType = new google.maps.StyledMapType(
            [
              {elementType: 'geometry', stylers: [{color: '#D6D6D6'}]},
              {elementType: 'labels.text.fill', stylers: [{color: '#1F5233'}]},
              {elementType: 'labels.text.stroke', stylers: [{color: '#f5f1e6'}]},
              
              {
                featureType: 'poi.park',
                elementType: 'geometry.fill',
                stylers: [{color: '#2abe09'}]
              },
              {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{color: '#447530'}]
              },
              {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#FFFFFF'}]
              },
              
              {
                featureType: 'water',
                elementType: 'geometry.fill',
                stylers: [{color: '#002df5'}]
              },

              {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{color: '#40DF96'}]
              }
            ],
            {name: 'Styled Map'});

        // Create a map object, and include the MapTypeId to add
        // to the map type control.
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 40.7723075, lng: -73.8894821},
          zoom: 12,
          mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                    'styled_map']
          }
        });

        //Associate the styled map with the MapTypeId and set it to display.
        map.mapTypes.set('styled_map', styledMapType);
        map.setMapTypeId('styled_map');
      }
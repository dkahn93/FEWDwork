// As a User
// When I view the site
// I see a map
      function initMap() {
      	var NewYorkCity = {lat: 40.763750, lng: -73.9919926};
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 40.7461231, lng: -73.9919926},
          zoom: 12.5,
          mapTypeId: 'terrain'
        });

        var bikeLayer = new google.maps.BicyclingLayer();
        bikeLayer.setMap(map);

        var marker = new google.maps.Marker({
          position: NewYorkCity,
          map: map,
        });
      }
      
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
// All the CitiBike NYC stations appear on the map as markers

// Hint: Make sure to use this URL: https://api.citybik.es/v2/networks/citi-bike-nyc
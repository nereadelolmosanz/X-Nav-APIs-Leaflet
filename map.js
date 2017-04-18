$(document).ready(function() {
    // create a map in the "map" div, set the view to a given place and zoom

    var mymap = L.map('mapid').setView([51.505, -0.09], 13);
	// add an OpenStreetMap tile layer
	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(mymap);

	//add popup
	L.marker([51.5, -0.09]).addTo(mymap)
		.bindPopup('Popup inicial')
		.openPopup();
  

	//location
	function onLocationFound(e) {
		var radius = e.accuracy / 2;

		L.marker(e.latlng).addTo(mymap)
			.bindPopup("You are within " + radius + " meters from this point")
			.openPopup();
		L.circle(e.latlng, radius).addTo(mymap);
	}

	//location error
	function onLocationError(e) {
		alert(e.message);
	}

	//click 
	function onMapClick(e) {

		L.marker([e.latlng.lat, e.latlng.lng]).addTo(mymap)
			.bindPopup(e.latlng.lat +", "+ e.latlng.lng)
			.openPopup();
	}

	mymap.on('locationfound', onLocationFound);
	mymap.on('locationerror', onLocationError);
	mymap.locate({setView: true, maxZoom: 16});
	mymap.on('click', onMapClick);


	

	


});

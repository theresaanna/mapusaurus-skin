$(document).ready(function() {
    var drawMap = function(censusjson) {
        var census = JSON.parse(censusjson),
            lat = parseFloat(census.features[0].properties.intptlat),
            lon = parseFloat(census.features[0].properties.intptlon),
            map,
            tract;
        console.log(census);

        map = L.map('map').setView([lat, lon], 12);
        L.tileLayer('http://a.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
        new L.GeoJSON(census).addTo(map);
    };

    $.ajax({
        url: 'maps-results/formatted_smaller_tracts.geojson',
        success: drawMap
    });
});

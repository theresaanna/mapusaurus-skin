$(document).ready(function() {
    var drawMap = function(censusjson) {
        var census = JSON.parse(censusjson),
            lat = parseFloat(census.features[0].properties.intptlat),
            lon = parseFloat(census.features[0].properties.intptlon),
            map,
            tract;
        console.log(census);

        map = L.map('map').setView([lat, lon], 13);
        L.tileLayer('http://a.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
        tract = L.polygon(census.features[0].geometry.coordinates[0][0]).addTo(map);
        L.marker([lat, lon]).addTo(map);
    };

    $.ajax({
        url: 'maps-results/formatted_smaller_tracts.geojson',
        success: drawMap
    });
});

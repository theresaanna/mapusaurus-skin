$(document).ready(function() {
    var drawMap = function(censusjson) {
        var census = JSON.parse(censusjson),
            lat = parseFloat(census.features[0].properties.intptlat),
            lon = parseFloat(census.features[0].properties.intptlon),
            map;
        console.log(census);

        map = L.map('map').setView([lat, lon], 13);
    };

    $.ajax({
        url: 'maps-results/formatted_smaller_tracts.geojson',
        success: drawMap
    });
});

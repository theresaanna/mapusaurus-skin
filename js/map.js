$(document).ready(function() {
    $.ajax({
        url: 'maps-results/formatted_smaller_tracts.geojson',
        dataType: 'jsonp'     
    });
});

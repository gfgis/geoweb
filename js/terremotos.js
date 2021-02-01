{
    "earthquakes": [
        {
            "datetime": "2011-03-11 04:46:23",
            "depth": 24.4,
            "lng": 142.369,
            "src": "us",
            "eqid": "c0001xgp",
            "magnitude": 8.8,
            "lat": 38.322
        },
        {
            "datetime": "2012-04-11 06:38:37",
            "depth": 22.9,
            "lng": 93.0632,
            "src": "us",
            "eqid": "c000905e",
            "magnitude": 8.6,
            "lat": 2.311
        },
        {
            "datetime": "2007-09-12 09:10:26",
            "depth": 30,
            "lng": 101.3815,
            "src": "us",
            "eqid": "2007hear",
            "magnitude": 8.4,
            "lat": -4.5172
        }

    ]
}

function terremotosGeonamesToGeoJSON(respuestaGeonames) {

    var geoJSON = {
        "type": "FeatureCollection",
        "features": []
    };

    for (var i = 0; i < respuestaGeonames.earthquakes.length; i++) {

        geoJSON.features.push(
            {
                "type": "Feature",
                "properties": {
                    "magnitude": respuestaGeonames.earthquakes[i].magnitude,
                    "datetime": respuestaGeonames.earthquakes[i].datetime
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        respuestaGeonames.earthquakes[i].lng,
                        respuestaGeonames.earthquakes[i].lat
                    ]
                }
            }
        );

    } //fin loop

    return geoJSON;

} //fin funcion
function generarPeticionTerremotos() {

    var peticion = 'https://secure.geonames.org/earthquakesJSON?' +
        'north=' + map.getBounds()._ne.lat + '&' +
        'south=' + map.getBounds()._sw.lat + '&' +
        'east=' + map.getBounds()._ne.lng + '&' +
        'west=' + map.getBounds()._sw.lng + '&' +
        'maxRows=50&' +
        'minMagnitude=5&' +
        'username=masterupc&';
    //date : 'yyyy-MM-d

    enviarPeticion(peticion).then(function (respuestaGeonames) {

        var geoJSON = terremotosGeonamesToGeoJSON(respuestaGeonames);

        if (!map.getSource("terremotos_source")) {

            map.addSource("terremotos_source", {
                type: "geojson",
                data: geoJSON
            });

            map.addLayer({
                'id': 'terremotos',
                'type': 'circle',
                'source': 'terremotos_source',
                'paint': {
                    'circle-color': [
                        'interpolate',
                        ['linear'],
                        ['get', 'magnitude'],
                        3, '#ebe709',
                        5, '#eb1809',
                        7, '#ef4bf2',
                    ],
                    'circle-opacity': 0.75,
                    'circle-radius': [
                        'interpolate',
                        ['linear'], ['get', 'magnitude'],
                        3, 8,
                        5, 16,
                        8, 32
                    ]
                }
            });

            map.addLayer({
                'id': 'terremotos-textos',
                'type': 'symbol',
                'source': 'terremotos_source',
                'layout': {
                    'text-field': [
                        'format', ['get', 'magnitude'],
                    ],
                    'text-size': 10
                },
                'paint': {
                    'text-color': 'rgba(255,255,255,1)'
                }
            });


        } else {

            map.getSource("terremotos_source").setData(geoJSON);

        }

    });

} // fin funcion
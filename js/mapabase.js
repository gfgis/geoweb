
var map, osm, esri, terreno, OpenTopoMap;
var controlCapas;
var controlEscala;

function init() {
    map = L.map('map').setView([41.6863, 1.8382], 8);

    var hibrid =L.layerGroup();
    var osm2= L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        minZoom: 1,
        attribution: 'OSM'
    }).addTo(hibrid);
    var OpenTopoMap2= L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
            maxZoom: 17,
        attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
    }).addTo(hibrid);

    esri = L.tileLayer(
        'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        maxZoom: 17,
        minZoom: 1,
        attribution: 'Tiles © Esri',
    }).addTo(map);

    osm = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        minZoom: 1,
        attribution: 'OSM'
    });

    terreno =
        L.tileLayer('http://{s}.tile.stamen.com/terrain-background/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: 'Stamen terrain',
            opacity: 0.5
        });
        OpenTopoMap = 
    L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
            maxZoom: 17,
        attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
        
}).addTo(map);


    var baseMaps = {
        "Orto_esri": esri,
        "Mapa_osm": osm,
        "OpenTopoMap":OpenTopoMap,
        'Hibrid': hibrid,
    };
    var overlayMaps = {
        "Terrain": terreno
    };
    

    controlCapas = L.control.layers(baseMaps, overlayMaps);
    controlCapas.addTo(map);

    controlEscala = L.control.scale();
    controlEscala.addTo(map);
}

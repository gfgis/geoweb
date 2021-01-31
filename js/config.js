var config = {
    style: 'mapbox://styles/mapbox/satellite-v9',
    accessToken: 'pk.eyJ1IjoiZ2l1bHMwOTE3IiwiYSI6ImNranlqM2RpYzBzMTcybm53NDcyMHhleWwifQ.qqOs_Y1d36x-WQYI_sww5g',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'dark',
    use3dTerrain: true,
    title: 'Volcanes',
    subtitle: 'Los principales volcanes activos del mundo',
    byline: 'M2B ',
    footer: 'Source: Wikipedia',
    chapters: [
        {
            id: 'volcan1',
            alignment: 'left',
            hidden: false,
            title: 'Eyjafjallajökull, Islandia',
            image: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Eyjafjallaj%C3%B6kull_first_crater_20100329.jpg',
            description: 'También conocido como Eyjafjöll,2​ o Eyjafjalla,3​ es un volcán situado al norte de Skógar, en la región de Suðurland, al sur de Islandia.4​ Tiene entre 1651 m y 1666 m de altitud,​ y ha estado moderadamente activo en los últimos 8000 años.',
            location: {
                center: [-19.62, 63.63],
                zoom: 13.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },{
    id: 'volcan2',
    alignment: 'right',
    hidden: false,
    title: 'Monte Vesubio, Italia',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Cr%C3%A1ter_del_Vesubio.jpg',
    description: 'Es un volcán activo del tipo vesubiano situado frente a la bahía de Nápoles y a unos nueve kilómetros de distancia de la ciudad de Nápoles. Se encuentra en la ciudad metropolitana de Nápoles, perteneciente a la región italiana de la Campania. Tiene una altura máxima de 1281 m s. n. m. y se alza al sur de la cadena principal de los Apeninos.',
    location: {
        center: [14.42555555, 40.82138888],
        zoom: 14.5,
        pitch: 60,
        bearing: -43.2
    },
    mapAnimation: 'flyTo',
    rotateAnimation: true,
    callback: '',
    onChapterEnter: [],
    onChapterExit: []
},
{
    id: 'volcan3',
    alignment: 'right',
    hidden: false,
    title: 'Monte Etna, Italia',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/View_of_Mount_Etna_from_Reggio_Calabria_-_Italy_-_10_Feb._2017_-_%281%29.jpg',
    description: 'El Etna es un volcán activo en la costa este de Sicilia, en el territorio de la Ciudad metropolitana de Catania. Tiene alrededor de 3322 metros de altura, aunque esta varía debido a las constantes erupciones. La montaña es hoy en día 21,6 metros menor que en 1865. Es el volcán activo con mayor altura de la placa Euroasiática, el segundo en referencia a la Europa política después del Teide y la montaña más alta de Italia al sur de los Alpes',
    location: {
        center: [14.990131167328679, 37.752552997891414],
        zoom: 10.5,
        pitch: 60,
        bearing: -10.2
    },
    mapAnimation: 'flyTo',
    rotateAnimation: true,
    callback: '',
    onChapterEnter: [],
    onChapterExit: []
},
{
    id: 'volcan4',
    alignment: 'left',
    hidden: false,
    title: 'Mauna Loa, Hawaï',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Aa_channel_flow_from_Mauna_Loa.jpg',
    description: 'Volcán activo más grande del mundo, con 4170 metros sobre el nivel del mar y que alberga el observatorio Mauna Loa.',
    location: {
        center: [-155.5844024039492, 19.47700117163354],
        zoom: 8.5,
        pitch: 50,
        bearing: -10.2
    },
    mapAnimation: 'flyTo',
    rotateAnimation: true,
    callback: '',
    onChapterEnter: [],
    onChapterExit: []
}]};

let map;
let markers = [];

let locations = [
  { name: "west", lat: 1.35735, lng: 103.7 },
  { name: "national", lat: 0, lng: 0 },
  { name: "east", lat: 1.35735, lng: 103.94 },
  { name: "central", lat: 1.35735, lng: 103.82 },
  { name: "south", lat: 1.29587, lng: 103.82 },
  { name: "north", lat: 1.41803, lng: 103.82 },
];

function initMap() {
    let sgLocation = {lat: 1.3521, lng: 103.8198}

    map = new google.maps.Map(documentElementById("map"),
    {
        center:singaporeLocation,
        zoom: 10
    })

    //add markers when map initialised

    for(let i = 0; i<locations.length; i++){
        let markerPosition = {
            "lat":locations[i].lat,
            "lng":locations[i].lng
        }

        addMarker(markerPosition, locations[i].name, map);

        }
    }


function addMarker(markerPosition, markerTitle, mapReference) {

    let marker = new google.maps.Marker({
        position: markerPosition,
        map: mapReference,
        animation: google.maps.Animation.DROP,
        title: markerTitle
    })
}
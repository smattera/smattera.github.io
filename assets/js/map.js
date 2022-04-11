let map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 32.77929, lng: -89.22484},
    zoom: 8
  });
}

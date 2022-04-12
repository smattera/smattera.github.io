let marker;

function initMap() {
  const map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 32.77929, lng: -89.22484},
    zoom: 15
  });

  const logoImage =
    "../img/markers/fair.png";

  const fairMarker = new google.maps.Marker({
    position: {lat: 59.327, lng: 18.067},
    map,
    icon: logoImage,
    animation: google.maps.Animation.DROP,
  });
}

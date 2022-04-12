let marker;

function initMap() {
  const map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 32.77929, lng: -89.22484},
    zoom: 15
  });

  marker = new google.maps.Marker({
    map,
    draggable: false,
    animation: google.maps.Animation.DROP,
    position: { lat: 59.327, lng: 18.067 },
  });
  marker.addListener("click", toggleBounce);
}

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

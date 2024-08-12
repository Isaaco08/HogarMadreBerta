function initMap() {
  var coord = {lat: 10.0000135, lng: -84.0937367};
  var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 17, // Ajusta según lo necesites
      center: coord
  });
  var marker = new google.maps.Marker({
      position: coord,
      map: map
  });
}
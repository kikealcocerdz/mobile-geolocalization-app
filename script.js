
const mymap = L.map('sample_map').setView([40.741, -3.884], 15);
let latitude;
let longitude;

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
  maxZoom: 18
}).addTo(mymap);

function getLocation(callback) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      callback(latitude, longitude);
    });
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

document.onload = getLocation(function (latitude, longitude) {
  mymap.setView([latitude, longitude], 15);
  L.marker([latitude, longitude]).addTo(mymap)
    .bindPopup('ESTÁS AQUÍ', { className: 'custom-popup' })
    .openPopup();
});



document.getElementById('location').addEventListener('click', function () {
  getLocation(function (latitude, longitude) {
    mymap.setView([latitude, longitude], 15);
    L.marker([latitude, longitude]).addTo(mymap)
      .bindPopup('You are here')
      .openPopup();
  }
  );
  ;
}
);




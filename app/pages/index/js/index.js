require('../css/index.css');

var sayHello = require('../../../shared/js/say_hello');

console.log(sayHello('index page'));

// Add a Mapzen API key
L.Mapzen.apiKey = 'mapzen-ztaLGsF';
// Add a map to the 'map' div
var map = L.Mapzen.map('map');
// Set the center of the map to be the San Francisco Bay Area at zoom level 12
map.setView([64.87, -18.40], 7);

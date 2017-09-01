require('../css/index.css');

L.Mapzen.apiKey = 'mapzen-ztaLGsF';

var map = L.Mapzen.map('map', {
  tangramOptions: {
    scene: L.Mapzen.BasemapStyles.Walkabout
  }
})

// Iceland
map.setView([64.87, -18.40], 7);

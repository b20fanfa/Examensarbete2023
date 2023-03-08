// här ser den till att funktionen init kör när window/fönstret är helt laddat
window.onload = init; 

function init(){
  const map = new ol.Map({
    view: new ol.View({
      center: [0, 0], // tvådimotionell [x, y]
      zoom: 2
    }),  
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    target: "js-map"
  })

  map.on("click", function(e){
    console.log(e.coordinate);
  })
}


$(document).ready(function() {

    var map;

    function initialize() {
      //Maps
      var mapMinZoom = 8;
      var mapMaxZoom = 13;
      var center = new google.maps.LatLng(39.94940191877162, 4.059285199999977);
      var myOptions = {
            zoom: 11,
            maxZoom: 13,
            center: center,
            mapTypeId: google.maps.MapTypeId.MAP,
            mapTypeControl: false,
            streetViewControl: false,
            scrollwheel: false,
      };

      map = new google.maps.Map(document.getElementById('map'), myOptions);
      //Custom tiles overlay
      var mapBounds = new google.maps.LatLngBounds(new google.maps.LatLng(39.6116914406, 3.619832075), new google.maps.LatLng(40.2854617179, 4.49872734429));
      var imageMapType = new google.maps.ImageMapType({
        getTileUrl: function(coord, zoom, ownerDocument) {
          var zfactor = Math.pow(2,zoom);

          if ((zoom < mapMinZoom) || (zoom > mapMaxZoom)) {
              return 'https://s3.eu-central-1.amazonaws.com/menorkayak/images/none.png';
          }
          var ymax = 1 << zoom;
          var y = ymax - coord.y -1;
          var tileBounds = new google.maps.LatLngBounds(
              map.getProjection().fromPointToLatLng( new google.maps.Point( ((coord.x)*256) / zfactor, ((coord.y+1)*256)/ zfactor ) ),
              map.getProjection().fromPointToLatLng( new google.maps.Point( ((coord.x+1)*256)/ zfactor, ((coord.y)*256 )/ zfactor ) )
          );
          if (mapBounds.intersects(tileBounds)) {
              return 'https://s3.eu-central-1.amazonaws.com/menorkayak/images/overlay/'+zoom+"/"+coord.x+"/"+y+".png";
          } else {
              return 'https://s3.eu-central-1.amazonaws.com/menorkayak/images/none.png';
          }
        },
        tileSize: new google.maps.Size(256, 256),
        maxZoom: mapMinZoom,
        minZoom: mapMaxZoom,
        opacity:1
      });

      map.overlayMapTypes.push(imageMapType);

      initializeMapElements(map);

      google.maps.event.addListener(map, 'click', function( event ){
        console.log( "Latitude: "+event.latLng.lat()+"\n"+"Longitude: "+event.latLng.lng() );
      });

    }

    google.maps.event.addDomListener(window, 'load', initialize);

  });

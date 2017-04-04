$(document).ready(function() {

    var map;
    // var infoWindowDays = Array(),
    //     paths = Array(),
    //     actives = Array();

    /*** CAROUSEL AND SLIDES STUFF ***/

    // $('.item:first').addClass('active');

    // var carousel = $('#days-carousel').carousel().on('slid.bs.carousel', function () {
    //   var slideFrom = $(this).find('.active').index();
    //   openInfoWindow(infoWindowDays[slideFrom]);
    //   highlightPath(paths[slideFrom]);
    // });


    // //Enable swiping for carousel
    // $(".carousel-inner").swipe( {
    //   //Generic swipe handler for all directions
    //   swipeLeft:function(event, direction, distance, duration, fingerCount) {
    //     $(this).parent().carousel('prev');
    //   },
    //   swipeRight: function() {
    //     $(this).parent().carousel('next');
    //   },
    //   //Default is 75px, set to 0 for demo so any distance triggers swipe
    //   threshold:0
    // });

  /*** END OF CAROUSEL AND SLIDES STUFF ***/

  /*** GOOGLEMAPS STUFF ***/

    // function openInfoWindow(infoWindow){
    //   infoWindowDays.forEach(function(element, index, array){
    //     element.close();
    //   });
    //   infoWindow.open(map);
    // }

    // function highlightPath(path){
    //   paths.forEach(function(element, index, array){
    //     actives[index] = false;
    //     element.setOptions(
    //       {
    //         strokeColor: "#FF0000",
    //         strokeWeight: 3
    //       }
    //     );
    //   });
    //   path.setOptions(
    //     {
    //       strokeColor: "#00bb12",
    //       strokeWeight: 5
    //     }
    //   );
    //   actives[paths.indexOf(path)] = true;
    // }

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
              return '/static/images/none.png';
          }
          var ymax = 1 << zoom;
          var y = ymax - coord.y -1;
          var tileBounds = new google.maps.LatLngBounds(
              map.getProjection().fromPointToLatLng( new google.maps.Point( ((coord.x)*256) / zfactor, ((coord.y+1)*256)/ zfactor ) ),
              map.getProjection().fromPointToLatLng( new google.maps.Point( ((coord.x+1)*256)/ zfactor, ((coord.y)*256 )/ zfactor ) )
          );
          if (mapBounds.intersects(tileBounds)) {
              return '/static/images/overlay/'+zoom+"/"+coord.x+"/"+y+".png";
          } else {
              return '/static/images/none.png';
          }
        },
        tileSize: new google.maps.Size(256, 256),
        maxZoom: mapMinZoom,
        minZoom: mapMaxZoom,
        opacity:1
      });

      map.overlayMapTypes.push(imageMapType);

      initializeMapElements(map);
      // @for ($i = 0; $i < count($places); $i++)
      //   var latlng_{{ $i }} = new google.maps.LatLng({{ $places[$i]->lat }}, {{ $places[$i]->lon }});
      //   var marker_{{ $i }} = new google.maps.Marker({
      //       position: latlng_{{ $i }},
      //       map: map,
      //       title:"{{ $places[$i]->name }}",
      //       icon: '/assets/marker.png',
      //   });

      //   var milestoneContent_{{ $i }} = "<div class=\"media\"><img class=\"pull-left media-object\" src=\"/assets/minis/{{ $i }}.jpg\" alt=\"{{ $days[$i]->starts->name }}\"><div class=\"media-body\"><h6 class=\"media-heading\">{{ $places[$i]->name }}</h6></div></div>";

      //   var infowindowMilestone_{{ $i }} = new google.maps.InfoWindow({
      //       content: milestoneContent_{{ $i }}
      //   });

      //   google.maps.event.addListener(marker_{{ $i }}, 'click', function() {
      //     infowindowMilestone_{{ $i }}.open(map,marker_{{ $i }});
      //   });

      // @endfor

      // @for ($i = 0; $i < count($days); $i++)
      //   var line = new Array();
      //   @for ($j = 0; $j < count($days[$i]->points); $j++)
      //     var point = new google.maps.LatLng({{ $days[$i]->points[$j]->lat }}, {{ $days[$i]->points[$j]->lon }});
      //     line.push(point);
      //   @endfor
      //   var path_{{ $i }} = new google.maps.Polyline({
      //     path: line,
      //     strokeColor: "#FF0000",
      //     strokeOpacity: 1.0,
      //     strokeWeight: 3
      //   });
      //   paths.push(path_{{ $i }});
      //   path_{{ $i }}.setMap(map);

      //   var dayContent_{{ $i }} = "<div class=\"media\"><img class=\"pull-left media-object\" src=\"/assets/minis/{{ $days[$i]->id }}.jpg\" alt=\"Day {{ Roman::getNumber($days[$i]->id) }}\"><div class=\"media-body\"><h6 class=\"media-heading\">Day {{ Roman::getNumber($days[$i]->id) }}</h6><p>From {{ $days[$i]->starts->name }} to {{ $days[$i]->ends->name }}</p></div></div>";

      //   var infoWindowDay_{{ $i }} = new google.maps.InfoWindow({
      //       content: dayContent_{{ $i }},
      //       position: new google.maps.LatLng({{ $days[$i]->points[0]->lat }}, {{ $days[$i]->points[0]->lon }})
      //   });
      //   infoWindowDays.push(infoWindowDay_{{ $i }});
      //   actives.push(false);

      //   google.maps.event.addListener(path_{{ $i }}, "mouseover", function(event) {
      //     infoWindowDay_{{ $i }}.open(map);
      //     this.setOptions(
      //       {
      //         strokeColor: "#00bb12",
      //         strokeWeight: 5
      //       }
      //       );
      //   });
      //   google.maps.event.addListener(path_{{ $i }}, "mouseout", function(event) {
      //     if (!actives[{{ $i }}])
      //     {
      //       infoWindowDay_{{ $i }}.close();
      //       this.setOptions(
      //         {
      //           strokeColor: "#FF0000",
      //           strokeWeight: 3
      //         }
      //       );
      //     }

      //   });
      // @endfor

      google.maps.event.addListener(map, 'click', function( event ){
        console.log( "Latitude: "+event.latLng.lat()+"\n"+"Longitude: "+event.latLng.lng() );
      });

      // openInfoWindow(infoWindowDays[0]);
      // highlightPath(paths[0]);

      // @for ($i = 0; $i < count($pictures); $i++)

      //   var marker_{{ $i }} = new RichMarker({
      //     position: new google.maps.LatLng({{ $pictures[$i]->lat }}, {{ $pictures[$i]->lon }}),
      //     map: map,
      //     content: '<div id="marker_{{ $i-1 }}" class="my-marker"><a href="/uploads/pictures/originals/{{ $pictures[$i]->path }}" class="swipebox" title="{{ addslashes($pictures[$i]->getName()) }}"><img id="marker-image-{{ $pictures[$i]->id }}" alt="{{ addslashes($pictures[$i]->getName()) }}" title="{{ addslashes($pictures[$i]->getName()) }}" width="65" height="40" class="map-thumbnail" src="/uploads/pictures/small/{{ $pictures[$i]->path }}"/></a></div>'
      //     });

      //   google.maps.event.addListener(marker_{{ $i }}, 'mouseover', function(event) {
      //     this.setZIndex({{ count($pictures) }});
      //   });

      //   google.maps.event.addListener(marker_{{ $i }}, 'mouseout', function(event) {
      //     this.setZIndex({{ $i }});
      //   });

      // @endfor

      // google.maps.event.addListener(marker_{{ $i-1 }}, 'markerready', function(event) {
      //   $(".swipebox").swipebox({hideBarsDelay:5000});
      // });

    }

    google.maps.event.addDomListener(window, 'load', initialize);
    /*** END OF GOOGLEMAPS STUFF ***/

  });

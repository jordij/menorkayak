/* Generated inline JS from logbook.html */
<script type="text/javascript">
function initializeMapElements(map) {

        var latlng_1 = new google.maps.LatLng(39.921718, 4.271450);
        var marker_1 = new Marker({
            position: latlng_1,
            map: map,
            title:"Sa Mesquida",
            icon: {
                path: SQUARE_ROUNDED,
                fillColor: '#333',
                fillOpacity: 1,
                strokeColor: '',
                strokeWeight: 0
            },
            map_icon_label: '<span class="map-icon map-icon-kayaking"></span>'
        });


        var latlng_2 = new google.maps.LatLng(40.026694, 4.195576);
        var marker_2 = new Marker({
            position: latlng_2,
            map: map,
            title:"Illa de n'Adaia",
            icon: {
                path: SQUARE_ROUNDED,
                fillColor: '#333',
                fillOpacity: 1,
                strokeColor: '',
                strokeWeight: 0
            },
            map_icon_label: '<span class="map-icon map-icon-kayaking"></span>'
        });


        var latlng_3 = new google.maps.LatLng(40.052191, 4.036961);
        var marker_3 = new Marker({
            position: latlng_3,
            map: map,
            title:"Cavalleria",
            icon: {
                path: SQUARE_ROUNDED,
                fillColor: '#333',
                fillOpacity: 1,
                strokeColor: '',
                strokeWeight: 0
            },
            map_icon_label: '<span class="map-icon map-icon-kayaking"></span>'
        });


        var latlng_4 = new google.maps.LatLng(40.055410, 3.878775);
        var marker_4 = new Marker({
            position: latlng_4,
            map: map,
            title:"Cala Morell",
            icon: {
                path: SQUARE_ROUNDED,
                fillColor: '#333',
                fillOpacity: 1,
                strokeColor: '',
                strokeWeight: 0
            },
            map_icon_label: '<span class="map-icon map-icon-kayaking"></span>'
        });


        var latlng_5 = new google.maps.LatLng(39.933104, 3.874826);
        var marker_5 = new Marker({
            position: latlng_5,
            map: map,
            title:"Son Xoriguer",
            icon: {
                path: SQUARE_ROUNDED,
                fillColor: '#333',
                fillOpacity: 1,
                strokeColor: '',
                strokeWeight: 0
            },
            map_icon_label: '<span class="map-icon map-icon-kayaking"></span>'
        });


        var latlng_6 = new google.maps.LatLng(39.928629, 4.018164);
        var marker_6 = new Marker({
            position: latlng_6,
            map: map,
            title:"Binigaus",
            icon: {
                path: SQUARE_ROUNDED,
                fillColor: '#333',
                fillOpacity: 1,
                strokeColor: '',
                strokeWeight: 0
            },
            map_icon_label: '<span class="map-icon map-icon-kayaking"></span>'
        });


        var latlng_7 = new google.maps.LatLng(39.846635, 4.193516);
        var marker_7 = new Marker({
            position: latlng_7,
            map: map,
            title:"Binidali",
            icon: {
                path: SQUARE_ROUNDED,
                fillColor: '#333',
                fillOpacity: 1,
                strokeColor: '',
                strokeWeight: 0
            },
            map_icon_label: '<span class="map-icon map-icon-kayaking"></span>'
        });



    var infoWindowDays = Array(),
        paths = Array(),
        actives = Array();


        var line = new Array();
        var i = 0;
        var polylineLength = 0;

            var point = new google.maps.LatLng(39.921718, 4.271450);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.928563, 4.279690);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.955412, 4.267330);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.966201, 4.268703);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.977515, 4.274197);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.984618, 4.266987);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.985670, 4.251194);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.994613, 4.257374);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.001451, 4.254627);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.000925, 4.246044);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.008026, 4.241581);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.008815, 4.256344);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.015652, 4.256687);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.019596, 4.231625);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.018281, 4.201069);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.026694, 4.195576);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

        var path_1 = new google.maps.Polyline({
          path: line,
          strokeColor: "#00CCBB",
          strokeOpacity: 1.0,
          strokeWeight: 3
        });
        paths.push(path_1);
        path_1.setMap(map);

        var polyline_distance = "<p style='margin: 0 0 0.5rem 0;'>Estimated distance: " + Math.ceil(polylineLength/1000) + " km." + "</p>"
        var dayContent_1 = "<div style='text-align:center;overflow:hidden;'><h5 style='margin: 0.5rem 0 0.5rem 0;'>Day 1</h5><p style='margin: 0 0 0.5rem 0;'><strong>Sa Mesquida</strong> to <strong>Illa de n&#39;Adaia</strong></p>" + polyline_distance + "<a href='#day-1' class='button special small smooth-scroll icon fa-compass'>Logbook</a></div>"

        var infoWindowDay_1 = new google.maps.InfoWindow({
            content: dayContent_1,
            position: new google.maps.LatLng(39.921718,4.271450)
        });
        infoWindowDays.push(infoWindowDay_1);

        google.maps.event.addListener(marker_1, 'click', function() {
          infoWindowDays.forEach(function(element, index, array){
            element.close();
          });
          infoWindowDay_1.open(map,marker_1);
          paths.forEach(function(element, index, array){
            element.setOptions(
              {
                strokeColor: "#00CCBB",
                strokeWeight: 3
              }
            );
          });
          path_1.setOptions(
            {
              strokeColor: "#00bb12",
              strokeWeight: 5
            }
          );
        });

        var line = new Array();
        var i = 0;
        var polylineLength = 0;

            var point = new google.maps.LatLng(40.026694, 4.195576);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.031229, 4.192228);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.032281, 4.183474);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.035961, 4.179525);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.044635, 4.177294);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.046606, 4.171457);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.043715, 4.163561);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.042663, 4.154291);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.047920, 4.150686);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.060403, 4.151545);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.067366, 4.159441);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.069862, 4.151201);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.071635, 4.125195);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.074262, 4.118328);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.069270, 4.109402);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.073737, 4.104595);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.071372, 4.094982);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.062965, 4.089146);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.062702, 4.080906);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.056921, 4.075756);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.075050, 4.072666);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.086083, 4.068546);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.092387, 4.074039);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.101579, 4.065113);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.100266, 4.055157);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.096064, 4.045200);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.082931, 4.050694);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.078203, 4.040737);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.069796, 4.038677);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.052191, 4.036961);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

        var path_2 = new google.maps.Polyline({
          path: line,
          strokeColor: "#00CCBB",
          strokeOpacity: 1.0,
          strokeWeight: 3
        });
        paths.push(path_2);
        path_2.setMap(map);

        var polyline_distance = "<p style='margin: 0 0 0.5rem 0;'>Estimated distance: " + Math.ceil(polylineLength/1000) + " km." + "</p>"
        var dayContent_2 = "<div style='text-align:center;overflow:hidden;'><h5 style='margin: 0.5rem 0 0.5rem 0;'>Day 2</h5><p style='margin: 0 0 0.5rem 0;'><strong>Illa de n&#39;Adaia</strong> to <strong>Cavalleria</strong></p>" + polyline_distance + "<a href='#day-2' class='button special small smooth-scroll icon fa-compass'>Logbook</a></div>"

        var infoWindowDay_2 = new google.maps.InfoWindow({
            content: dayContent_2,
            position: new google.maps.LatLng(40.026694,4.195576)
        });
        infoWindowDays.push(infoWindowDay_2);

        google.maps.event.addListener(marker_2, 'click', function() {
          infoWindowDays.forEach(function(element, index, array){
            element.close();
          });
          infoWindowDay_2.open(map,marker_2);
          paths.forEach(function(element, index, array){
            element.setOptions(
              {
                strokeColor: "#00CCBB",
                strokeWeight: 3
              }
            );
          });
          path_2.setOptions(
            {
              strokeColor: "#00bb12",
              strokeWeight: 5
            }
          );
        });

        var line = new Array();
        var i = 0;
        var polylineLength = 0;

            var point = new google.maps.LatLng(40.052191, 4.036961);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.057118, 4.036188);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.058038, 4.030352);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.057249, 4.016275);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.061191, 4.013186);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.064213, 4.003057);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.071963, 3.997908);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.071044, 3.993273);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.067760, 3.985033);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.068679, 3.977995);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.065264, 3.961000);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.066446, 3.954134);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.061191, 3.948812);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.061848, 3.934221);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.063950, 3.925982);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.073146, 3.923750);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.073802, 3.917398);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.067497, 3.907099);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.067366, 3.903494);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.065789, 3.891649);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.067628, 3.883238);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.062899, 3.879290);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.055410, 3.878775);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

        var path_3 = new google.maps.Polyline({
          path: line,
          strokeColor: "#00CCBB",
          strokeOpacity: 1.0,
          strokeWeight: 3
        });
        paths.push(path_3);
        path_3.setMap(map);

        var polyline_distance = "<p style='margin: 0 0 0.5rem 0;'>Estimated distance: " + Math.ceil(polylineLength/1000) + " km." + "</p>"
        var dayContent_3 = "<div style='text-align:center;overflow:hidden;'><h5 style='margin: 0.5rem 0 0.5rem 0;'>Day 3</h5><p style='margin: 0 0 0.5rem 0;'><strong>Cavalleria</strong> to <strong>Cala Morell</strong></p>" + polyline_distance + "<a href='#day-3' class='button special small smooth-scroll icon fa-compass'>Logbook</a></div>"

        var infoWindowDay_3 = new google.maps.InfoWindow({
            content: dayContent_3,
            position: new google.maps.LatLng(40.052191,4.036961)
        });
        infoWindowDays.push(infoWindowDay_3);

        google.maps.event.addListener(marker_3, 'click', function() {
          infoWindowDays.forEach(function(element, index, array){
            element.close();
          });
          infoWindowDay_3.open(map,marker_3);
          paths.forEach(function(element, index, array){
            element.setOptions(
              {
                strokeColor: "#00CCBB",
                strokeWeight: 3
              }
            );
          });
          path_3.setOptions(
            {
              strokeColor: "#00bb12",
              strokeWeight: 5
            }
          );
        });

        var line = new Array();
        var i = 0;
        var polylineLength = 0;

            var point = new google.maps.LatLng(40.055410, 3.878775);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.063030, 3.878431);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.062242, 3.861437);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.067103, 3.861609);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.066971, 3.854227);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.061979, 3.851480);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.064869, 3.845301);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.060271, 3.833113);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.062373, 3.828306);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.061585, 3.822813);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.054621, 3.818865);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.051337, 3.810453);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.039247, 3.806334);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.032149, 3.791742);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.029258, 3.781614);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.022685, 3.774061);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.017689, 3.774405);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.006514, 3.793631);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.005462, 3.806677);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.002832, 3.813715);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.006119, 3.818350);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.008355, 3.820238);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.010721, 3.825731);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.009933, 3.832941);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(40.000202, 3.833971);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.993035, 3.839207);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.985144, 3.840580);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.977515, 3.840580);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.969622, 3.842640);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.968306, 3.836460);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.963570, 3.836803);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.959359, 3.841267);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.951201, 3.837833);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.946200, 3.835773);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.943042, 3.832340);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.934881, 3.831997);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.926193, 3.832684);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.925996, 3.849764);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.925601, 3.866415);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.933104, 3.874826);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

        var path_4 = new google.maps.Polyline({
          path: line,
          strokeColor: "#00CCBB",
          strokeOpacity: 1.0,
          strokeWeight: 3
        });
        paths.push(path_4);
        path_4.setMap(map);

        var polyline_distance = "<p style='margin: 0 0 0.5rem 0;'>Estimated distance: " + Math.ceil(polylineLength/1000) + " km." + "</p>"
        var dayContent_4 = "<div style='text-align:center;overflow:hidden;'><h5 style='margin: 0.5rem 0 0.5rem 0;'>Day 4</h5><p style='margin: 0 0 0.5rem 0;'><strong>Cala Morell</strong> to <strong>Son Xoriguer</strong></p>" + polyline_distance + "<a href='#day-4' class='button special small smooth-scroll icon fa-compass'>Logbook</a></div>"

        var infoWindowDay_4 = new google.maps.InfoWindow({
            content: dayContent_4,
            position: new google.maps.LatLng(40.055410,3.878775)
        });
        infoWindowDays.push(infoWindowDay_4);

        google.maps.event.addListener(marker_4, 'click', function() {
          infoWindowDays.forEach(function(element, index, array){
            element.close();
          });
          infoWindowDay_4.open(map,marker_4);
          paths.forEach(function(element, index, array){
            element.setOptions(
              {
                strokeColor: "#00CCBB",
                strokeWeight: 3
              }
            );
          });
          path_4.setOptions(
            {
              strokeColor: "#00bb12",
              strokeWeight: 5
            }
          );
        });

        var line = new Array();
        var i = 0;
        var polylineLength = 0;

            var point = new google.maps.LatLng(39.933104, 3.874826);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.930603, 3.874655);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.927707, 3.870707);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.924548, 3.870707);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.923100, 3.875170);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.924680, 3.879976);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.922310, 3.882380);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.921652, 3.885469);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.925075, 3.889933);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.928102, 3.904181);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.926259, 3.910017);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.925206, 3.916368);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.927049, 3.920145);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.924416, 3.923750);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.923100, 3.931990);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.923626, 3.937311);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.922310, 3.944006);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.924285, 3.953276);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.925864, 3.961172);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.928760, 3.967867);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.928629, 3.984175);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.927444, 4.001856);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.926391, 4.012842);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.928629, 4.018164);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

        var path_5 = new google.maps.Polyline({
          path: line,
          strokeColor: "#00CCBB",
          strokeOpacity: 1.0,
          strokeWeight: 3
        });
        paths.push(path_5);
        path_5.setMap(map);

        var polyline_distance = "<p style='margin: 0 0 0.5rem 0;'>Estimated distance: " + Math.ceil(polylineLength/1000) + " km." + "</p>"
        var dayContent_5 = "<div style='text-align:center;overflow:hidden;'><h5 style='margin: 0.5rem 0 0.5rem 0;'>Day 5</h5><p style='margin: 0 0 0.5rem 0;'><strong>Son Xoriguer</strong> to <strong>Binigaus</strong></p>" + polyline_distance + "<a href='#day-5' class='button special small smooth-scroll icon fa-compass'>Logbook</a></div>"

        var infoWindowDay_5 = new google.maps.InfoWindow({
            content: dayContent_5,
            position: new google.maps.LatLng(39.933104,3.874826)
        });
        infoWindowDays.push(infoWindowDay_5);

        google.maps.event.addListener(marker_5, 'click', function() {
          infoWindowDays.forEach(function(element, index, array){
            element.close();
          });
          infoWindowDay_5.open(map,marker_5);
          paths.forEach(function(element, index, array){
            element.setOptions(
              {
                strokeColor: "#00CCBB",
                strokeWeight: 3
              }
            );
          });
          path_5.setOptions(
            {
              strokeColor: "#00bb12",
              strokeWeight: 5
            }
          );
        });

        var line = new Array();
        var i = 0;
        var polylineLength = 0;

            var point = new google.maps.LatLng(39.928629, 4.018164);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.924350, 4.018764);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.918295, 4.025974);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.914345, 4.027348);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.912238, 4.040394);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.906708, 4.041767);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.900650, 4.050007);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.894592, 4.055843);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.885899, 4.058247);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.882474, 4.062023);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.872726, 4.084682);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.869564, 4.116268);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.865611, 4.130688);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.861131, 4.151974);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.851907, 4.157810);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.845317, 4.170513);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.844527, 4.182186);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.839782, 4.192142);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.846635, 4.193516);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

        var path_6 = new google.maps.Polyline({
          path: line,
          strokeColor: "#00CCBB",
          strokeOpacity: 1.0,
          strokeWeight: 3
        });
        paths.push(path_6);
        path_6.setMap(map);

        var polyline_distance = "<p style='margin: 0 0 0.5rem 0;'>Estimated distance: " + Math.ceil(polylineLength/1000) + " km." + "</p>"
        var dayContent_6 = "<div style='text-align:center;overflow:hidden;'><h5 style='margin: 0.5rem 0 0.5rem 0;'>Day 6</h5><p style='margin: 0 0 0.5rem 0;'><strong>Binigaus</strong> to <strong>Binidali</strong></p>" + polyline_distance + "<a href='#day-6' class='button special small smooth-scroll icon fa-compass'>Logbook</a></div>"

        var infoWindowDay_6 = new google.maps.InfoWindow({
            content: dayContent_6,
            position: new google.maps.LatLng(39.928629,4.018164)
        });
        infoWindowDays.push(infoWindowDay_6);

        google.maps.event.addListener(marker_6, 'click', function() {
          infoWindowDays.forEach(function(element, index, array){
            element.close();
          });
          infoWindowDay_6.open(map,marker_6);
          paths.forEach(function(element, index, array){
            element.setOptions(
              {
                strokeColor: "#00CCBB",
                strokeWeight: 3
              }
            );
          });
          path_6.setOptions(
            {
              strokeColor: "#00bb12",
              strokeWeight: 5
            }
          );
        });

        var line = new Array();
        var i = 0;
        var polylineLength = 0;

            var point = new google.maps.LatLng(39.846635, 4.193516);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.840836, 4.195232);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.836618, 4.192142);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.820008, 4.206562);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.818953, 4.215145);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.812888, 4.219952);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.810514, 4.232311);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.814206, 4.241581);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.816052, 4.266644);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.824754, 4.290333);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.841627, 4.299259);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.847690, 4.302349);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.852434, 4.305782);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.857442, 4.304066);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.858232, 4.310246);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.870091, 4.310246);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.874834, 4.313335);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.881420, 4.312649);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.884055, 4.323635);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.898280, 4.330158);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.901177, 4.323978);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.900914, 4.314022);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.908288, 4.311962);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.912501, 4.306469);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.914871, 4.292049);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.922244, 4.287930);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.928563, 4.279690);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

            var point = new google.maps.LatLng(39.921718, 4.271450);
            line.push(point);
            if (i > 0) polylineLength += google.maps.geometry.spherical.computeDistanceBetween(line[i], line[i-1]);
            i++;

        var path_7 = new google.maps.Polyline({
          path: line,
          strokeColor: "#00CCBB",
          strokeOpacity: 1.0,
          strokeWeight: 3
        });
        paths.push(path_7);
        path_7.setMap(map);

        var polyline_distance = "<p style='margin: 0 0 0.5rem 0;'>Estimated distance: " + Math.ceil(polylineLength/1000) + " km." + "</p>"
        var dayContent_7 = "<div style='text-align:center;overflow:hidden;'><h5 style='margin: 0.5rem 0 0.5rem 0;'>Day 7</h5><p style='margin: 0 0 0.5rem 0;'><strong>Binidali</strong> to <strong>Sa Mesquida</strong></p>" + polyline_distance + "<a href='#day-7' class='button special small smooth-scroll icon fa-compass'>Logbook</a></div>"

        var infoWindowDay_7 = new google.maps.InfoWindow({
            content: dayContent_7,
            position: new google.maps.LatLng(39.846635,4.193516)
        });
        infoWindowDays.push(infoWindowDay_7);

        google.maps.event.addListener(marker_7, 'click', function() {
          infoWindowDays.forEach(function(element, index, array){
            element.close();
          });
          infoWindowDay_7.open(map,marker_7);
          paths.forEach(function(element, index, array){
            element.setOptions(
              {
                strokeColor: "#00CCBB",
                strokeWeight: 3
              }
            );
          });
          path_7.setOptions(
            {
              strokeColor: "#00bb12",
              strokeWeight: 5
            }
          );
        });

}
</script>

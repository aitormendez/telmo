import google from 'google';

export default {
  init() {
    // JavaScript to be fired on the home page

    (function($) {

      /*
       *  add_marker
       *
       *  This function will add a marker to the selected Google Map
       *
       *  @type	function
       *  @date	8/11/2013
       *  @since	4.3.0
       *
       *  @param	$marker (jQuery element)
       *  @param	map (Google Map object)
       *  @return	n/a
       */
      var colorcruz = '#535353';

      function add_marker($marker, map) {

        // var
        var latlng = new google.maps.LatLng($marker.attr('data-lat'), $marker.attr('data-lng'));

        // create marker
        var marker = new google.maps.Marker({
          position: latlng,
          map: map,
          icon: {
            path: 'M8.128 2.128C6.956.956 5.053.948 3.885 2.115l-1.77 1.77a3.004 3.004 0 0 0 .013 4.243L10 16l-7.872 7.872c-1.172 1.172-1.18 3.075-.013 4.243l1.77 1.77a3.004 3.004 0 0 0 4.243-.013L16 22l7.872 7.872c1.172 1.172 3.075 1.18 4.243.013l1.77-1.77a3.004 3.004 0 0 0-.013-4.243L22 16l7.872-7.872c1.172-1.172 1.18-3.075.013-4.243l-1.77-1.77a3.004 3.004 0 0 0-4.243.013L16 10 8.128 2.128z',
            scale: 1,
            anchor: new google.maps.Point(16, 16),
            fillColor: colorcruz,
            fillOpacity: 1,
            strokeWeight: 0,
          },
        });

        // add to array
        map.markers.push(marker);

        // if marker contains HTML, add it to an infoWindow
        if ($marker.html()) {
          // create info window
          var infowindow = new google.maps.InfoWindow({
            content: $marker.html(),
          });

          // show info window when marker is clicked
          google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map, marker);
          });
        }
        // colorcruz
        function set_color() {
          marker.setOptions({
            position: latlng,
            map: map,
            icon: {
              path: 'M8.128 2.128C6.956.956 5.053.948 3.885 2.115l-1.77 1.77a3.004 3.004 0 0 0 .013 4.243L10 16l-7.872 7.872c-1.172 1.172-1.18 3.075-.013 4.243l1.77 1.77a3.004 3.004 0 0 0 4.243-.013L16 22l7.872 7.872c1.172 1.172 3.075 1.18 4.243.013l1.77-1.77a3.004 3.004 0 0 0-.013-4.243L22 16l7.872-7.872c1.172-1.172 1.18-3.075.013-4.243l-1.77-1.77a3.004 3.004 0 0 0-4.243.013L16 10 8.128 2.128z',
              scale: 1,
              anchor: new google.maps.Point(16, 16),
              fillColor: colorcruz,
              fillOpacity: 1,
              strokeWeight: 0,
            },
          });
        }

        function coloricon() {
          var newMapType = map.getMapTypeId();
          if (newMapType === 'roadmap') {
            colorcruz = '#535353';
            set_color();
          } else if (newMapType === 'hybrid') {
            colorcruz = '#ffffff';
            set_color();
          }
        }
        google.maps.event.addListener(map, 'maptypeid_changed', function() {
          coloricon();
        });



      }



      /*
       *  center_map
       *
       *  This function will center the map, showing all markers attached to this map
       *
       *  @type	function
       *  @date	8/11/2013
       *  @since	4.3.0
       *
       *  @param	map (Google Map object)
       *  @return	n/a
       */

      function center_map(map) {
        // vars
        var bounds = new google.maps.LatLngBounds();
        // loop through all markers and create bounds
        $.each(map.markers, function(i, marker) {
          var latlng = new google.maps.LatLng(marker.position.lat(), marker.position.lng());
          bounds.extend(latlng);
        });

        // only 1 marker?
        if (map.markers.length === 1) {
          // set center of map
          map.setCenter(bounds.getCenter());
          map.setZoom(16);
        } else {
          // fit to bounds
          map.fitBounds(bounds);
        }
      }
      /*
       *  render_map
       *
       *  This function will render a Google Map onto the selected jQuery element
       *
       *  @type	function
       *  @date	8/11/2013
       *  @since	4.3.0
       *
       *  @param	$el (jQuery element)
       *  @return	n/a
       */

      function render_map($el) {
        var estilos = [{
          stylers: [{
            saturation: -100,
          }],
        }, {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{
            lightness: 100,
          }, {
            visibility: 'simplified',
          }],
        }, {
          featureType: 'road',
          elementType: 'labels',
          stylers: [{
            visibility: 'off',
          }],
        }];
        var $markers = $el.find('.marker');
        var args = {
          zoom: 16,
          center: new google.maps.LatLng(0, 0),
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          fullscreenControl: true,
        };

        // create map
        var map = new google.maps.Map($el[0], args);

        // add a markers reference
        map.markers = [];

        // add markers
        $markers.each(function() {
          add_marker($(this), map);
        });

        // center map
        center_map(map);

        // aplicar estilos
        map.setOptions({
          styles: estilos,
        });



      }

      /*
       *  document ready
       *
       *  This function will render each map when the document is ready (page has loaded)
       *
       *  @type	function
       *  @date	8/11/2013
       *  @since	5.0.0
       *
       *  @param	n/a
       *  @return	n/a
       */
      $(document).ready(function() {
        $('.acf-map').each(function() {
          render_map($(this));
        });

      });

    })(jQuery);

  },
  finalize() {
    // JavaScript to be fired on the home page, after the init JS
  },
};

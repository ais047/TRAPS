<template>
  <div>
    <h1>Map</h1>
    <map-loader
      :map-config="mapConfig"
      apiKey="AIzaSyBGEwSDfo5UdPkwyml-5-drtgBkKbYSG_Y"
    >
      <template slot-scope="scopeProps">
        <child-marker
          v-for="(marker,i) in markers"
          :key="i"
          :position="marker"
          :google="scopeProps.google"
          :map="scopeProps.map"/>
      </template>
    </map-loader>
  </div>
</template>

<script>
import MapLoader from './MapLoader'
import ChildMarker from './ChildMarker'

export default {
  props: {
    markers: Array
  },
  created () {
    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      infoWindow.open(map);
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  },
  data () {
    return {
      mapConfig: {
        zoom: 12,
        center: {}
      }
    }
  },
  components: {
    MapLoader,
    ChildMarker
  }
}
</script>

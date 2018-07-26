<template>
  <div>
    <h1>Map</h1>
      <GmapMap
        class="gmap"
        ref="mapRef"
        :center="center"
        :zoom="20"
        map-type-id="terrain"
      >
        <GmapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center=m.position"
        />
      </GmapMap>
  </div>
</template>

<script>

export default {
  created () {
    navigator.geolocation.getCurrentPosition(function (position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
      this.center = pos
    })
  },
  data () {
    return {
      center: { lat: 32.9292735, lng: -117.1502088 },
      markers: [
        { lat: 32.9292735, lng: -117.1502088 }
      ]
    }
  },
  mounted () {
    // this.$refs.mapRef.$mapPromise.then((map) => {
    //   map.panTo({lat: 1.38, lng: 103.80})
    // })
  }
}
</script>

<style>
.gmap{
  width: 100%;
  height: 70vh;
}
</style>

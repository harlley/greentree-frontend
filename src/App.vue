<template>
  <div id="app">
    <gmap-map id="map" :center="center" :zoom="18" style="width: 100%; height: 300px">
      <gmap-marker :key="index" v-for="(m, index) in markers" :position="center = m.position"></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
    export default{
        data(){
          return {
            center: {lat: 0, lng: 0},
            markers: [
              {position: {lat: 0.0, lng: 0.0}}
            ],
            getMap: this.$root.mapping
          }
        },

        mounted(){
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
              let pos = {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude
              };
              this.markers[0].position.lat = pos.lat;
              this.markers[0].position.lng = pos.lng;
              console.log(pos);
            }.bind(this));
          }
        },
        
    }
</script>
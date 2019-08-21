<template>

    <form enctype="multipart/form-data" @submit.prevent="onSave">
    
      <gmap-map id="map" :center="center" :zoom="18" style="width: 100%; height: 200px">
        <gmap-marker :key="index" v-for="(m, index) in markers" :position="center = m.position"></gmap-marker>
      </gmap-map>
    
      <div class="field" style="margin-top: 30px; margin-bottom:30px">
        <div class="control">
          <textarea class="textarea" v-model="notes" placeholder="Textarea"></textarea>
        </div>
      </div>

      <div class="field">
        <div class="file is-secondary has-name is-centered is-info">
          <label class="file-label">
            <input class="file-input" type="file" ref="file" @change="selectFile" multiple="multiple" accept="image/jpeg">
            <span class="file-cta">
              <span class="file-icon">
                <i class="fas fa-cloud-upload-alt"></i>
              </span>
              <span class="file-label">
                Upload Pictures
              </span>
            </span>
            <span class="file-name">
              0 pictures
            </span>
          </label>
        </div>
      </div>

      <button class="button is-large is-fullwidth is-warn" style="margin-top:30px;">
        <span class="icon is-medium">
          <i class="far fa-save"></i>
        </span>
        <span>Save</span>
      </button>
          
    </form>

</template>

<script>
    import axios from 'axios'

    export default{
        data(){
          return {
            file: null,
            notes: '',
            center: {lat: 0, lng: 0},
            markers: [
              { position: {lat: 0.0, lng: 0.0}}
            ],
            getMap: this.$root.mapping,
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

        methods: {
          selectFile() {
            this.file = this.$refs.file.files;
            console.log(this.file);
          },
          onSave() {
            let formData = new FormData();
                    
            for (var x = 0; x < this.file.length; x++) {
                formData.append("files", this.file[x]);
            }            

            formData.set('latitude', this.markers[0].position.lat);
            formData.set('longitude', this.markers[0].position.lng);
            formData.set('notes', this.notes);

            axios.post('http://localhost:3000/reports', formData)


          }
        }
        
    }
</script>

<style scoped>
form {
  padding: 20px;
}
</style>
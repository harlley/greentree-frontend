import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)
Vue.use(VueRouter)

Vue.config.productionTip = false

import * as VueGoogleMaps from 'vue2-google-maps'
import router from './router'

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_GOOGLE_MAPS_KEY
  },
  installComponents: true
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

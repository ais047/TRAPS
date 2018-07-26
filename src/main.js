// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueFirestore from 'vue-firestore'

/* eslint-disable-next-line */
import init from './firebaseInit'

// eslint workaround
let d = init
d = null
console.log(d, 'Firebase init ignore')

Vue.config.productionTip = false
Vue.use(VueFirestore)
Vue.use(VueGoogleMaps, {
  load: {
    key: '',
    libraries: 'places'
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

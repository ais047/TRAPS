import Vue from 'vue'
import Router from 'vue-router'
import TRAPSMap from '@/components/TRAPSMap'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TRAPSMap',
      component: TRAPSMap
    }
  ]
})

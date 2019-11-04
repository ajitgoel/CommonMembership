import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Vuex from 'vuex'
Vue.use(Vuex)

// Meteor Tracker integration
import VueMeteorTracker from 'vue-meteor-tracker'
Vue.use(VueMeteorTracker)
Vue.config.meteor.freeze = true

import VueGoogleMaps from 'vue-googlemaps'
Vue.use(VueGoogleMaps, {
  load: {
    apiKey: 'AIzaSyCV908coKxEB_GcWuGucl79Zy_rIG4GQSI',
    libraries: ['places'],
  },
})

import VueSupply from 'vue-supply'
Vue.use(VueSupply)

import VueObserveVisibility from 'vue-observe-visibility'
Vue.use(VueObserveVisibility)

import VueApollo from 'vue-apollo'
Vue.use(VueApollo)

import * as filters from './filters'
for (const key in filters) {
  Vue.filter(key, filters[key])
}

import Vuelidate from 'vuelidate';
Vue.use(Vuelidate);

import Vuetify from 'vuetify';
Vue.use(Vuetify);
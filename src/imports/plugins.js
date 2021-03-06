import Vue from 'vue';

// Register a global custom directive called `v-focus`
Vue.directive('focus', {
  inserted: function (el) {
    el.focus()
  }
});

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Vuex from 'vuex';
Vue.use(Vuex);

// Meteor Tracker integration
import VueMeteorTracker from 'vue-meteor-tracker';
Vue.use(VueMeteorTracker);
Vue.config.meteor.freeze = true;
Vue.config.strict = true;

import VueGoogleMaps from 'vue-googlemaps';
Vue.use(VueGoogleMaps, {
  load: {
    apiKey: 'AIzaSyCV908coKxEB_GcWuGucl79Zy_rIG4GQSI',
    libraries: ['places'],
  },
});

import VueSupply from 'vue-supply';
Vue.use(VueSupply);

import VueObserveVisibility from 'vue-observe-visibility';
Vue.use(VueObserveVisibility);

import * as filters from './filters';
for (const key in filters) {
  Vue.filter(key, filters[key])
}
import Vuelidate from 'vuelidate';
Vue.use(Vuelidate);

import {GridPlugin, Page, Sort, Filter, Toolbar, ExcelExport, PdfExport} from '@syncfusion/ej2-vue-grids';
Vue.use(GridPlugin);
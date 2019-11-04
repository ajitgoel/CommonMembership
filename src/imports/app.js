import 'isomorphic-fetch';

import './plugins';
import './supply';

import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import { sync } from 'vuex-router-sync';
import VueApollo from 'vue-apollo';
import { createApolloClient } from './api/apollo';
import { injectSupply } from 'vue-supply';
import App from './ui/App.vue';
import routes from './routes';
import storeOptions from './store';

function createApp (context) {
  const router = new VueRouter({mode: 'history', routes,});

  const supplyCache = {};
  const suppliedStoreOptions = injectSupply(storeOptions, supplyCache);
  const store = new Vuex.Store(suppliedStoreOptions);

  // sync the router with the vuex store.
  // this registers `store.state.route`
  sync(store, router);

  // Apollo
  const apolloClient = createApolloClient(context.ssr);
  const apolloProvider = new VueApollo({defaultClient: apolloClient,});

  import AppHeader from './ui/AppHeader.vue';
  import Omnisearch from './ui/Omnisearch.vue';
  import AppFooter from './ui/AppFooter.vue';
  import TermsAndConditionsModal from './ui/TermsAndConditionsModal.vue';
  import TermsAndConditionsText from './ui/TermsAndConditionsText.vue';
  import PrivacyPolicyModal from './ui/PrivacyPolicyModal.vue';
  import PrivacyPolicyText from './ui/PrivacyPolicyText.vue';
  import TopNavBar from './ui/TopNavBar.vue';
  import MainNavBar from './ui/MainNavBar.vue';
  import CardFooter from './ui/CardFooter.vue';
  import PrivacyShieldNoticeText from './ui/PrivacyShieldNoticeText.vue';

  Vue.component('AppHeader', AppHeader);
  Vue.component('AppHeader', AppHeader);
  Vue.component('Omnisearch', Omnisearch);
  Vue.component('AppFooter', AppFooter);
  Vue.component('TermsAndConditionsModal', TermsAndConditionsModal);
  Vue.component('TermsAndConditionsText', TermsAndConditionsText);
  Vue.component('PrivacyPolicyModal', PrivacyPolicyModal);  
  Vue.component('PrivacyPolicyText', PrivacyPolicyText);
  Vue.component('TopNavBar', TopNavBar);
  Vue.component('MainNavBar', MainNavBar);
  Vue.component('CardFooter', CardFooter);
  Vue.component('PrivacyShieldNoticeText', PrivacyShieldNoticeText);

  return {
    app: new Vue({
      el: '#app',
      router,
      store,
      apolloProvider,
      supplyCache,
      ...App,
    }),
    router,
    store,
    apolloProvider,
  }
}

export default createApp
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

  import AppHeader from './ui/AppHeader.vue';
  import AppFooter from './ui/AppFooter.vue';
  import Contact from './ui/Contact.vue';
  import CardFooter from './ui/CardFooter.vue';
  import Home from './ui/Home.vue'
  import Login from './ui/Login.vue';
  import MainNavBar from './ui/MainNavBar.vue';
  import NotFound from './ui/NotFound.vue'
  import Omnisearch from './ui/Omnisearch.vue';
  import PrivacyPolicy from './ui/PrivacyPolicy.vue';
  import PrivacyShieldNotice from './ui/PrivacyShieldNotice.vue';
  import PrivacyPolicyModal from './ui/PrivacyPolicyModal.vue';
  import PrivacyPolicyText from './ui/PrivacyPolicyText.vue';
  import PrivacyShieldNoticeText from './ui/PrivacyShieldNoticeText.vue';
  import Register from './ui/Register.vue';
  import ResetPassword from './ui/ResetPassword.vue';
  import TermsAndConditions from './ui/TermsAndConditions.vue';
  import TermsAndConditionsModal from './ui/TermsAndConditionsModal.vue';
  import TermsAndConditionsText from './ui/TermsAndConditionsText.vue';
  import TopNavBar from './ui/TopNavBar.vue';

  Vue.component('AppHeader', AppHeader);
  Vue.component('AppFooter', AppFooter);
  Vue.component('Contact', Contact);
  Vue.component('CardFooter', CardFooter);
  Vue.component('Home', Home);
  Vue.component('Login', Login);
  Vue.component('MainNavBar', MainNavBar);
  Vue.component('NotFound', NotFound);
  Vue.component('Omnisearch', Omnisearch);
  Vue.component('PrivacyPolicy', PrivacyPolicy);
  Vue.component('PrivacyShieldNotice', PrivacyShieldNotice);
  Vue.component('PrivacyPolicyModal', PrivacyPolicyModal);
  Vue.component('PrivacyPolicyText', PrivacyPolicyText);
  Vue.component('PrivacyShieldNoticeText', PrivacyShieldNoticeText);
  Vue.component('Register', Register);
  Vue.component('ResetPassword', ResetPassword);
  Vue.component('TermsAndConditions', TermsAndConditions);
  Vue.component('TermsAndConditionsModal', TermsAndConditionsModal);
  Vue.component('TermsAndConditionsText', TermsAndConditionsText);
  Vue.component('TopNavBar', TopNavBar);
  
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
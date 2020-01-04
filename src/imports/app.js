import 'isomorphic-fetch';

import './plugins';
import './supply';

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './client/ui/App.vue';
import routes from './routes';
import { MeteorErrors, StateVariables, SecureRoutes} from './api/constants';

function createApp () {
  import AppHeader from './client/ui/components/AppHeader.vue';
  import AppFooter from './client/ui/components/AppFooter.vue';
  import CardFooter from './client/ui/components/CardFooter.vue';
  import MainNavBar from './client/ui/components/MainNavBar.vue';
  import Omnisearch from './client/ui/components/Omnisearch.vue';
  import PrivacyPolicyModal from './client/ui/components/PrivacyPolicyModal.vue';
  import PrivacyPolicyText from './client/ui/components/PrivacyPolicyText.vue';
  import PrivacyShieldNoticeText from './client/ui/components/PrivacyShieldNoticeText.vue';
  import DashboardSidebar from './client/ui/components/DashboardSidebar.vue';
  import TermsAndConditionsModal from './client/ui/components/TermsAndConditionsModal.vue';
  import TermsAndConditionsText from './client/ui/components/TermsAndConditionsText.vue';
  import TopNavBar from './client/ui/components/TopNavBar.vue';
  import Toast from './client/ui/components/Toast.vue';
  import SuccessAlert from './client/ui/components/SuccessAlert.vue';
  import ErrorAlert from './client/ui/components/ErrorAlert.vue';

  import Contact from './client/ui/Contact.vue';
  import Home from './client/ui/Home.vue'
  import Login from './client/ui/Login.vue';  
  import NotFound from './client/ui/NotFound.vue'
  import PrivacyPolicy from './client/ui/PrivacyPolicy.vue';
  import PrivacyShieldNotice from './client/ui/PrivacyShieldNotice.vue';
  import Register from './client/ui/Register.vue';
  import ResetPassword from './client/ui/ResetPassword.vue';
  import Settings from './client/ui/Settings.vue';
  import TermsAndConditions from './client/ui/TermsAndConditions.vue';  
  import Users from './client/ui/Users.vue';
  import AddUser from './client/ui/AddUser.vue';
  import ImportUsers from './client/ui/ImportUsers.vue';
  import ExportUsers from './client/ui/ExportUsers.vue';

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
  Vue.component('Settings', Settings);
  Vue.component('DashboardSidebar', DashboardSidebar);
  Vue.component('TermsAndConditions', TermsAndConditions);
  Vue.component('TermsAndConditionsModal', TermsAndConditionsModal);
  Vue.component('TermsAndConditionsText', TermsAndConditionsText);
  Vue.component('TopNavBar', TopNavBar);
  Vue.component('Toast', Toast);
  Vue.component('SuccessAlert', SuccessAlert);
  Vue.component('ErrorAlert', ErrorAlert);

  Vue.component('Users', Users);
  Vue.component('AddUser',AddUser);
  Vue.component('ImportUsers',ImportUsers);
  Vue.component('ExportUsers',ExportUsers);

  const router = new VueRouter({mode: 'history', routes,});
  //https://github.com/Meteor-Community-Packages/meteor-roles/issues/218
  //https://github.com/meteor-vue/vue-meteor/issues/118
  //https://forums.meteor.com/t/persistent-login-help/45437/4
  /*export default withTracker(() => {
	const systemValsHandle = Meteor.subscribe('systemValues'),
			systemValsReady = systemValsHandle.ready(),
			userHandle = Meteor.subscribe('userData'),
			userReady = userHandle.ready(),
			loggingIn = Meteor.loggingIn(),
			userID = Meteor.userId();
	return {authenticated: !loggingIn && !!Meteor.userId(), loggingIn, pageReady: systemValsReady && userReady,userID};
})(App);
  */
  //You can use global navigation guards that will make the router wait for the user subscription to be ready.
  router.beforeEach((to, from, next) => 
  {
    if (Meteor.userId() == null && 
      (to.name ===SecureRoutes.Dashboard || to.name === SecureRoutes.Users || 
      to.name ===SecureRoutes.AddUser || to.name ===SecureRoutes.ImportUsers || 
      to.name ===SecureRoutes.ExportUsers || to.name ===SecureRoutes.AccountProfile ||  
      to.name ===SecureRoutes.Settings || to.name ===SecureRoutes.AccountBilling||
      to.name ===SecureRoutes.AccountNotifications))
    {
      next('/login');
    }
    else 
    {
      next();
    }
  });

  return {
    app: new Vue({
      el: '#app',
      router,
      ...App,
    }),
    router,
  }
}

export default createApp
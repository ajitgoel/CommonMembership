import Vue from 'vue'

import NotFound from './ui/NotFound.vue';
import Home from './ui/Home.vue';
import Dashboard from './ui/Dashboard.vue';
import AccountProfile from './ui/AccountProfile.vue';
import Settings from './ui/Settings.vue';
import AccountBilling from './ui/AccountBilling.vue';
import AccountNotifications from './ui/AccountNotifications.vue';
import Users from './ui/Users.vue';

import Register from './ui/Register.vue';
import Login from './ui/Login.vue';
import ResetPassword from './ui/ResetPassword.vue';
import PrivacyPolicy from './ui/PrivacyPolicy.vue';
import PrivacyShieldNotice from './ui/PrivacyShieldNotice.vue';
import TermsAndConditions from './ui/TermsAndConditions.vue';
import Contact from './ui/Contact.vue';

export default [
  { path: '/', name: 'home', component: Home },
  { path: '/dashboard/:domain', component: Dashboard,
    children: 
    [
      { path: '', name: 'dashboard', component: AccountProfile , props: true},
      { path: 'users', name: 'users', component: Users, props: true },
      { path: 'account-profile', name: 'account-profile', component: AccountProfile, props: true },
      { path: 'settings', name: 'settings', component: Settings , props: true},
      { path: 'account-billing', name: 'account-billing', component: AccountBilling , props: true},
      { path: 'account-notifications', name: 'account-notifications', component: AccountNotifications , props: true}
    ]
  },
  { path: '/register', name: 'register', component: Register },
  { path: '/login', name: 'login', component: Login },
  { path: '/resetpassword', name: 'resetpassword', component: ResetPassword },
  { path: '/privacypolicy', name: 'privacypolicy', component: PrivacyPolicy },
  { path: '/privacyshieldnotice', name: 'privacyshieldnotice', component: PrivacyShieldNotice },
  { path: '/termsandconditions', name: 'termsandconditions', component: TermsAndConditions },  
  { path: '/contact', name: 'contact', component: Contact },  
  { path: '*', name: 'not-found', component: NotFound },
]

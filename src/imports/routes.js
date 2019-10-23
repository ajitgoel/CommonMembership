import Vue from 'vue'

import NotFound from './ui/NotFound.vue'
import Home from './ui/Home.vue'
import Register from './ui/Register.vue';
import Login from './ui/Login.vue';
import ResetPassword from './ui/ResetPassword.vue';
import PrivacyPolicy from './ui/PrivacyPolicy.vue';
import TermsAndConditions from './ui/TermsAndConditions.vue';

export default [
  { path: '/', name: 'home', component: Home },
  { path: '/register', name: 'register', component: Register },
  { path: '/login', name: 'login', component: Login },
  { path: '/resetpassword', name: 'resetpassword', component: ResetPassword },
  { path: '/privacypolicy', name: 'privacypolicy', component: PrivacyPolicy },
  { path: '/termsandconditions', name: 'termsandconditions', component: TermsAndConditions },  
  { path: '*', name: 'not-found', component: NotFound },
]

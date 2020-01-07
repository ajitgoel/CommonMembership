import Vue from 'vue'
import { Accounts } from 'meteor/accounts-base';

import NotFound from './client/ui/NotFound.vue';
import Home from './client/ui/Home.vue';
import Dashboard from './client/ui/Dashboard.vue';
import AccountProfile from './client/ui/AccountProfile.vue';
import Settings from './client/ui/Settings.vue';
import AccountBilling from './client/ui/AccountBilling.vue';
import AccountNotifications from './client/ui/AccountNotifications.vue';
import Users from './client/ui/Users.vue';
import AddUser from './client/ui/AddUser.vue';
import ImportUsers from './client/ui/ImportUsers.vue';

import Register from './client/ui/Register.vue';
import Login from './client/ui/Login.vue';
import ResetPassword from './client/ui/ResetPassword.vue';
import ChangePassword from './client/ui/ChangePassword.vue';
import VerifyEmail from './client/ui/VerifyEmail.vue';
import PrivacyPolicy from './client/ui/PrivacyPolicy.vue';
import PrivacyShieldNotice from './client/ui/PrivacyShieldNotice.vue';
import TermsAndConditions from './client/ui/TermsAndConditions.vue';
import Contact from './client/ui/Contact.vue';
import { MeteorErrors, StateVariables, SecureRoutes, NonEmptyString} from './api/constants';

export default [
  { path: '/', name: 'home', component: Home },
  { path: '/dashboard/:domain', component: Dashboard,
    children: 
    [
      { path: '', name: SecureRoutes.Dashboard, component: AccountProfile , props: true},
      { path: 'users', name: SecureRoutes.Users, component: Users, props: true },
      { path: 'AddUser', name: SecureRoutes.AddUser, component: AddUser, props: true },
      { path: 'ImportUsers', name: SecureRoutes.ImportUsers, component: ImportUsers, props: true },
      
      { path: 'account-profile', name: SecureRoutes.AccountProfile, component: AccountProfile, props: true },
      { path: 'settings', name: SecureRoutes.Settings, component: Settings , props: true},
      { path: 'account-billing', name: SecureRoutes.AccountBilling, component: AccountBilling , props: true},
      { path: 'account-notifications', name: SecureRoutes.AccountNotifications, 
      component: AccountNotifications , props: true}
    ]
  },
  { path: '/register', name: 'register', component: Register },
  { path: '/login', name: 'login', component: Login },
  { path: '/resetpassword', name: 'resetpassword', component: ResetPassword },
  { path: '/changepassword/:token', name: 'changepassword', component: ChangePassword },
  { path: '/verifyemail/:token', name: 'verifyemail', component: VerifyEmail, props: true} ,
  { path: '/privacypolicy', name: 'privacypolicy', component: PrivacyPolicy },
  { path: '/privacyshieldnotice', name: 'privacyshieldnotice', component: PrivacyShieldNotice },
  { path: '/termsandconditions', name: 'termsandconditions', component: TermsAndConditions },  
  { path: '/contact', name: 'contact', component: Contact },  
  { path: '*', name: 'not-found', component: NotFound },
]

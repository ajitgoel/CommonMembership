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
import ExportUsers from './client/ui/ExportUsers.vue';

import Register from './client/ui/Register.vue';
import Login from './client/ui/Login.vue';
import ResetPassword from './client/ui/ResetPassword.vue';
import ChangePassword from './client/ui/ChangePassword.vue';
import PrivacyPolicy from './client/ui/PrivacyPolicy.vue';
import PrivacyShieldNotice from './client/ui/PrivacyShieldNotice.vue';
import TermsAndConditions from './client/ui/TermsAndConditions.vue';
import Contact from './client/ui/Contact.vue';

export default [
  { path: '/', name: 'home', component: Home },
  { path: '/dashboard/:domain', component: Dashboard,
    children: 
    [
      { path: '', name: 'dashboard', component: AccountProfile , props: true},
      { path: 'users', name: 'users', component: Users, props: true },
      { path: 'AddUser', name: 'add-user', component: AddUser, props: true },
      { path: 'ImportUsers', name: 'import-users', component: ImportUsers, props: true },
      { path: 'ExportUsers', name: 'export-users', component: ExportUsers, props: true },

      { path: 'account-profile', name: 'account-profile', component: AccountProfile, props: true },
      { path: 'settings', name: 'settings', component: Settings , props: true},
      { path: 'account-billing', name: 'account-billing', component: AccountBilling , props: true},
      { path: 'account-notifications', name: 'account-notifications', component: AccountNotifications , props: true}
    ]
  },
  { path: '/register', name: 'register', component: Register },
  { path: '/login', name: 'login', component: Login },
  { path: '/resetpassword', name: 'resetpassword', component: ResetPassword },
  { path: '/changepassword/:token', name: 'changepassword', component: ChangePassword },
  { path: '/verifyemail/:token', name: 'verifyemail', 
    beforeEnter: (to, from, next) => 
    {
      Accounts.verifyEmail(to.params.token, (error) =>
      {
        if (error) 
        {
          //ToDo: show error with error.reason
          console.warn('show error with error.reason');
        } 
        else 
        {          
          //ToDo: Check no of domains for user, if there are more than one domain then navigate to screen where the user can select domain.
          router.push({ name: 'dashboard', params: { domain: 'clearcrimson' }});                   
        }
      });
    } 
  },
  { path: '/privacypolicy', name: 'privacypolicy', component: PrivacyPolicy },
  { path: '/privacyshieldnotice', name: 'privacyshieldnotice', component: PrivacyShieldNotice },
  { path: '/termsandconditions', name: 'termsandconditions', component: TermsAndConditions },  
  { path: '/contact', name: 'contact', component: Contact },  
  { path: '*', name: 'not-found', component: NotFound },
]

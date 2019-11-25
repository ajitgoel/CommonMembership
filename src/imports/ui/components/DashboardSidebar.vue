<!--<template>
    <div>
      <div class="card-header py-3">
          <span class="h6">Settings</span>
      </div>
      <div class="list-group list-group-sm list-group-flush">
        <router-link v-bind:to="{ name: 'users', params: {domain:$route.params.domain} }" 
        class="list-group-item list-group-item-action d-flex justify-content-between">
            <div>
                <i class="fas fa-user-circle mr-2"></i>
                <span>Users</span>
            </div>
            <div>
                <i class="fas fa-angle-right"></i>
            </div>
        </router-link>

        <router-link v-bind:to="{ name: 'account-profile', params: {domain:$route.params.domain} }" 
        class="list-group-item list-group-item-action d-flex justify-content-between">
            <div>
                <i class="fas fa-user-circle mr-2"></i>
                <span>Profile</span>
            </div>
            <div>
                <i class="fas fa-angle-right"></i>
            </div>
        </router-link>
        <router-link v-bind:to="{ name: 'settings', params: {domain:$route.params.domain} }" 
        class="list-group-item list-group-item-action d-flex justify-content-between">
            <div>
                <i class="fas fa-cog mr-2"></i>
                <span>Settings</span>
            </div>
            <div>
                <i class="fas fa-angle-right"></i>
            </div>
        </router-link>
        <router-link v-bind:to="{ name: 'account-billing', params: {domain:$route.params.domain} }" 
        class="list-group-item list-group-item-action d-flex justify-content-between">
            <div>
                <i class="fas fa-credit-card mr-2"></i>
                <span>Billing</span>
            </div>
            <div>
                <i class="fas fa-angle-right"></i>
            </div>
        </router-link>
        <router-link v-bind:to="{ name: 'account-notifications', params: {domain:$route.params.domain} }" 
        class="list-group-item list-group-item-action d-flex justify-content-between">
            <div>
                <i class="fas fa-bell mr-2"></i>
                <span>Notifications</span>
            </div>
            <div>
                <i class="fas fa-angle-right"></i>
            </div>
        </router-link>
      </div>
    </div>
</template>

<script>
import '../../api/methods';
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';

export default {
  name: "SettingsMenu",
  components:{
  },
  created() {
        this.domain = this.$route.params.domain;
    },    
  data() {
    return {
      user: {
        emailpasswordInvalid:false,
        email: "",
        password: "",
        domain: "",
        domains:[]                
      },
      submitted: false,
      failureMessage:'',
    };
  },
  validations: 
  {
    user: 
    {
      email: { required, email },
      password:  { required, minLength: minLength(6) },
      domain: {domainSelected(val)
      {
        if (this.user.domains && this.user.domains.length>0 && val && val === 'Select domain') 
        {
          return false;
        }
        return true;
      }},    
    },    
  },
  methods: 
  {    
    LoginUserForDomain() 
    {
      this.submitted = true;
      this.failureMessage='';
      this.user.emailpasswordInvalid=false;

      this.$v.$touch();//it will validate all fields
      if (this.$v.$invalid) 
      {
          return;
      }
      Meteor.call('loginUserForDomain', this.user.email, this.user.password, this.user.domain, 
        (error, result) => 
        {
          if(error) 
          {     
            if(error.error && error.error==='email-password-invalid')
            {
              this.user.emailpasswordInvalid=true;
              return;  
            }
            this.failureMessage='There was an error logging you in. Our administrators have been notified of the issue and we will have a look.';
            return;
          } 
          if(result) 
          {
            if(result.userId && result.domain) 
            {                 
              Meteor.loginWithPassword(email, password);
              this.$router.push({ name: 'dashboard', params: { domain: result.domain }});                   
              return;
            }
            if(result.domains)
            {                 
              this.user.domains=JSON.parse(JSON.stringify(result.domains));
              return;
            }
          }
        }
        );
    },
  },
}
</script>


<style lang="less" scoped>

</style>
-->
<template>
  <v-card class="mx-auto" max-width="500">
    <v-sheet class="pa-4 primary lighten-2">
      <v-text-field v-model="search" label="Search settings" dark flat solo-inverted hide-details clearable 
      clear-icon="mdi-close-circle-outline"></v-text-field>
    </v-sheet>
    <v-card-text>
      <v-treeview :items="items" :search="search" :filter="filter" open-all>
        <template slot="label" slot-scope="props">
          <router-link v-bind:to="{name:props.item.to, params:{domain:$route.params.domain}}">
            {{props.item.name}}
          </router-link>
        </template>
      </v-treeview>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {
          id: 1,
          name: 'Users',
          to: 'users',
          children: [
            {
              id: 2,
              name: 'All users',   
              to: 'users',           
            },
            {
              id: 3,
              name: 'Add user',   
              to: 'add-user',           
            },
            {
              id: 4,
              name: 'Import users',   
              to: 'import-users',           
            },
            {
              id: 5,
              name: 'Export users',   
              to: 'export-users',           
            },
          ],
        },
        {
          id: 6,
          name: 'Profile',
          to: 'account-profile',
        },        
        {
          id: 7,
          name: 'Settings',
          to:'settings',
        },        
        {
          id: 8,
          name: 'Billing',
          to: 'account-billing',
        },        
        {
          id: 9,
          name: 'Notifications',
          to: 'account-notifications',
        },
      ],
      //open: [1, 2],
      search: null,
      caseSensitive: false,
    }),
    computed: {
      filter () {
        return this.caseSensitive
          ? (item, search, textKey) => item[textKey].indexOf(search) > -1
          : undefined
      },
    },
  }
</script>
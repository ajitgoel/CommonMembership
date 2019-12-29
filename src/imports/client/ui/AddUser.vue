<template>
  <div class="col-lg-9 order-lg-2">
    <div class="actions-toolbar py-2 mb-4">
      <h5 class="mb-1">Add New User</h5>
      <p class="text-sm text-muted mb-0">Create a brand new user and add them to this site.</p>
    </div>
    <form>
      <div class="row">
        <div class="col-md-9">
          <div class="form-group">
            <label class="form-control-label">Email (required)</label>
            <div class="input-group input-group-merge">
              <div class="input-group-prepend">
                <span class="input-group-text"><i class="fas fa-user"></i></span>
              </div>
              <input v-focus v-model="user.email" 
              :class="{ 'is-invalid': submitted && $v.user.email.$error}"                                
              type="email" data-cy="email" class="form-control" placeholder="name@example.com" 
              autocomplete="off"  id="email" name="email" 
              style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABHklEQVQ4EaVTO26DQBD1ohQWaS2lg9JybZ+AK7hNwx2oIoVf4UPQ0Lj1FdKktevIpel8AKNUkDcWMxpgSaIEaTVv3sx7uztiTdu2s/98DywOw3Dued4Who/M2aIx5lZV1aEsy0+qiwHELyi+Ytl0PQ69SxAxkWIA4RMRTdNsKE59juMcuZd6xIAFeZ6fGCdJ8kY4y7KAuTRNGd7jyEBXsdOPE3a0QGPsniOnnYMO67LgSQN9T41F2QGrQRRFCwyzoIF2qyBuKKbcOgPXdVeY9rMWgNsjf9ccYesJhk3f5dYT1HX9gR0LLQR30TnjkUEcx2uIuS4RnI+aj6sJR0AM8AaumPaM/rRehyWhXqbFAA9kh3/8/NvHxAYGAsZ/il8IalkCLBfNVAAAAABJRU5ErkJggg==&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: auto;">                      
              <div v-if="submitted && $v.user.email.$error" class="invalid-feedback">
                <span v-if="!$v.user.email.required">Email is required</span>
                <span v-if="!$v.user.email.email">Email is invalid</span>
              </div>

              <!--<div v-if="submitted && this.user.userExistsforDomain" class="invalid-feedback">
                <span>A user already exists for this domain. Please select another one or 
                  <router-link v-bind:to="{ name: 'login' }" class="small font-weight-bold">Sign in</router-link> to continue.
                </span>   
              </div>-->

            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label class="form-control-label">First name</label>
            <input data-cy="firstname" v-model="user.firstname" class="form-control" type="text" placeholder="Enter your first name">
          </div>
        </div>

        <div class="col-md-6">
          <div class="form-group">
            <label class="form-control-label">Last name</label>
            <input data-cy="lastname" v-model="user.lastname" class="form-control" type="text" placeholder="Also your last name">
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <label class="form-control-label">Password</label><br/>
            <input data-cy="password" v-if="showPassword" v-model="user.password" class="form-control" type="text">
            <button data-cy="showpassword" v-if="!showPassword" v-on:click="ToggleShowPassword()" type="button" 
            class="btn btn-sm btn-secondary">Show Password</button>
            <!--<button data-cy="hidepassword" v-if="showPassword" v-on:click="HidePassword()" type="button" 
            class="btn btn-sm btn-secondary">
              <span class="btn-inner--icon">
                <i v-bind:class="showPassword?'fas fa-eye': 'fas fa-eye-slash'"></i>
              </span>
              Hide
            </button>-->
            <button data-cy="showpasswordbutton" v-if="showPassword" v-on:click="ToggleShowPassword()" type="button" 
            class="btn btn-sm btn-secondary">Cancel</button>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <div class="form-group">            
            <label class="form-control-label">Send User Notification</label>
            <div class="custom-control custom-checkbox">
              <input type="checkbox" data-cy="sendusernotification" class="custom-control-input" id="sendUserNotification" 
              v-model="user.sendUserNotification">
              <label class="custom-control-label" for="sendUserNotification">Send the new user an email about their account.</label>                   
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <div class="form-group">            

            <div class="col-md-6">
              <div class="form-group focused">
                <label class="form-control-label">Role</label>
                <select data-cy="role" v-model="user.role" class="form-control select2-hidden-accessible" data-toggle="select" 
                data-select2-id="1" tabindex="-1" aria-hidden="true">
                  <option value="seo_editor">SEO Editor</option>
                  <option value="seo_manager">SEO Manager</option>
                  <option selected="selected" value="subscriber">Subscriber</option>
                  <option value="contributor">Contributor</option>
                  <option value="author">Author</option>
                  <option value="editor">Editor</option>
                  <option value="administrator">Administrator</option>			
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="pt-2 mt-2 delimiter-top text-left">
        <button data-cy="adduser" v-bind:disabled="this.disableButton" v-on:click="AddNewUser()" id="addnewuser" 
        type="button" class="btn btn-sm btn-primary">Add New User</button>
      </div>

    </form>
    <br/>
    <SuccessAlert ref="successAlert" data-cy="successalert" v-bind:message='this.successMessage'/>              
    <ErrorAlert ref="errorAlert" data-cy="erroralert" v-bind:message='this.failureMessage'/>

  </div>
</template>

<script>
import '../../api/methods.js';
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
import { Meteor } from 'meteor/meteor';
import { MeteorErrors, StateVariables} from '../../api/constants';

export default {
  name: "AddUser",
  components:{
  },
  data() {
    return {
      user: {
        email: "",
        firstname: "",
        lastname: "",
        password: "",
        hiddenpassword:'',
        sendUserNotification:false,
        role: "",
      },
      submitted: false,
      disableButton:false,      
      failureMessage:'',
      successMessage:'',
      showPassword:false
    };
  },
  validations: 
  {
    user: 
    {
      email: { required, email },
    },
  },
  mounted() 
  {
    var generatePassword = require("generate-password");
    this.user.password = generatePassword.generate({length: 24, numbers: true, symbols:true, uppercase:true});      
  },
  methods: 
  {  
    ToggleShowPassword()
    {
      this.showPassword=!this.showPassword;
    },
    /*HidePassword()
    {
      let passwordlength=this.user.password.length;
      this.user.hiddenpassword='*'.repeat(passwordlength);
      console.log(this.user.hiddenpassword);
    },*/
    AddNewUser() 
    {
      this.disableButton=false;
      this.submitted = true;
      this.failureMessage='';
      this.successMessage='';

      this.$v.$touch();
      if (this.$v.$invalid) 
      {
          return;
      }

      this.disableButton=true;
      let domain= this.$root.getValue(StateVariables.SelectedDomain);
      let email=this.user.email.toString().toLowerCase();
      
      console.log(`${this.user.email} ${this.user.firstname} ${this.user.lastname} ${this.user.password} 
      ${this.user.sendUserNotification} ${this.user.role}`);
      Meteor.call('addUserForExistingDomain', email, this.user.password, domain, this.user.firstname, this.user.lastname, 
        this.user.sendUserNotification, this.user.role, (error, result)=>
      {
        this.disableButton=false;
        if(error) 
        {     
          this.failureMessage='There was an error adding a new user. Our administrators have been notified of the issue and we will have a look.';
          return;
        } 
        if(result) 
        {
          this.successMessage='User was added successfully.';
          this.user.email='';
          this.user.firstname='';
          this.user.lastname=''; 
          this.user.password='';
          this.user.sendUserNotification=false;
          this.user.role='';

          return;
        }
      });
    },
  },
}
</script>

<style lang="less" scoped>

</style>

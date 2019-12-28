<template>
  <div class="col-lg-9 order-lg-2">
    <div class="actions-toolbar py-2 mb-4">
      <h5 class="mb-1">Import users from a CSV file</h5>
      <!--<p class="text-sm text-muted mb-0">Create a brand new user and add them to this site.</p>-->
    </div>
    <form role="form">
      <div valign="top">
        <div class="row">
          <div class="col-md-3">
              <label class="form-control-label">CSV file</label>
          </div>
          <div class="col-md-9">
            <input data-cy="file" type="file" name="file" id="file" class="custom-input-file"/>
            <label for="file">
                <i class="fa fa-upload"></i>
                <span>Choose a file…</span>
            </label>
            <span>
              You may want to see <a href="/csv/import.csv">the example of the CSV file</a>.							
            </span>
            
          </div>
        </div>   
      
        <div class="row">
          <div class="col-md-3">
              <label class="form-control-label">Notification</label>
          </div>
          <div class="col-md-9">
            <div class="custom-control custom-checkbox" 
            v-bind:class="{ 'is-invalid': submitted && $v.user.sendUserNotification.$error }">
              <input type="checkbox" data-cy="sendusernotification" class="custom-control-input" id="sendUserNotification" 
              v-on:change="$v.user.sendUserNotification.$touch()" v-model="user.sendUserNotification">
              <label class="custom-control-label" for="sendUserNotification">Send to new users</label>                   
            </div>
            
          </div>
        </div>
      </div>  
      
      <div class="pt-2 mt-2 delimiter-top text-left">      
        <button data-cy="importusers" v-bind:disabled="this.disableButton" v-on:click="ImportUsers()" id="importusers" 
        type="button" class="btn btn-sm btn-primary">Import Users</button>
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
import { MeteorErrors } from '../../api/constants';

export default {
  name: "ImportUsers",
  components:{
  },
  data() {
    return {
      user: {
        domain: "",
        domainExists:false,
        userExistsforDomain: false,
        email: "",
        password: "",
        confirmPassword: "",
        termsAndConditions:false,
        privacyPolicy:false,
      },
      submitted: false,
      disableButton:false,      
      failureMessage:''
    };
  },
  validations: 
  {
    user: 
    {
      domain: { required },
      email: { required, email },
	    password:  { required, minLength: minLength(6) },
      confirmPassword:  { required, sameAsPassword: sameAs('password') },
      termsAndConditions: {checked(val)
      {
        return val;
      }},
      privacyPolicy: {checked(val)
      {
        return val;
      }},
    },
  },
  methods: 
  {  
    RegisterUser() 
    {
      this.disableButton=false;
      this.submitted = true;
      this.failureMessage='';
      this.user.userExistsforDomain=false;
      this.user.domainExists=false;

      this.$v.$touch();
      if (this.$v.$invalid) 
      {
          return;
      }

      this.disableButton=true;
      Meteor.call('createUserForDomain', this.user.email, this.user.password, this.user.domain, (error, result)=>
      {
        this.disableButton=false;
        if(error) 
        {     
          if(error.error && error.error===MeteorErrors.DomainAlreadyInUse)
          {
            this.user.domainExists=true;
            return;  
          }

          if(error.error && error.error===MeteorErrors.UserExistsForDomain)
          {
            this.user.userExistsforDomain=true;
            return;  
          }
          this.failureMessage='There was an error registering your domain and adding you as a user. Our administrators have been notified of the issue and we will have a look.';
        return;
        } 
        if(result && result.userId && result.domain ) 
      {
          this.$router.push({ name: 'dashboard', params: { domain: result.domain }});                  
          return;
        }
        this.failureMessage='There was an error registering your domain. Our administrators have been notified of the issue and we will have a look.';
        return;
      });
    },
    showPrivacyPolicyModal() 
    {
      let element = this.$refs.PrivacyPolicyModal.$el;
      $(element).modal('show');
    },
    showTermsAndConditionsModal() 
    {
      let element = this.$refs.TermsAndConditionsModal.$el;
      $(element).modal('show');
    }
  },
}
</script>

<style lang="less" scoped>

</style>

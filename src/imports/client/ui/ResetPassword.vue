<template>
  <div class="main-content">
    <section class="slice slice-lg bg-gradient-dark" data-offset-top="#header-main">
      <div class="bg-absolute-cover bg-size--contain d-flex align-items-center">
        <figure class="w-100 d-none d-lg-block">
          <img alt="Image placeholder" src="/img/svg/backgrounds/bg-circles-1.svg" class="svg-inject">
        </figure>
      </div>
    </section>
    
    <div class="container h-100vh d-flex align-items-center">
      <div class="col">
        <div class="row justify-content-center">
          <div class="col-md-6 col-lg-5 col-xl-4">
            <div>
              <div class="mb-5 text-center">
                <h6 class="h3">Password reset</h6>
                <p class="text-muted mb-0">Enter your email below to proceed.</p>
              </div>
              <span class="clearfix"></span>
              <form role="form">
                <div class="form-group">
                  <label class="form-control-label">Email address</label>
                  <div class="input-group input-group-merge">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><i class="fas fa-user"></i></span>
                    </div>
                    <input type="email" data-cy="email" class="form-control" placeholder="name@example.com" 
                    autocomplete="off" v-focus v-model="user.email" id="email" name="email" 
                    :class="{ 'is-invalid': submitted && ($v.user.email.$error || this.user.emailInvalid) }"
                    style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: auto;">
                    <div v-if="submitted && ($v.user.email.$error || this.user.emailInvalid)" class="invalid-feedback">
                      <span v-if="!$v.user.email.required">Email is required</span>
                      <span v-if="!$v.user.email.email">Email is invalid</span>
                      <span data-cy="emailinvalid" v-if="this.user.emailInvalid">We could not find your account. Enter a different email or click
                        <router-link v-bind:to="{ name: 'register' }" class="small font-weight-bold">Register</router-link> to continue.
                      </span>
                    </div>
                  </div>
                </div>
                <div class="mt-4">
                  <button type="button" data-cy="resetpassword" class="btn btn-block btn-primary" v-bind:disabled="this.disableButton" v-on:click="ResetPassword()">
                    Reset password
                  </button>
                </div>
              </form>              

              <br/>
              <SuccessAlert ref="successAlert" data-cy="successalert" v-bind:message='this.successMessage'/>
              <ErrorAlert ref="errorAlert" data-cy="erroralert" v-bind:message='this.failureMessage'/>

              <div class="mt-4 text-center"><small>Not registered?</small>
                <router-link v-bind:to="{ name:'register'}" class="small font-weight-bold">Create account</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../../api/methods.js';
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';

export default {
  name: "ResetPassword",
  components:{
  },
  data() {
    return {
      user: {
        emailInvalid:false,
        email: "",      
      },
      submitted: false,
      disableButton:false,      
      failureMessage:'',
      successMessage:''
    };
  },
  validations: 
  {
    user: 
    {
      email: { required, email },      
    },    
  },
  methods: 
  {    
    ResetPassword() 
    {    
      this.disableButton=false;
      this.submitted = true;
      this.failureMessage='';
      this.successMessage='';
      this.user.emailInvalid=false;

      this.$v.$touch();//it will validate all fields
      if (this.$v.$invalid) 
      {
          return;
      }     

      this.disableButton=true;
      Meteor.call('resetUserPassword', this.user.email, (error, result)=>
      {
        this.disableButton=false;
        if(error) 
        {     
          if(error.error && error.error==='email-invalid')
          {
            this.user.emailInvalid=true;
            return;  
          }
          this.failureMessage='There was an error resetting your account. Our administrators have been notified of the issue and we will have a look.';
          return;
        } 
        if(result) 
        {
          if(typeof result === "boolean" && result === true)
          {                 
            this.user.email='';
            this.$v.$reset();
            this.successMessage='Please check your email for instructions on how to reset your password';                  
            return;
          }
        }
      });
    },
  },
}
</script>

<style lang="less" scoped>

</style>

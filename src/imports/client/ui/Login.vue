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
                <h6 class="h3">Login</h6>
                <p class="text-muted mb-0">Sign in to your account to continue.</p>
              </div>

              <div class="alert alert-outline-warning" role="alert">
                For security reasons, if you refresh the browser after logging in then you will be asked to relogin into the system again. 
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
                    :class="{ 'is-invalid': submitted && ($v.user.email.$error || this.user.emailpasswordInvalid) }"
                    style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: auto;">
                    <div v-if="submitted && $v.user.email.$error" class="invalid-feedback">
                      <span v-if="!$v.user.email.required">Email is required</span>
                      <span v-if="!$v.user.email.email">Email is invalid</span>
                    </div>

                    <div v-if="submitted && this.user.emailpasswordInvalid" data-cy="emailpasswordinvalid" class="invalid-feedback">
                      <span>The email or password that you entered is invalid. Please try again or 
                        <router-link v-bind:to="{ name: 'resetpassword' }" class="small font-weight-bold">Change password</router-link> to continue.
                      </span>   
                    </div>
                  </div>
                </div>
                <div class="form-group mb-4">
                  <div class="d-flex align-items-center justify-content-between">
                    <div>
                      <label class="form-control-label">Password</label>
                    </div>
                    <div class="mb-2">
                      <router-link v-bind:to="{ name: 'resetpassword' }" 
                      class="small text-muted text-underline--dashed border-primary">Change password?</router-link>
                    </div>
                  </div>
                  <div class="input-group input-group-merge">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><i class="fas fa-key"></i></span>
                    </div>
                    <input type="password" data-cy="password" class="form-control" placeholder="Password" autocomplete="off" 
                    v-model="user.password" id="password" name="password" 
                    :class="{ 'is-invalid': submitted && $v.user.password.$error }"                                
                    style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: auto;">
                    <div class="input-group-append">
                      <span class="input-group-text">
                        <i class="fas fa-eye"></i>
                      </span>
                    </div>
                    <div v-if="submitted && $v.user.password.$error" class="invalid-feedback">
                      <span v-if="!$v.user.password.required">Password is required</span>
                      <span v-if="!$v.user.password.minLength">Password must be at least 6 characters</span>
                    </div>
                  </div>
                </div>

                <div class="form-group mb-4" v-if="this.user.domains.length>0">
                  <label class="form-control-label">Domain</label>

                  <div class="input-group input-group-merge">
                    <select class="custom-select" data-cy="domain" id="domain" name="domain" v-model="user.domain" 
                    v-on:change="$v.user.domain.$touch()" :class="{'is-invalid':submitted && $v.user.domain.$error }"> 
                      <option selected>{{defaultDomain}}</option>
                      <option v-for="counter in user.domains" v-bind:value="counter" v-bind:key="counter">
                        {{counter}}
                      </option>
                    </select>
                  </div>

                  <div data-cy="domainnotselectederror" v-if="submitted && $v.user.domain.$error" class="invalid-feedback">
                    <span v-if="!$v.user.domain.domainSelected">Please select a valid domain</span>
                  </div>
                </div>

                <div class="mt-4">
                  <button type="button" data-cy="loginuser" class="btn btn-block btn-primary" 
                  v-bind:disabled="this.disableButton" v-on:click="LoginUserForDomain()">
                    Sign in
                  </button>
                </div>
              </form>            

              <br/>
              <SuccessAlert ref="successAlert" data-cy="successalert" 
              v-bind:message='this.navigationMessage'/>
              <ErrorAlert ref="errorAlert" data-cy="erroralert" v-bind:message='this.failureMessage'/>

              <div class="mt-4 text-center"><small>Not registered?</small>
                <router-link v-bind:to="{ name: 'register' }" class="small font-weight-bold">Create account</router-link>
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
import { MeteorErrors, StateVariables, SecureRoutes, NonEmptyString} from '../../api/constants';

export default 
{
  name: "Login",
  components:{
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
      disableButton:false,      
      failureMessage:'',
      defaultDomain:'Select domain',
      navigationMessage:'',
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
        if (this.user.domains && this.user.domains.length>0 && val && val === this.defaultDomain) 
        {
          return false;
        }
        return true;
      }},    
    },    
  },
  mounted() 
  {
    let navigationmessagefromlocalstorage=this.$root.getValue(StateVariables.NavigationMessage);
    this.navigationMessage=navigationmessagefromlocalstorage;
    this.$root.clearValue(StateVariables.NavigationMessage);
  },
  methods: 
  {     
    LoginUserForDomain() 
    {
      this.disableButton=false;
      this.submitted = true;
      this.failureMessage='';
      this.user.emailpasswordInvalid=false;

      this.$v.$touch();//it will validate all fields
      if (this.$v.$invalid) 
      {
          return;
      }
      let email=this.user.email.toLowerCase().trim();
      let router = this.$router;
      let root = this.$root;
      this.disableButton=true;      
      Meteor.call('loginUserForDomain', email, this.user.password, this.user.domain, (error1, result)=>
      {
        this.disableButton=false;
        if(error1) 
        {     
          if(error1.error && error1.error===MeteorErrors.NotAuthorized)
          {
            this.failureMessage=MeteorErrors.NotAuthorizedFailureMessage;
            return;  
          }
          if(error1.error && error1.error===MeteorErrors.EmailPasswordInvalid)
          {
            this.user.emailpasswordInvalid=true;
            return;  
          }
          this.failureMessage='There was an error logging you in. Our administrators have been notified of the issue and we will have a look.';
          return;
        } 
        if(result && result.userId && result.domain) 
        {                 
          this.disableButton=true;
          Meteor.loginWithPassword(email, this.user.password, (error2)=>
          {
            this.disableButton=false;
            if(error2)
            {
              this.failureMessage='There was an error logging you in. Our administrators have been notified of the issue and we will have a look.';
              return;
            } 
            else 
            {
              root.setValue(StateVariables.SelectedDomain, result.domain);
              router.push({ name: 'dashboard', params: { domain: result.domain }});                   
              return;
            }
          });
        }

        if(result && result.domains)
        {                 
          this.user.domains=result.domains;
          this.user.domain=this.defaultDomain;
          return;
        }
      });
    },
  },
}
</script>

<style lang="less" scoped>

</style>


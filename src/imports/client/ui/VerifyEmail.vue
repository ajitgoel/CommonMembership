<template>
  <div class="main-content">
    <section class="slice slice-lg bg-gradient-dark" data-offset-top="#header-main">
      <div class="bg-absolute-cover bg-size--contain d-flex align-items-center">
        <figure class="w-100 d-none d-lg-block">
          <img alt="Image placeholder" src="/img/svg/backgrounds/bg-circles-1.svg" class="svg-inject">
        </figure>
      </div>
    </section>  
    <div class="container min-vh-100 d-flex align-items-center">
      <div class="col py-5">
        <div class="row justify-content-center">
          <div class="col-md-8 col-lg-6">
            <div>
              <div class="mb-5 text-center">
                <h6 class="h3">Verify Email</h6>
                <p class="text-muted mb-0">Made with love by developers for everyone.</p>
              </div>
              <span class="clearfix"></span>     
              <ErrorAlert ref="errorAlert" v-bind:message='this.failureMessage'/>

              <div class="mt-4 text-center"><small>Already have an account?</small>
                  <router-link v-bind:to="{ name: 'login' }" class="small font-weight-bold">Sign in</router-link>
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
import { Accounts } from 'meteor/accounts-base';
import { MeteorErrors, StateVariables, SecureRoutes} from '../../api/constants';

export default 
{
  name: "VerifyEmail",
  components:{
  },
  data() {
    return {
      failureMessage:'',      
    };
  },
  validations: 
  {
  },
  methods: 
  { 

  },
  mounted() 
  {
    let token=this.$route.params.token;
    let errorVerifyingEmailMessage=
      'There was an error verifying your email. Our administrators have been notified of the issue and we will have a look.';
    Accounts.verifyEmail(token, (error1) =>
    {
      console.warn(`${error1}`)
      if (error1) 
      {
        this.failureMessage=errorVerifyingEmailMessage;
      } 
      else 
      {          
        Meteor.logout((error2)=>
        {
          console.warn(`${error2}`)
          if (error2) 
          {
            this.failureMessage=errorVerifyingEmailMessage;
          }
          else
          {            
            this.$root.clear();
            this.$root.setValue(StateVariables.NavigationMessage,
              'Your email has been verified successfully. Please login to continue.');
            this.$router.push({ name: 'login'});                   
          }   
        }).bind(this);
      }
    });
  },
}
</script>

<style lang="less" scoped>

</style>

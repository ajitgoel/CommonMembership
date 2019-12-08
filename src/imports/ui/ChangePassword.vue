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
                  <h6 class="h3">Change password</h6>
                  <p class="text-muted mb-0">Made with love by developers for everyone.</p>
              </div>
              <span class="clearfix"></span>
              <form role="form">

                <div class="form-group mb-4">
                  <label class="form-control-label">Password</label>
                  <div class="input-group input-group-merge">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><i class="fas fa-key"></i></span>
                    </div>
                    <input type="password" class="form-control" placeholder="********" 
                    v-model="user.password" id="password" name="password" :class="{ 'is-invalid': submitted && $v.user.password.$error }"                                
                    style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACIUlEQVQ4EX2TOYhTURSG87IMihDsjGghBhFBmHFDHLWwSqcikk4RRKJgk0KL7C8bMpWpZtIqNkEUl1ZCgs0wOo0SxiLMDApWlgOPrH7/5b2QkYwX7jvn/uc//zl3edZ4PPbNGvF4fC4ajR5VrNvt/mo0Gr1ZPOtfgWw2e9Lv9+chX7cs64CS4Oxg3o9GI7tUKv0Q5o1dAiTfCgQCLwnOkfQOu+oSLyJ2A783HA7vIPLGxX0TgVwud4HKn0nc7Pf7N6vV6oZHkkX8FPG3uMfgXC0Wi2vCg/poUKGGcagQI3k7k8mcp5slcGswGDwpl8tfwGJg3xB6Dvey8vz6oH4C3iXcFYjbwiDeo1KafafkC3NjK7iL5ESFGQEUF7Sg+ifZdDp9GnMF/KGmfBdT2HCwZ7TwtrBPC7rQaav6Iv48rqZwg+F+p8hOMBj0IbxfMdMBrW5pAVGV/ztINByENkU0t5BIJEKRSOQ3Aj+Z57iFs1R5NK3EQS6HQqF1zmQdzpFWq3W42WwOTAf1er1PF2USFlC+qxMvFAr3HcexWX+QX6lUvsKpkTyPSEXJkw6MQ4S38Ljdbi8rmM/nY+CvgNcQqdH6U/xrYK9t244jZv6ByUOSiDdIfgBZ12U6dHEHu9TpdIr8F0OP692CtzaW/a6y3y0Wx5kbFHvGuXzkgf0xhKnPzA4UTyaTB8Ph8AvcHi3fnsrZ7Wore02YViqVOrRXXPhfqP8j6MYlawoAAAAASUVORK5CYII=&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: auto;">
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

                <div class="form-group">
                  <label class="form-control-label">Confirm password</label>
                  <div class="input-group input-group-merge">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><i class="fas fa-key"></i></span>
                    </div>                      
                    <input type="password" class="form-control" placeholder="********"                         
                    v-model="user.confirmPassword" id="confirmPassword" name="confirmPassword" 
                    :class="{ 'is-invalid': submitted && $v.user.confirmPassword.$error }" 
                    style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACIUlEQVQ4EX2TOYhTURSG87IMihDsjGghBhFBmHFDHLWwSqcikk4RRKJgk0KL7C8bMpWpZtIqNkEUl1ZCgs0wOo0SxiLMDApWlgOPrH7/5b2QkYwX7jvn/uc//zl3edZ4PPbNGvF4fC4ajR5VrNvt/mo0Gr1ZPOtfgWw2e9Lv9+chX7cs64CS4Oxg3o9GI7tUKv0Q5o1dAiTfCgQCLwnOkfQOu+oSLyJ2A783HA7vIPLGxX0TgVwud4HKn0nc7Pf7N6vV6oZHkkX8FPG3uMfgXC0Wi2vCg/poUKGGcagQI3k7k8mcp5slcGswGDwpl8tfwGJg3xB6Dvey8vz6oH4C3iXcFYjbwiDeo1KafafkC3NjK7iL5ESFGQEUF7Sg+ifZdDp9GnMF/KGmfBdT2HCwZ7TwtrBPC7rQaav6Iv48rqZwg+F+p8hOMBj0IbxfMdMBrW5pAVGV/ztINByENkU0t5BIJEKRSOQ3Aj+Z57iFs1R5NK3EQS6HQqF1zmQdzpFWq3W42WwOTAf1er1PF2USFlC+qxMvFAr3HcexWX+QX6lUvsKpkTyPSEXJkw6MQ4S38Ljdbi8rmM/nY+CvgNcQqdH6U/xrYK9t244jZv6ByUOSiDdIfgBZ12U6dHEHu9TpdIr8F0OP692CtzaW/a6y3y0Wx5kbFHvGuXzkgf0xhKnPzA4UTyaTB8Ph8AvcHi3fnsrZ7Wore02YViqVOrRXXPhfqP8j6MYlawoAAAAASUVORK5CYII=&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: auto;">
                    <div v-if="submitted && $v.user.confirmPassword.$error" class="invalid-feedback">
                      <span v-if="!$v.user.confirmPassword.required">Confirm Password is required</span>
                      <span v-else-if="!$v.user.confirmPassword.sameAsPassword">Passwords must match</span>
                    </div>
                  </div>                    
                </div>
                                
                <div class="mt-4">
                  <button type="button" class="btn btn-block btn-primary" v-bind:disabled="this.disableButton" 
                  v-on:click="ChangePassword()">
                    Change Password
                  </button>
                </div>
                
                <br/>

                <div class="alert alert-modern alert-warning" v-if="this.failureMessage!=''">    
                  <span class="badge badge-danger badge-pill">Error</span>
                  <span class="alert-content">{{this.failureMessage}}</span>
                </div>

            </form>
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
import '../api/methods.js';
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

export default 
{
  name: "ChangePassword",
  components:{
  },
  data() {
    return {
      user: {
        password: "",
        confirmPassword: "",
      },
      submitted: false,
      disableButton:false,    
      failureMessage:'',      
    };
  },
  validations: 
  {
    user: 
    {
      password:  { required, minLength: minLength(6) },
      confirmPassword:  { required, sameAsPassword: sameAs('password') },
    },
  },
  methods: 
  {  
    ChangePassword() 
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
      let token=this.$route.params.token;

      this.disableButton=true;
      Accounts.resetPassword(token, this.user.password, (error)=>
      {
        this.disableButton=false;
        if(error) 
        {     
          this.failureMessage='There was an error resetting your password. Our administrators have been notified of the issue and we will have a look.';
          return;
        }        
      });
      this.$eventHub.$emit('navigation-message', 'Your password has been changed successfully. Please login to continue.');
      this.$router.push({ name: 'login'});                  
    },
  },
}
</script>

<style lang="less" scoped>

</style>

<template>
  <div class="col-lg-9 order-lg-2">
    <!-- Notification -->
    <div class="actions-toolbar py-2 mb-4">
      <h5 class="mb-1">Shop notifications</h5>
      <p class="text-sm text-muted mb-0">Be notified only about the things that matter to you.</p>
    </div>
    <div class="card">
      <div class="list-group list-group-flush">
        <div class="list-group-item d-flex w-100 justify-content-between">
          <div>
            <h6 class="mb-1">A product from wishlist is on sale</h6>
            <span class="text-sm text-muted">You will receive an alert when one of your favorite products has a discount price.</span>
          </div>
          <div>
            <div class="custom-control custom-switch">
              <input type="checkbox" class="custom-control-input" id="shop-notification-1" v-focus >
              <label class="custom-control-label" for="shop-notification-1"></label>
            </div>
          </div>
        </div>
        <div class="list-group-item d-flex w-100 justify-content-between">
          <div>
            <h6 class="mb-1">A new product is released</h6>
            <span class="text-sm text-muted">You will receive an alert when one of your favorite products has a discount price.</span>
          </div>
          <div>
            <div class="custom-control custom-switch">
              <input type="checkbox" class="custom-control-input" id="shop-notification-2">
              <label class="custom-control-label" for="shop-notification-2"></label>
            </div>
          </div>
        </div>
        <div class="list-group-item d-flex w-100 justify-content-between">
          <div>
            <h6 class="mb-1">New promotions are available</h6>
            <span class="text-sm text-muted">You will receive an alert when one of your favorite products has a discount price.</span>
          </div>
          <div>
            <div class="custom-control custom-switch">
              <input type="checkbox" class="custom-control-input" id="shop-notification-3">
              <label class="custom-control-label" for="shop-notification-3"></label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-5">
      <!-- Notification -->
      <div class="actions-toolbar py-2 mb-4">
        <h5 class="mb-1">Card notifications</h5>
        <p class="text-sm text-muted mb-0">Be notified only about the things that matter to you.</p>
      </div>
      <div class="card">
        <div class="list-group list-group-flush">
          <div class="list-group-item d-flex w-100 justify-content-between">
            <div>
              <h6 class="mb-1">Insufficient funds on credit card</h6>
              <span class="text-sm text-muted">You will receive an alert when one of your favorite products has a discount price.</span>
            </div>
            <div>
              <div class="custom-control custom-switch">
                <input type="checkbox" class="custom-control-input" id="card-notification-1">
                <label class="custom-control-label" for="card-notification-1"></label>
              </div>
            </div>
          </div>
          <div class="list-group-item d-flex w-100 justify-content-between">
            <div>
              <h6 class="mb-1">Send monthly invoices via email</h6>
              <span class="text-sm text-muted">You will receive an alert when one of your favorite products has a discount price.</span>
            </div>
            <div>
              <div class="custom-control custom-switch">
                <input type="checkbox" class="custom-control-input" id="card-notification-2">
                <label class="custom-control-label" for="card-notification-2"></label>
              </div>
            </div>
          </div>
          <div class="list-group-item d-flex w-100 justify-content-between">
            <div>
              <h6 class="mb-1">You balance is almost 0</h6>
              <span class="text-sm text-muted">You will receive an alert when one of your favorite products has a discount price.</span>
            </div>
            <div>
              <div class="custom-control custom-switch">
                <input type="checkbox" class="custom-control-input" id="card-notification-3">
                <label class="custom-control-label" for="card-notification-3"></label>
              </div>
            </div>
          </div>
          <div class="list-group-item d-flex w-100 justify-content-between">
            <div>
              <h6 class="mb-1">Expired cred card</h6>
              <span class="text-sm text-muted">You will receive an alert when one of your favorite products has a discount price.</span>
            </div>
            <div>
              <div class="custom-control custom-switch">
                <input type="checkbox" class="custom-control-input" id="card-notification-4">
                <label class="custom-control-label" for="card-notification-4"></label>
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
import { Session } from 'meteor/session';

export default {
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


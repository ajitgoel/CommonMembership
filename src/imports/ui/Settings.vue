<template>
  <div class="col-lg-9 order-lg-2">
    <form>
      <div class="actions-toolbar py-2 mb-4">
        <h5 class="mb-1">Change password</h5>
        <p class="text-sm text-muted mb-0">You can help us, by filling your data, create you a much better experience using our website.</p>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label class="form-control-label">Old password</label>
            <input class="form-control" type="password" autocomplete="off" v-focus 
            style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: auto;">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label class="form-control-label">New password</label>
            <input class="form-control" type="password" 
            style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACIUlEQVQ4EX2TOYhTURSG87IMihDsjGghBhFBmHFDHLWwSqcikk4RRKJgk0KL7C8bMpWpZtIqNkEUl1ZCgs0wOo0SxiLMDApWlgOPrH7/5b2QkYwX7jvn/uc//zl3edZ4PPbNGvF4fC4ajR5VrNvt/mo0Gr1ZPOtfgWw2e9Lv9+chX7cs64CS4Oxg3o9GI7tUKv0Q5o1dAiTfCgQCLwnOkfQOu+oSLyJ2A783HA7vIPLGxX0TgVwud4HKn0nc7Pf7N6vV6oZHkkX8FPG3uMfgXC0Wi2vCg/poUKGGcagQI3k7k8mcp5slcGswGDwpl8tfwGJg3xB6Dvey8vz6oH4C3iXcFYjbwiDeo1KafafkC3NjK7iL5ESFGQEUF7Sg+ifZdDp9GnMF/KGmfBdT2HCwZ7TwtrBPC7rQaav6Iv48rqZwg+F+p8hOMBj0IbxfMdMBrW5pAVGV/ztINByENkU0t5BIJEKRSOQ3Aj+Z57iFs1R5NK3EQS6HQqF1zmQdzpFWq3W42WwOTAf1er1PF2USFlC+qxMvFAr3HcexWX+QX6lUvsKpkTyPSEXJkw6MQ4S38Ljdbi8rmM/nY+CvgNcQqdH6U/xrYK9t244jZv6ByUOSiDdIfgBZ12U6dHEHu9TpdIr8F0OP692CtzaW/a6y3y0Wx5kbFHvGuXzkgf0xhKnPzA4UTyaTB8Ph8AvcHi3fnsrZ7Wore02YViqVOrRXXPhfqP8j6MYlawoAAAAASUVORK5CYII=&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: auto;">
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label class="form-control-label">Confirm password</label>
            <input class="form-control" type="password" 
            style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACIUlEQVQ4EX2TOYhTURSG87IMihDsjGghBhFBmHFDHLWwSqcikk4RRKJgk0KL7C8bMpWpZtIqNkEUl1ZCgs0wOo0SxiLMDApWlgOPrH7/5b2QkYwX7jvn/uc//zl3edZ4PPbNGvF4fC4ajR5VrNvt/mo0Gr1ZPOtfgWw2e9Lv9+chX7cs64CS4Oxg3o9GI7tUKv0Q5o1dAiTfCgQCLwnOkfQOu+oSLyJ2A783HA7vIPLGxX0TgVwud4HKn0nc7Pf7N6vV6oZHkkX8FPG3uMfgXC0Wi2vCg/poUKGGcagQI3k7k8mcp5slcGswGDwpl8tfwGJg3xB6Dvey8vz6oH4C3iXcFYjbwiDeo1KafafkC3NjK7iL5ESFGQEUF7Sg+ifZdDp9GnMF/KGmfBdT2HCwZ7TwtrBPC7rQaav6Iv48rqZwg+F+p8hOMBj0IbxfMdMBrW5pAVGV/ztINByENkU0t5BIJEKRSOQ3Aj+Z57iFs1R5NK3EQS6HQqF1zmQdzpFWq3W42WwOTAf1er1PF2USFlC+qxMvFAr3HcexWX+QX6lUvsKpkTyPSEXJkw6MQ4S38Ljdbi8rmM/nY+CvgNcQqdH6U/xrYK9t244jZv6ByUOSiDdIfgBZ12U6dHEHu9TpdIr8F0OP692CtzaW/a6y3y0Wx5kbFHvGuXzkgf0xhKnPzA4UTyaTB8Ph8AvcHi3fnsrZ7Wore02YViqVOrRXXPhfqP8j6MYlawoAAAAASUVORK5CYII=&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%;">
          </div>
        </div>
      </div>
      <div class="mt-4">
        <button type="button" class="btn btn-sm btn-primary">Update password</button>
        <router-link v-bind:to="{ name: 'resetpassword'}" 
        class="btn btn-sm btn-secondary">
            I forgot my password
        </router-link>

      </div>
    </form>
    <div class="mt-5 pt-5 delimiter-top">
      <div class="actions-toolbar py-2 mb-4">
        <h5 class="mb-1">Change username</h5>
        <p class="text-sm text-muted mb-0">You can help us, by filling your data, create you a much better experience using our website.</p>
      </div>
      <!-- Button trigger modal -->
      <button type="button" class="btn btn-sm btn-primary" data-toggle="modal" data-target="#modal-change-username">Change username</button>
      <!-- Modal -->
      <div class="modal fade" id="modal-change-username" tabindex="-1" role="dialog" aria-labelledby="modal-change-username" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <form>
            <div class="modal-content">
              <div class="modal-header">
                <div class="modal-title d-flex align-items-center" id="modal-title-change-username">
                  <div>
                    <div class="icon icon-sm icon-shape icon-info rounded-circle shadow mr-3">
                      <i class="fas fa-user"></i>
                    </div>
                  </div>
                  <div>
                    <h6 class="mb-0">Change username</h6>
                  </div>
                </div>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label class="form-control-label">Old username</label>
                      <input class="form-control" type="text">
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label class="form-control-label">New username</label>
                      <input class="form-control" type="text">
                    </div>
                  </div>
                </div>
                <div class="px-5 pt-4 mt-4 delimiter-top text-center">
                  <p class="text-muted text-sm">You will receive an email where you will be asked to confirm this action in order to be completed.</p>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">Change my username</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="mt-5 pt-5 delimiter-top">
      <div class="actions-toolbar py-2 mb-4">
        <h5 class="mb-1">Delete account</h5>
        <p class="text-sm text-muted mb-0">Deleting your account is irreversible and can affect past activites.</p>
      </div>
      <!-- Button trigger modal -->
      <button type="button" class="btn btn-sm btn-danger" data-toggle="modal" data-target="#modal-delete-account">Delete account</button>
      <!-- Modal -->
      <div class="modal modal-danger fade" id="modal-delete-account" tabindex="-1" role="dialog" aria-labelledby="modal-delete-account" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <form class="form-danger">
            <div class="modal-content">
              <div class="modal-body">
                <div class="text-center">
                  <i class="fas fa-exclamation-circle fa-3x opacity-8"></i>
                  <h5 class="text-white mt-4">Should we stop now?</h5>
                  <p class="text-sm text-sm">All your data will be erased. You will no longer be billed, and your username will be available to anyone.</p>
                </div>
                <div class="form-group">
                  <label class="form-control-label text-white">You email or username</label>
                  <input class="form-control" type="text" autocomplete="off" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%;">
                </div>
                <div class="form-group">
                  <label class="form-control-label text-white">To verify, type <span class="font-italic">delete my account</span> below</label>
                  <input class="form-control" type="text" autocomplete="off" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%;">
                </div>
                <div class="form-group">
                  <label class="form-control-label text-white">Your password</label>
                  <input class="form-control" type="password" autocomplete="off" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%;">
                </div>
                <div class="mt-4">
                  <button type="button" class="btn btn-block btn-sm btn-white text-danger">Delete my account</button>
                  <button type="button" class="btn btn-block btn-sm btn-link text-light mt-4" data-dismiss="modal">Not this time</button>
                </div>
              </div>
            </div>
          </form>
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


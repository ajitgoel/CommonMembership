<template>
  <div class="col-lg-9 order-lg-2">
    <!-- Change avatar -->
    <!--<div class="card bg-gradient-warning hover-shadow-lg">
      <div class="card-body py-3">
        <div class="row row-grid align-items-center">
          <div class="col-lg-8">
            <div class="media align-items-center">
              <a href="#" class="avatar avatar-lg rounded-circle mr-3">
                <img alt="Image placeholder" src="/img/theme/light/team-1-800x800.jpg">
              </a>
              <div class="media-body">
                <h5 class="text-white mb-0">Heather Wright</h5>
                <div>
                  <form>
                    <input type="file" name="file-1[]" id="file-1" class="custom-input-file custom-input-file-link" data-multiple-caption="{count} files selected" multiple="">
                    <label for="file-1">
                      <span class="text-white">Change avatar</span>
                    </label>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="col-auto flex-fill mt-4 mt-sm-0 text-sm-right d-none d-lg-block">
            <a href="#" class="btn btn-sm btn-white rounded-pill btn-icon shadow">
              <span class="btn-inner--icon"><i class="fas fa-fire"></i></span>
              <span class="btn-inner--text">Upgrade to Pro</span>
            </a>
          </div>
        </div>
      </div>
    </div>-->
    <!-- General information form -->
    <div class="actions-toolbar py-2 mb-4">
      <h5 class="mb-1">General information</h5>
      <p class="text-sm text-muted mb-0">You can help us, by filling your data, create you a much better experience using our website.</p>
    </div>
    <form>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label class="form-control-label">First name</label>
            <input class="form-control" type="text" placeholder="Enter your first name" v-focus >
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label class="form-control-label">Last name</label>
            <input class="form-control" type="text" placeholder="Also your last name">
          </div>
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-md-6">
          <div class="form-group">
            <label class="form-control-label">Birthday</label>
            <input type="text" class="form-control flatpickr-input" data-toggle="date" placeholder="Select your birth date">
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group focused">
            <label class="form-control-label">Gender</label>
            <select class="form-control select2-hidden-accessible" data-toggle="select" data-select2-id="1" tabindex="-1" 
            aria-hidden="true">
              <option value="1" data-select2-id="3">Female</option>
              <option value="2">Male</option>
              <option value="2">Rather not say</option>
            </select>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label class="form-control-label">Email</label>
            <input class="form-control" type="email" placeholder="name@exmaple.com">
            <small class="form-text text-muted mt-2">This is the main email address that we'll send notifications to. <a href="account-notifications.html">Manage you notifications</a> in order to receive only the thing that matter to you most.</small>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label class="form-control-label">Phone</label>
            <input class="form-control" type="text" placeholder="+40-777 245 549">
          </div>
        </div>
      </div>
      <!-- Address -->
      <div class="pt-5 mt-5 delimiter-top">
        <div class="actions-toolbar py-2 mb-4">
          <h5 class="mb-1">Address details</h5>
          <p class="text-sm text-muted mb-0">Fill in your address info for upcoming orders or payments.</p>
        </div>
        <div class="row">
          <div class="col">
            <div class="form-group">
              <label class="form-control-label">Address</label>
              <input class="form-control" type="text" placeholder="Enter your home address">
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label class="form-control-label">City</label>
              <input class="form-control" type="text" placeholder="City">
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group focused">
              <label class="form-control-label">Country</label>
              <select class="form-control select2-hidden-accessible" data-toggle="select" title="Country" data-live-search="true" data-live-search-placeholder="Country" data-select2-id="4" tabindex="-1" aria-hidden="true">
                <option data-select2-id="6">Romania</option>
                <option>United Stated</option>
                <option>France</option>
                <option>Greece</option>
                <option>Italy</option>
                <option>Norway</option>
              </select>
              </div>
          </div>
        </div>
      </div>
      <!-- Skills -->
      <div class="pt-5 mt-5 delimiter-top">
        <div class="actions-toolbar py-2 mb-4">
          <h5 class="mb-1">Skills</h5>
          <p class="text-sm text-muted mb-0">Show off you skills using our tags input control.</p>
        </div>
        <div class="row">
          <div class="col">
            <div class="form-group focused">
              <label class="sr-only">Skills</label>
              <div class="bootstrap-tagsinput"><span class="tag badge badge-primary">HTML<span data-role="remove"></span></span> <span class="tag badge badge-primary"> CSS3<span data-role="remove"></span></span> <span class="tag badge badge-primary"> Bootstrap<span data-role="remove"></span></span> <span class="tag badge badge-primary"> Photoshop<span data-role="remove"></span></span> <span class="tag badge badge-primary"> VueJS<span data-role="remove"></span></span> <input type="text" placeholder="Type here..."></div><input type="text" class="form-control" value="HTML, CSS3, Bootstrap, Photoshop, VueJS" data-toggle="tags" placeholder="Type here..." style="display: none;">
            </div>
          </div>
        </div>
      </div>
      <!-- Description -->
      <div class="pt-5 mt-5 delimiter-top">
        <div class="actions-toolbar py-2 mb-4">
          <h5 class="mb-1">About me</h5>
          <p class="text-sm text-muted mb-0">Use this field to let others know you better.</p>
        </div>
        <div class="row">
          <div class="col">
            <div class="form-group">
              <div class="form-group">
                <label class="form-control-label">Bio</label>
                <textarea class="form-control" placeholder="Tell us a few words about yourself" rows="3"></textarea>
                <small class="form-text text-muted mt-2">You can @mention other users and organizations to link to them.</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Save changes buttons -->
      <div class="pt-5 mt-5 delimiter-top text-center">
        <button type="button" class="btn btn-sm btn-primary">Save changes</button>
        <button type="button" class="btn btn-link text-muted">Cancel</button>
      </div>
    </form>
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
  },
}
</script>

<style lang="less" scoped>

</style>


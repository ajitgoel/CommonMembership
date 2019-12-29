<template>
  <nav class="navbar navbar-main navbar-expand-lg navbar-transparent navbar-dark bg-dark" id="navbar-main">
    <div class="container px-lg-0">
      <!-- Logo -->
      <a class="navbar-brand mr-lg-5" href="../../index.html">
        <img alt="Image placeholder" src="/img/brand/white.png" id="navbar-logo" style="height: 50px;">
      </a>
      <!-- Navbar collapse trigger -->
      <button class="navbar-toggler pr-0" type="button" data-toggle="collapse" data-target="#navbar-main-collapse" aria-controls="navbar-main-collapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- Navbar nav -->
      <div class="collapse navbar-collapse" id="navbar-main-collapse">
        <ul class="navbar-nav align-items-lg-center ml-lg-auto">
          <li class="nav-item d-xl-block" v-if="(this.$root.currentUserId==null)">
            <router-link class="nav-link" v-bind:to="{ name: 'register' }">Register</router-link>
          </li>
          <li class="nav-item d-xl-block" v-else>
            <a class="nav-link" href='' data-cy="logout" v-on:click="Logout()">Log out</a>
          </li>

          <li class="nav-item mr-0">
            <a href="https://themes.getbootstrap.com/product/purpose-website-ui-kit/" target="_blank" class="nav-link d-lg-none">Purchase now</a>
            <a href="https://themes.getbootstrap.com/product/purpose-website-ui-kit/" target="_blank" class="btn btn-sm btn-white btn-icon rounded-pill d-none d-lg-inline-flex" data-toggle="tooltip" data-placement="left" title="Go to Bootstrap Themes">
              <span class="btn-inner--icon"><i class="fas fa-shopping-cart"></i></span>
              <span class="btn-inner--text">Purchase now</span>
            </a>
          </li>
        </ul>
      </div>
    </div>          
    <Toast ref="toast" v-bind:toastMessage='this.failureMessage' header='Error'/>
  </nav>
  
</template>

<script>
import { Meteor } from 'meteor/meteor';

export default 
{  
  name: "MainNavBar",
  components:{
  },
  data() {
    return {
      failureMessage:''
    };
  },
  methods: 
  { 
    Logout() 
    {
      const router = this.$router; 
      Meteor.logout();
      this.$root.clear();
      router.push({ name: 'home'});                   
    },
  },
}
</script>

<style lang="less" scoped>

</style>

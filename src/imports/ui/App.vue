<template>
  <div id="app">
    <AppHeader/>
    <router-view />
    <AppFooter/>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  components: {
  },
  computed: {
    ...mapGetters('layout', ['showCart',]),
  },
  /*meteor: 
  {
    $lazy: true,
    $subscribe: 
    {
      'currentUserId': function() 
      {
        // You need to get the data from the server, unless you are using autopublish, which you shouldn't be!
        // passing Meteor.userId() to the subscription makes the subscription change when a user logs in/out
        // (but DONT TRUST THIS within the server publication, always use this.userId instead)
        // Subscription parameters need to be returned in an array
        return [Meteor.userId()];
      },      
    },
    // now define the reactive properties directly in the meteor object, not inside the subscribe object    
    'currentUser': function() 
    {
      return Meteor.user();
    },
    'currentUserId': function() 
    {
      return Meteor.userId();
    }
  },*/
}
</script>

<style lang="less" scoped>

</style>

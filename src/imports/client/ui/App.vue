<template>
  <div id="app">
    <AppHeader/>
    <router-view />
    <AppFooter/>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';

export default 
{
  data() 
  {
    return {
      currentUserId: "",
      loggingIn:false,
    };
  },
  components: {
  },
  computed: {
    ...mapGetters('layout', ['showCart',]),
  },
  mounted() 
  {    
    this.$autorun(() => this.currentUserId = Meteor.userId() );
    this.$autorun(() => this.loggingIn = Meteor.loggingIn() );
  },
  methods: 
  {
    setValue(key,value) 
    {
      Session.set(key, value);
    },
    clear() 
    {
      Object.keys(Session.keys).forEach(function(key)
      {
        clearValue(key);
      });
      Session.keys = {};
    },
    clearValue(key) 
    {
      Session.set(key, undefined);
    },
    getValue(key)
    {
      return Session.get(key);
    },
  },
  /*meteor: 
  {
    $subscribe: 
    {
      'currentUserId': function() 
      {
        // You need to get the data from the server, unless you are using autopublish, which you shouldn't be!
        // passing Meteor.userId() to the subscription makes the subscription change when a user logs in/out
        // (but DONT TRUST THIS within the server publication, always use this.userId instead)
        // Subscription parameters need to be returned in an array
        console.warn(`inside currentUserId meteor property:`);
        return [Meteor.userId()];
      },      
    },
    // now define the reactive properties directly in the meteor object, not inside the subscribe object    
    currentUser()
    {
      console.warn(`inside currentUser property:${Meteor.user()}`);
      return Meteor.user();
    },
    currentUserId() 
    {
      console.warn(`inside currentUserId property:${Meteor.userId()}`);
      return Meteor.userId();
    },
  },*/
}
</script>

<style lang="less" scoped>

</style>

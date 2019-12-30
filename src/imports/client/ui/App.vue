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
    };
  },
  components: {
  },
  computed: {
    ...mapGetters('layout', ['showCart',]),
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
        Session.set(key, undefined);
      });
      Session.keys = {};
    },
    getValue(key)
    {
      return Session.get(key);
    },
  },
  meteor: 
  {
    currentUserId()
    {
      return Meteor.userId();
    },
  },
}
</script>

<style lang="less" scoped>

</style>

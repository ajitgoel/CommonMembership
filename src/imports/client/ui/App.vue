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

export default 
{
  data() 
  {
    return {
      state: {
        NavigationMessage: '',
      }, 
    };
  },
  components: {
  },
  computed: {
    ...mapGetters('layout', ['showCart',]),
  },
  methods: 
  {
    //#region state managment
    setNavigationMessage(newValue) 
    {
      this.state.NavigationMessage = newValue;
    },
    clearMessageAction () 
    {
      this.state.NavigationMessage = '';
    },
    //#endregion
  },
  meteor: 
  {
    currentUserId()
    {
      return Meteor.userId();
    },
    NavigationMessage()
    {
      return this.state.NavigationMessage;
    },
  },
}
</script>

<style lang="less" scoped>

</style>

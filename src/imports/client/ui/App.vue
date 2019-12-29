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
        dictionary:{}
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
    setValue(key,value) 
    {
      this.state.dictionary[key] = value;
    },
    clear() 
    {
      this.state.dictionary = {};
    },
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
    getValue(key)
    {
      return this.state.dictionary[key];
    },
  },
}
</script>

<style lang="less" scoped>

</style>

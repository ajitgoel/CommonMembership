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

export default {
  components: {
  },
  computed: {
    ...mapGetters('layout', ['showCart',]),
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

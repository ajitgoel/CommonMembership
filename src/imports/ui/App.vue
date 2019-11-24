<template>
  <!--<div id="app">
    <AppHeader/>
    <router-view />
    <AppFooter/>
  </div>-->

  <v-app id="app">
    <AppHeader/>
    <router-view />
    <AppFooter/>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  components: {
  },
  computed: {
    ...mapGetters('layout', ['showCart',]),
  },
}
</script>

<style lang="less" scoped>

</style>

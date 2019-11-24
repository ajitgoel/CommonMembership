<template>
  <v-app id="app">
    <AppHeader/>
    <router-view />
    <AppFooter/>
  </v-app>
</template>
<!--
<v-app>
  <v-navigation-drawer app></v-navigation-drawer>
  <v-app-bar app></v-app-bar>
  <v-content>
    <v-container fluid>
      <router-view></router-view>
    </v-container>
  </v-content>
  <v-footer app></v-footer>
</v-app>
-->
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

<template>
  <div id="app">
    <v-app>
      <AppHeader/>
      <router-view />
      <AppFooter/>
    </v-app>
  </div>
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

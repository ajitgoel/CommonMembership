<template>
  <div id="app">
    <AppHeader></AppHeader>
    <!--<Omnisearch></Omnisearch>-->
    <main>
      <router-view />
    </main>
    <AppFooter></AppFooter>
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

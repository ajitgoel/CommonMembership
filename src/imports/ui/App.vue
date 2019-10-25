<template>
  <div id="app">
    <AppHeader></AppHeader>
    <Omnisearch></Omnisearch>
    <main>
      <router-view />
    </main>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AppHeader from './AppHeader.vue';
import Omnisearch from './Omnisearch.vue';
import AppFooter from './AppFooter.vue';

export default {
  components: {
    AppHeader: AppHeader,
    Omnisearch: Omnisearch,
    AppFooter: AppFooter,
  },

  computed: {
    ...mapGetters('layout', ['showCart',]),
  },
}
</script>

<style lang="less" scoped>

</style>

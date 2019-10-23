<template>
  <div id="app">
    <AppHeader></AppHeader>
    <Omnisearch></Omnisearch>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AppHeader from './Header.vue';
import Omnisearch from './Omnisearch.vue';

export default {
  components: {
    AppHeader: AppHeader,
    Omnisearch: Omnisearch,
  },

  computed: {
    ...mapGetters('layout', ['showCart',]),
  },
}
</script>

<style lang="less" scoped>

</style>

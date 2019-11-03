<template>
    <header class="header header-transparent" id="header-main">
    <!--<TopNavBar/>-->
    <MainNavBar/>
  </header>
</template>

<script>
import TopNavBar from './TopNavBar.vue';
import MainNavBar from './MainNavBar.vue';

export default {
  components: {
    TopNavBar: TopNavBar,
    MainNavBar:MainNavBar
  },
}
</script>

<style lang="less" scoped>

</style>

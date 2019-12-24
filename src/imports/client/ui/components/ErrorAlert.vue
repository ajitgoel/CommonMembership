<template>
  <div class="alert alert-modern alert-dark" v-if="this.message!=''">                  
    <span class="badge badge-danger badge-pill">Error</span>
    <span class="alert-content">{{this.message}}</span>
  </div>
</template>

<script>
  export default {
    data: () => ({
    }),
    props: {
      message: {
        default: '',
        type: String
      },      
    },
  }
</script>

<style lang="less" scoped>
</style>

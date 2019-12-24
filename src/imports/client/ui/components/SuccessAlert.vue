<template>
  <div class="alert alert-modern alert-success"  v-if="this.message!=''">    
    <span class="badge badge-success badge-pill">Success</span>
    <span class="alert-content">{{message}}</span>
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

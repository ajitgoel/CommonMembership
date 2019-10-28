<template>
  <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close" v-on:click="showToast=false">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="toast-body">
      {{ toastMessage }}
    </div>
  </div>
  
</template>

<script>
  export default {
    data: () => ({
    }),
    props: {
      showToast: {
        default: false,
        type: Boolean
      },
      toastMessage: {
        default: '',
        type: String
      },
    },
  }
</script>

<style lang="less" scoped>
</style>

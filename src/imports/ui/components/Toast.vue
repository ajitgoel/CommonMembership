<template>
  <div class="toast" role="alert" aria-live="assertive" aria-atomic="true" data-delay="3000">
  <div class="toast-header">
    <svg class="bd-placeholder-img rounded mr-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" 
    preserveAspectRatio="xMidYMid slice" focusable="false" role="img" >
      <rect fill="#007aff" width="100%" height="100%"/>
    </svg>
    <strong class="mr-auto">{{header}}</strong>
    <!--<small class="text-muted">11 mins ago</small>-->
    <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
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
      header: {
        default: '',
        type: String
      },
    },
  }
</script>

<style lang="less" scoped>
</style>

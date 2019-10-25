<template>
  <div class="card-footer px-5 py-4 bg-lighter border-0 delimiter-top">
    <h5 class="mb-4">{{title}}</h5>
    <form class="d-flex justify-content-between">
      <div>
        <button class="btn btn-sm btn-dark" type="submit"><i class="far fa-thumbs-up"></i>
        </button>
        <button class="btn btn-sm btn-dark" type="submit"><i class="far fa-thumbs-down"></i>
        </button>
      </div>
      <div>
        <router-link v-bind:to="{ name: 'contact' }" class="btn btn-sm btn-primary">Contact Support</router-link>
      </div>
    </form>
  </div>  
</template>

<script>
export default {
  name: 'CardFooter',
  props: {
    title: String
  }
}
</script>

<style lang="less" scoped>

</style>

<template>
  <div class="main-content">
    <section class="slice slice-lg bg-gradient-dark" data-offset-top="#header-main">
      <div class="bg-absolute-cover bg-size--contain d-flex align-items-center">
        <figure class="w-100 d-none d-lg-block">
          <img alt="Image placeholder" src="/img/svg/backgrounds/bg-circles-1.svg" class="svg-inject">
        </figure>
      </div>
    </section>
    
    <div class="container h-100vh d-flex align-items-center">
      <div class="col">
        <div class="row justify-content-center">
          <div class="col-md-6 col-lg-5 col-xl-4">
            <div>
              <div class="mb-5 text-center">
                <h6 class="h3">Password reset</h6>
                <p class="text-muted mb-0">Enter your email below to proceed.</p>
              </div>
              <span class="clearfix"></span>
              <form role="form">
                <div class="form-group">
                  <label class="form-control-label">Email address</label>
                  <div class="input-group input-group-merge">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><i class="far fa-user"></i></span>
                    </div>
                    <input type="email" class="form-control" id="input-email" placeholder="name@example.com">
                  </div>
                </div>
                <div class="mt-4">
                  <button type="button" class="btn btn-block btn-primary">Reset password</button></div>
              </form>
              <div class="mt-4 text-center"><small>Not registered?</small>
                <router-link v-bind:to="{ name: 'register' }" class="small font-weight-bold">Create account</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResetPassword",
  components:{
  },
}
</script>
<style lang="less" scoped>

</style>

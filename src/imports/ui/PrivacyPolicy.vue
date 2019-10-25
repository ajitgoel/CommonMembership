<template>
<div class="main-content">
  <section class="slice slice-lg bg-gradient-dark" data-offset-top="#header-main">
      <div class="bg-absolute-cover bg-size--contain d-flex align-items-center">
        <figure class="w-100 d-none d-lg-block">
          <img alt="Image placeholder" src="/img/svg/backgrounds/bg-circles-1.svg" class="svg-inject">
        </figure>
      </div>
    </section> 
    <section class="slice" id="sct-article">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-9">
            <div class="card">
              <div class="card-body p-5">
                <PrivacyPolicyText/>
              </div>
              <CardFooter title="Did you find this privacy policy helpful?"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  
</template>

<script>
import { Meteor } from 'meteor/meteor';
import { Notes } from '../api/collections';
import PrivacyPolicyText from './PrivacyPolicyText.vue';
import CardFooter from './CardFooter.vue';

export default {
  components:{
    "PrivacyPolicyText": PrivacyPolicyText,
    "CardFooter": CardFooter,
  },
}
</script>

<style lang="less" scoped>

</style>

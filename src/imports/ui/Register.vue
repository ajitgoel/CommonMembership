<template>
  <div class="main-content">
    <section class="slice slice-lg bg-gradient-dark" data-offset-top="#header-main">
      <div class="bg-absolute-cover bg-size--contain d-flex align-items-center">
        <figure class="w-100 d-none d-lg-block">
          <img alt="Image placeholder" src="/img/svg/backgrounds/bg-circles-1.svg" class="svg-inject">
        </figure>
      </div>
    </section>  
    <div class="container min-vh-100 d-flex align-items-center">
      <div class="col py-5">
        <div class="row justify-content-center">
          <div class="col-md-8 col-lg-6">
            <div>
              <div class="mb-5 text-center">
                  <h6 class="h3">Create account</h6>
                  <p class="text-muted mb-0">Made with love by developers for developers.</p>
              </div>
              <span class="clearfix"></span>
              <form role="form">
                  <div class="form-group">
                  <label class="form-control-label">Email address</label>
                  <div class="input-group input-group-merge">
                      <div class="input-group-prepend">
                      <span class="input-group-text"><i class="fas fa-user"></i></span>
                      </div>
                      <input type="email" class="form-control" id="input-email" placeholder="name@example.com" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABHklEQVQ4EaVTO26DQBD1ohQWaS2lg9JybZ+AK7hNwx2oIoVf4UPQ0Lj1FdKktevIpel8AKNUkDcWMxpgSaIEaTVv3sx7uztiTdu2s/98DywOw3Dued4Who/M2aIx5lZV1aEsy0+qiwHELyi+Ytl0PQ69SxAxkWIA4RMRTdNsKE59juMcuZd6xIAFeZ6fGCdJ8kY4y7KAuTRNGd7jyEBXsdOPE3a0QGPsniOnnYMO67LgSQN9T41F2QGrQRRFCwyzoIF2qyBuKKbcOgPXdVeY9rMWgNsjf9ccYesJhk3f5dYT1HX9gR0LLQR30TnjkUEcx2uIuS4RnI+aj6sJR0AM8AaumPaM/rRehyWhXqbFAA9kh3/8/NvHxAYGAsZ/il8IalkCLBfNVAAAAABJRU5ErkJggg==&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: auto;">
                  </div>
                  </div>
                  <div class="form-group mb-4">
                  <label class="form-control-label">Password</label>
                  <div class="input-group input-group-merge">
                      <div class="input-group-prepend">
                      <span class="input-group-text"><i class="fas fa-key"></i></span>
                      </div>
                      <input type="password" class="form-control" id="input-password" placeholder="********" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACIUlEQVQ4EX2TOYhTURSG87IMihDsjGghBhFBmHFDHLWwSqcikk4RRKJgk0KL7C8bMpWpZtIqNkEUl1ZCgs0wOo0SxiLMDApWlgOPrH7/5b2QkYwX7jvn/uc//zl3edZ4PPbNGvF4fC4ajR5VrNvt/mo0Gr1ZPOtfgWw2e9Lv9+chX7cs64CS4Oxg3o9GI7tUKv0Q5o1dAiTfCgQCLwnOkfQOu+oSLyJ2A783HA7vIPLGxX0TgVwud4HKn0nc7Pf7N6vV6oZHkkX8FPG3uMfgXC0Wi2vCg/poUKGGcagQI3k7k8mcp5slcGswGDwpl8tfwGJg3xB6Dvey8vz6oH4C3iXcFYjbwiDeo1KafafkC3NjK7iL5ESFGQEUF7Sg+ifZdDp9GnMF/KGmfBdT2HCwZ7TwtrBPC7rQaav6Iv48rqZwg+F+p8hOMBj0IbxfMdMBrW5pAVGV/ztINByENkU0t5BIJEKRSOQ3Aj+Z57iFs1R5NK3EQS6HQqF1zmQdzpFWq3W42WwOTAf1er1PF2USFlC+qxMvFAr3HcexWX+QX6lUvsKpkTyPSEXJkw6MQ4S38Ljdbi8rmM/nY+CvgNcQqdH6U/xrYK9t244jZv6ByUOSiDdIfgBZ12U6dHEHu9TpdIr8F0OP692CtzaW/a6y3y0Wx5kbFHvGuXzkgf0xhKnPzA4UTyaTB8Ph8AvcHi3fnsrZ7Wore02YViqVOrRXXPhfqP8j6MYlawoAAAAASUVORK5CYII=&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: auto;">
                      <div class="input-group-append">
                      <span class="input-group-text">
                          <i class="fas fa-eye"></i>
                      </span>
                      </div>
                  </div>
                  </div>
                  <div class="form-group">
                  <label class="form-control-label">Confirm password</label>
                  <div class="input-group input-group-merge">
                      <div class="input-group-prepend">
                      <span class="input-group-text"><i class="fas fa-key"></i></span>
                      </div>
                      <input type="password" class="form-control" id="input-password-confirm" placeholder="********" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACIUlEQVQ4EX2TOYhTURSG87IMihDsjGghBhFBmHFDHLWwSqcikk4RRKJgk0KL7C8bMpWpZtIqNkEUl1ZCgs0wOo0SxiLMDApWlgOPrH7/5b2QkYwX7jvn/uc//zl3edZ4PPbNGvF4fC4ajR5VrNvt/mo0Gr1ZPOtfgWw2e9Lv9+chX7cs64CS4Oxg3o9GI7tUKv0Q5o1dAiTfCgQCLwnOkfQOu+oSLyJ2A783HA7vIPLGxX0TgVwud4HKn0nc7Pf7N6vV6oZHkkX8FPG3uMfgXC0Wi2vCg/poUKGGcagQI3k7k8mcp5slcGswGDwpl8tfwGJg3xB6Dvey8vz6oH4C3iXcFYjbwiDeo1KafafkC3NjK7iL5ESFGQEUF7Sg+ifZdDp9GnMF/KGmfBdT2HCwZ7TwtrBPC7rQaav6Iv48rqZwg+F+p8hOMBj0IbxfMdMBrW5pAVGV/ztINByENkU0t5BIJEKRSOQ3Aj+Z57iFs1R5NK3EQS6HQqF1zmQdzpFWq3W42WwOTAf1er1PF2USFlC+qxMvFAr3HcexWX+QX6lUvsKpkTyPSEXJkw6MQ4S38Ljdbi8rmM/nY+CvgNcQqdH6U/xrYK9t244jZv6ByUOSiDdIfgBZ12U6dHEHu9TpdIr8F0OP692CtzaW/a6y3y0Wx5kbFHvGuXzkgf0xhKnPzA4UTyaTB8Ph8AvcHi3fnsrZ7Wore02YViqVOrRXXPhfqP8j6MYlawoAAAAASUVORK5CYII=&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: auto;">
                  </div>
                  </div>
                  <div class="my-4">
                  <div class="custom-control custom-checkbox mb-3">
                      <input type="checkbox" class="custom-control-input" id="check-terms">
                      <label class="custom-control-label" for="check-terms">I agree to the <a href="#" v-on:click="showTermsAndConditionsModal">terms and conditions</a>
                      </label>
                      <TermsAndConditionsModal ref="TermsAndConditionsModal"/>
                  </div>
                  <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" id="check-privacy">
                      <label class="custom-control-label" for="check-privacy">I agree to the <a href="#" v-on:click="showPrivacyPolicyModal">privacy policy</a>
                      </label>
                      <PrivacyPolicyModal ref="PrivacyPolicyModal"/>
                  </div>
                  </div>
                  <div class="mt-4">
                  <button type="button" class="btn btn-block btn-primary">Create my account</button></div>
              </form>
              <div class="mt-4 text-center"><small>Already have an account?</small>
                  <router-link v-bind:to="{ name: 'login' }" class="small font-weight-bold">Sign in</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  
  </div>
</template>

<script>
import { Meteor } from 'meteor/meteor';
import { Notes } from '../api/collections';
import TermsAndConditionsModal from './TermsAndConditionsModal.vue';
import PrivacyPolicyModal from './PrivacyPolicyModal.vue';

export default {
  components:{
    "TermsAndConditionsModal":TermsAndConditionsModal,
    "PrivacyPolicyModal": PrivacyPolicyModal
  },
  data () {
    return {
    }
  },
  methods: {
    showPrivacyPolicyModal() {
       let element = this.$refs.PrivacyPolicyModal.$el;
      $(element).modal('show');
    },
    showTermsAndConditionsModal() {
      let element = this.$refs.TermsAndConditionsModal.$el;
      $(element).modal('show');
    }
  }
  /*meteor: {
    $subscribe: {
      'notes' () {
        return [this.search]
      },
    },
    notes () {
      return Notes.find({}, {
        sort: { created: this.sort ? -1 : 1 },
      })
    },
  },

  computed: {
    firstNote () {
      return this.notes.length && this.notes[0]
    },
  },

  watch: {
    '$subReady.notes' (value) {
      console.log('notes sub ready', value)
    },

    notes (value) {
      console.log('length', value.length)
    },
  },

  methods: {
    async addNote () {
      if (this.newNote) {
        try {
          await Meteor.callPromise('notes.add', {
            text: this.newNote,
          })
          this.newNote = ''
        } catch (e) {
          console.error(e)
        }
      }
    },

    async removeNote (note) {
      try {
        await Meteor.callPromise('notes.remove', {
          _id: note._id,
        })
      } catch (e) {
        console.error(e)
      }
    },

    handleVisibility (visible) {
      if (visible && this.$subReady.notes) {
        this.limit += 5
      }
    },
  },*/
}
</script>

<style lang="less" scoped>

</style>

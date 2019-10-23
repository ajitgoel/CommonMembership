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
                <h6 class="h3">Login</h6>
                <p class="text-muted mb-0">Sign in to your account to continue.</p>
              </div>
              <span class="clearfix"></span>
              <form role="form">
                <div class="form-group">
                  <label class="form-control-label">Email address</label>
                  <div class="input-group input-group-merge">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><i class="far fa-user"></i></span>
                    </div>
                    <input type="email" class="form-control" id="input-email" placeholder="name@example.com" autocomplete="off" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: auto;">
                  </div>
                </div>
                <div class="form-group mb-4">
                  <div class="d-flex align-items-center justify-content-between">
                    <div>
                      <label class="form-control-label">Password</label>
                    </div>
                    <div class="mb-2">
                      <router-link v-bind:to="{ name: 'resetpassword' }" class="small text-muted text-underline--dashed border-primary">Lost password?</router-link>
                    </div>
                  </div>
                  <div class="input-group input-group-merge">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><i class="far fa-key"></i></span>
                    </div>
                    <input type="password" class="form-control" id="input-password" placeholder="Password" autocomplete="off" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: auto;">
                    <div class="input-group-append">
                      <span class="input-group-text">
                        <i class="far fa-eye"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="mt-4">
                  <button type="button" class="btn btn-block btn-primary">Sign in</button></div>
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
import { Meteor } from 'meteor/meteor'
import { Notes } from '../api/collections'

export default {
  /*data () {
    return {
      newNote: '',
      search: '',
      sort: true,
    }
  },

  meteor: {
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

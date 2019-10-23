<template>    
  <div id="omnisearch" class="omnisearch">
    <div class="container">
      <!-- Search form -->
      <form class="omnisearch-form">
        <div class="form-group">
          <div class="input-group input-group-merge input-group-flush">
            <div class="input-group-prepend">
              <span class="input-group-text"><i class="fas fa-search"></i></span>
            </div>
            <input type="text" class="form-control" placeholder="Type and hit enter ...">
          </div>
        </div>
      </form>
      <div class="omnisearch-suggestions">
        <h6 class="heading">Search Suggestions</h6>
        <div class="row">
          <div class="col-sm-6">
            <ul class="list-unstyled mb-0">
              <li>
                <a class="list-link" href="#">
                  <i class="fas fa-search"></i>
                  <span>macbook pro</span> in Laptops
                </a>
              </li>
              <li>
                <a class="list-link" href="#">
                  <i class="fas fa-search"></i>
                  <span>iphone 8</span> in Smartphones
                </a>
              </li>
              <li>
                <a class="list-link" href="#">
                  <i class="fas fa-search"></i>
                  <span>macbook pro</span> in Laptops
                </a>
              </li>
              <li>
                <a class="list-link" href="#">
                  <i class="fas fa-search"></i>
                  <span>beats pro solo 3</span> in Headphones
                </a>
              </li>
              <li>
                <a class="list-link" href="#">
                  <i class="fas fa-search"></i>
                  <span>smasung galaxy 10</span> in Phones
                </a>
              </li>
            </ul>
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

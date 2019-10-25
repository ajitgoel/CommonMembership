<template>
  <div class="modal fade docs-example-modal-xl" tabindex="-1" role="dialog" aria-labelledby="PrivacyPolicyModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title h6" id="PrivacyPolicyModalLabel">Privacy Policy</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        
        <div class="modal-body">  
          <PrivacyPolicyText/>					
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Download PDF</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Meteor } from 'meteor/meteor';
import { Notes } from '../api/collections';
import PrivacyPolicyText from './PrivacyPolicyText.vue';

export default {
  components:{
    "PrivacyPolicyText": PrivacyPolicyText
  },
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

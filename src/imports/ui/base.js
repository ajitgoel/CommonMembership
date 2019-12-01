import { Meteor } from 'meteor/meteor';
export default {
  /*methods: {
    activate () {
      this.$startMeteor()
    },

    deactivate () {
      this.$stopMeteor()
    },
  },*/
  meteor: 
  {
    $lazy: true,
    $subscribe: 
    {
      //'currentUser': Meteor.user(),
      'currentUser': function() {
        return Meteor.user();
      },
      'currentUserId': function() {
        return Meteor.userId();
      }
    },
  },
}

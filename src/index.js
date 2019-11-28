import './imports/api/methods';

if (Meteor.isClient) 
{
  import './imports/client';
  //import 'bootstrap/dist/css/bootstrap.css';
  //import 'bootstrap-vue/dist/bootstrap-vue.css';
  //import '@riophae/vue-treeselect/dist/vue-treeselect.css';  
  import 'vuetify/dist/vuetify.min.css';
} 
else if (Meteor.isServer) 
{
  import './imports/server';
  import './imports/server/logging';  
}

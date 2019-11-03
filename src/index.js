import './imports/api/methods';

if (Meteor.isClient) 
{
  import './imports/client';
  //import './imports/client/logging';  
  import 'vuetify/dist/vuetify.min.css';
} 
else if (Meteor.isServer) 
{
  import './imports/server';
  import './imports/server/logging';  
}

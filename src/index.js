import './imports/api/methods';
//import 'vuetify/dist/vuetify.min.css';

if (Meteor.isClient) 
{
  import './imports/client';
  //import './imports/client/logging';  
} 
else if (Meteor.isServer) 
{
  import './imports/server';
  import './imports/server/logging';  
}

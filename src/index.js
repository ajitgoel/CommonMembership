import './imports/api/methods';

if (Meteor.isClient) 
{
  import './imports/client';
  //import './imports/client/logging';  
  import 'vuetify/dist/vuetify.min.css';
  import 'material-design-icons-iconfont/dist/material-design-icons.css'; 
} 
else if (Meteor.isServer) 
{
  import './imports/server';
  import './imports/server/logging';  
}

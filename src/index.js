import './imports/api/methods'

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

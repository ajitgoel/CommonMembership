Meteor.methods(
{
  emailSend(fromAddress, subject, emailText) 
  {
    if(Meteor.isServer)
    {
      const { Email } = require('../server/email.js');
      Email.send(fromAddress, subject, emailText);  
      return;
    }
  },  
})
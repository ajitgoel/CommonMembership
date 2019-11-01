if (Meteor.isServer) 
{
  
}
Meteor.methods(
{
  emailSend(fromAddress, subject, emailText) 
  {
    const { Email } = require('../server/email.js');
    var syncFunc = Meteor.wrapAsync(Email.send, Email); 
    var sendEmailReturn=syncFunc(fromAddress, subject, emailText);      
    return sendEmailReturn;
    //return Email.send(fromAddress, subject, emailText);
  },  
})
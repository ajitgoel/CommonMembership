import { Meteor } from 'meteor/meteor';

Meteor.methods(
{
  createUserForDomain(email, password, domain) 
  {
    if(Meteor.isServer)
    {
      const { userService } = require('../server/usersService.js');
      return userService.createUserForDomain(email, password, domain);
    }
  }, 
  loginUserForDomain(email, password, domain) 
  {
    if(Meteor.isServer)
    {
      const { userService } = require('../server/usersService.js');
      return userService.loginUserForDomain(email, password, domain);
    }
  }, 

  resetUserPassword(email) 
  {
    if(Meteor.isServer)
    {
      const { userService } = require('../server/usersService.js');
      return userService.resetUserPassword(email);
    }
  }, 

  emailSend(fromAddress, subject, emailText) 
  {
    if(Meteor.isServer)
    {
      const { emailService } = require('../server/email.js');
      emailService.send(fromAddress, subject, emailText);  
    }
  },
  getUsersDetailForDomain(domain) 
  {
    if(Meteor.isServer)
    {
      const { usersdetailService } = require('../server/usersdetailService.js');
      return usersdetailService.getUsersDetailForDomain(domain);  
    }
  },
  addUserForDomain(domain, email, firstname, lastname, password, sendUserNotification, role) 
  {
    if(Meteor.isServer)
    {
      const { usersdetailService } = require('../server/usersdetailService.js');
      return usersdetailService.addUserForDomain(domain, email, firstname, lastname, password, sendUserNotification, role);  
    }
  },
})

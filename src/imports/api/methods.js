import { Meteor } from 'meteor/meteor';

Meteor.methods(
{
  createUserForNewDomain(email, password, domain) 
  {
    if(Meteor.isServer)
    {
      const { userService } = require('../server/usersService.js');
      return userService.createUserForNewDomain(email, password, domain);
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
      const { emailService } = require('../server/emailService.js');
      emailService.sendemail(fromAddress, subject, emailText);  
    }
  },
  getUsersDetailForDomain(domain) 
  {
    if(Meteor.isServer)
    {
      const { userService } = require('../server/usersService.js');
      return userService.getUsersDetailForDomain(domain);  
    }
  },
  addUserForExistingDomain(domain, email, firstname, lastname, sendUserNotification, role) 
  {
    if(Meteor.isServer)
    {
      const { userService } = require('../server/usersService.js');
      return userService.addUserForExistingDomain(domain, email, firstname, lastname, sendUserNotification, role);  
    }
  },
  addUsersForExistingDomain(domain, users, sendUserNotification) 
  {
    if(Meteor.isServer)
    {
      const { userService } = require('../server/usersService.js');
      return userService.addUsersForExistingDomain(domain, users, sendUserNotification);  
    }
  },
})

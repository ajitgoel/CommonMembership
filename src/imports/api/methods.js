import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

DomainExistsAlready=-1;

Meteor.methods(
{
  createUserForDomain(email, password, domain) 
  {
    if(Meteor.isServer)
    {
      const { userService } = require('../server/usersService.js');
      return userService.createUserIfItDoesNotExist(email, password, domain);
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
  getUsersdetailService(domain) 
  {
    if(Meteor.isServer)
    {
      const { usersdetailService } = require('../server/usersdetailService.js');
      return usersdetailService.getUsersDetailForDomain(domain);  
    }
  },
})

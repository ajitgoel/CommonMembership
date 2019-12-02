import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
//import { Notes } from './collections';

DomainExistsAlready=-1;

Meteor.methods(
{
  createUserForDomain(email, password, domain) 
  {
    if(Meteor.isServer)
    {
      const { userService } = require('../server/users.js');
      return userService.createUserIfItDoesNotExist(email, password, domain);
    }
  }, 
  loginUserForDomain(email, password, domain) 
  {
    if(Meteor.isServer)
    {
      const { userService } = require('../server/users.js');
      return userService.loginUserForDomain(email, password, domain);
    }
  }, 

  resetUserPassword(email) 
  {
    if(Meteor.isServer)
    {
      const { userService } = require('../server/users.js');
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
  getUsersForDomain(domain) 
  {
    if(Meteor.isServer)
    {
      const { userService } = require('../server/users.js');
      return userService.getUsersForDomain(domain);  
    }
  },
})

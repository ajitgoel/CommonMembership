import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Notes } from './collections';

DomainExistsAlready=-1;

Meteor.methods(
{
  ['notes.add'] (args) 
  {
    new SimpleSchema({
      text: { type: String },
    }).validate(args)

    const { text } = args

    Notes.insert({
      text,
      created: new Date(),
    })
  },

  ['notes.remove'] (args) 
  {
    new SimpleSchema({
      _id:  { type: String },
    }).validate(args)

    const { _id } = args

    Notes.remove(_id)
  },
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
})

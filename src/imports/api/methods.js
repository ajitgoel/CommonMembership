import { Meteor } from 'meteor/meteor'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'
import { Notes } from './collections'

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
  createUserForDomain(domain, email, password) 
  {
    if(Meteor.isServer)
    {
      const { UserCollection } = require('../server/users.js');
      return UserCollection.CreateUserIfItDoesNotExist(domain, email, password);
    }
  }, 
  emailSend(fromAddress, subject, emailText) 
  {
    if(Meteor.isServer)
    {
      const { Email } = require('../server/email.js');
      Email.send(fromAddress, subject, emailText);  
    }
  },
})

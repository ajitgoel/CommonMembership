import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base';

export const Domain = 
{
  CreateUser(domain, email, password) 
  {
    var logging = require('./logging.js');

    try
    {
      check(domain, String);
      check(email, String);
      check(password, String);
     
      Accounts.createUser({email: this.user.email, password: this.user.password});
      console.log('finish3');
      logging.winston.log('info', 'User created for email: '+ email + ' and domain: ' +  domain);      
    }
    catch(e)
    {
      logging.winston.log('info', 'Error creating user for email: '+ email + ' and domain: ' +  domain + '. error' +  JSON.stringify(e));
      throw new Meteor.Error('Error creating user', e);
    }      
  }
}
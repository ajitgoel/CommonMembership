'use strict';
import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base';
//export const Users = new Mongo.Collection('users');
export const Users = Mongo.Collection.get('users');

export const UserService = 
{
  CreateUserIfItDoesNotExist(domain, email, password) 
  {
    var logging = require('./logging.js');
    var emailService = require('./email.js');
    var domainOwner_RoleName='domainOwner';
      
    check(domain, String);
    check(email, String);
    check(password, String);
    
    domain=domain.toString().toLowerCase();
    email=email.toString().toLowerCase();      

    //TODO: add security check
    
    var doesDomainExistForOtherUsers=
      Users.findOne({"roles": {$elemMatch:{_id: domainOwner_RoleName, scope: domain} } }, {_id:1})
    if(doesDomainExistForOtherUsers)
    {
      logging.winston.log('info', `Domain is already is use, Domain: ${domain} Email: ${email}`);
      throw new Meteor.Error('Domain is already is use');
    }

    var user=Accounts.findUserByEmail(email);
    
    //#region user exists
    if(user)
    {
      var domainOwnerRoleForUser = user.roles.filter(x => x.scope === domain && x._id === domainOwner_RoleName);
      
      //#region if "user already exists for the domain", return error message back to ui about domain and user. 
      if(domainOwnerRoleForUser)
      {
        logging.winston.log('info', `User already exists for the domain, Domain: ${domain} Email: ${email}`);
        throw new Meteor.Error('User already exists for the domain');
      }
      //#endregion
      //#region if "user exists but not for the domain", add domain role to user.
      else
      {
        Roles.createRole(domainOwner_RoleName, {unlessExists: true});
        Roles.addUsersToRoles(user._id, [domainOwner_RoleName], domain);          
        logging.winston.log('info', `Added domain ${domain} to userid ${userId}`);
        //TODO: create a proper email template and email sending provider. 
        Accounts.sendEnrollmentEmail(userId, email);
        return {userId:userId}; 
      }
      //#endregion
    }
    //#endregion

    //#region if user does not exist, then create user and add domain role to user. 
    else
    {
      var userId= Accounts.createUser({username: email, email: email, password: password});
      logging.winston.log('info', `User created with userid ${userId} for email ${email} and domain ${domain}`);

      Roles.createRole(domainOwner_RoleName, {unlessExists: true});
      Roles.addUsersToRoles(userId, [domainOwner_RoleName], domain);
      logging.winston.log('info', `Added domain ${domain} to userid ${userId}`);

      //TODO: create a proper email template and email sending provider. 
      Accounts.sendEnrollmentEmail(userId, email);
      return {userId:userId}; 
    }
    //#endregion
  },

  LoginUserForDomain(domain, email, password) 
  {
    var logging = require('./logging.js');
    var emailService = require('./email.js');
    var domainOwner_RoleName='domainOwner';
      
    check(domain, String);
    check(email, String);
    check(password, String);
    
    if (! this.userId) 
    {
      throw new Meteor.Error('Unauthorized');
    }

    domain=domain.toString().toLowerCase();
    email=email.toString().toLowerCase();      

    //TODO: add security check
    
    Meteor.loginWithPassword(email, password);
  }
}
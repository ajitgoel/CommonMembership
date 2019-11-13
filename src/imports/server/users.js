'use strict';
import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base';
//export const Users = new Mongo.Collection('users');
export const Users = Mongo.Collection.get('users');

export const userService = 
{
  createUserIfItDoesNotExist(email, password,domain) 
  {
    var logging = require('./logging.js');
    var emailService = require('./email.js');
    var domainOwner_RoleName='domainOwner';
      
    check(domain, String);
    check(email, String);
    check(password, String);
    
    domain=domain.toString().toLowerCase();
    email=email.toString().toLowerCase();      

    var doesDomainExistForOtherUsers=
      Users.findOne({"roles": {$elemMatch:{_id: domainOwner_RoleName, scope: domain} } }, {_id:1})
    if(doesDomainExistForOtherUsers)
    {
      logging.winston.log('info', `Domain is already is use, Domain: ${domain} Email: ${email}`);
      throw new Meteor.Error('domain-already-in-use');
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
        throw new Meteor.Error('user-exists-for-domain');
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
  //if domain is blank then use check if more than 1 domain exists. 
    //if yes, then return all the domains for user. 
    //if no, then login using email, password. 
  //if domain is passed then check domain is valid for email.
    //if yes then login user using his email id.   
  loginUserForDomain(email, password, domain) 
  {
    var logging = require('./logging.js');
      
    check(domain, String);
    check(email, String);
    check(password, String);
    
    domain=domain.toString().toLowerCase();
    email=email.toString().toLowerCase();      

    var user=Accounts.findUserByEmail(email);    
    
    if(user==null)
    {
      throw new Meteor.Error('email-password-invalid');
    }
    
    //#region user exists
    var _checkPasswordReturn=Accounts._checkPassword(user, password);    
    if(_checkPasswordReturn == null || _checkPasswordReturn.error)
    {
      throw new Meteor.Error('email-password-invalid');    
    }

    //#region user trying to login with email, password
    if(domain==='')
    {
      var domainsForUser = user.roles;
      if(domainsForUser && domainsForUser.length >1)
      {
        logging.winston.log('info', `Multiple domains defined for user, Domain: ${domain} Email: ${email}`);
        var domains = {domains: user.roles};
        return domains;
      }  
      else
      {
        Meteor.loginWithPassword(email, password);
        return;    
      }
    }
    //#endregion

    //#region user trying to login with email, password, domain
    var domainsForUser = user.roles.filter(x => x.scope === domain);
    if(domainsForUser==null)
    {
      logging.winston.log('info', `Unauthorized Request, client passing Domain: ${domain} which does not belong to Email: ${email}`);
      throw new Meteor.Error('unauthorized');
    }      
    Meteor.loginWithPassword(email, password);
    return;
    //#endregion    
  }
}
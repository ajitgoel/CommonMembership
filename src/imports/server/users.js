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
    //TODO: migrate to alanning:roles version 3. 
    //TODO: remove all packages that are not being used. 
    //TODO: Add server side validations. 
    //TODO: Write unit tests for server side code. 
    //TODO: Add Google SignIn Option. 
    //TODO: Host application in Google Cloud VM. 
    
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
        return {userId:userId, domain:domain}; 
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
      return {userId:userId, domain:domain}; 
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
      
    //check(domain, String);
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
        let domainsResult = user.roles.map(function(role)
        {
          return {domain : role.scope}
        });
        return {domains: domainsResult};
      }  
      return {userId:user._id, domain:domainsForUser[0].scope};    
    }
    //#endregion

    //#region user trying to login with email, password, domain
    var domainsForUser = user.roles.filter(x => x.scope === domain);
    if(domainsForUser==null)
    {
      logging.winston.log('info', `Unauthorized Request, client passing Domain: ${domain} which does not belong to Email: ${email}`);
      throw new Meteor.Error('unauthorized');
    }    
    return {userId:user._id, domain:domainsForUser[0].scope}; 
    //#endregion    
  },

  resetUserPassword(email) 
  {
    var logging = require('./logging.js');      
    check(email, String);    
    email=email.toString().toLowerCase();      
    var user=Accounts.findUserByEmail(email);    
    if(user==null)
    {
      logging.winston.log('info', `Invalid email: ${email}`);
      throw new Meteor.Error('email-invalid');
    }    
    //TODO: create a proper email template and email sending provider. 
    Accounts.sendResetPasswordEmail(user._id, email);   
    return true;
  },

  getUsersForDomain(domain) 
  {
    var logging = require('./logging.js');      
    check(domain, String);    
    domain=domain.toString().toLowerCase();      
    //TODO: add check to make sure that the logged in user is correct else throw error. 
    /*var user=Accounts.findUserByEmail(email);    
    if(user==null)
    {
      logging.winston.log('info', `Invalid email: ${email}`);
      throw new Meteor.Error('email-invalid');
    } */  
    //let users=Users.find({"domain":domain});
    let usersResult = { 
      "users":[
        {"_id":"1", "name":"1 1", "username":"John", "email":"Doe", "ticketOrders":"2", "membershipLevel":"Basic",},
        {"_id":"2", "name":"2 2", "username":"John", "email":"Doe", "ticketOrders":"2", "membershipLevel":"Basic",},
        {"_id":"3", "name":"3 3", "username":"John", "email":"Doe", "ticketOrders":"2", "membershipLevel":"Basic",},
        {"_id":"4", "name":"4 4", "username":"John", "email":"Doe", "ticketOrders":"2", "membershipLevel":"Basic",},
        {"_id":"5", "name":"5 5", "username":"John", "email":"Doe", "ticketOrders":"2", "membershipLevel":"Basic",},
        {"_id":"6", "name":"6 6", "username":"John", "email":"Doe", "ticketOrders":"2", "membershipLevel":"Basic",},
        {"_id":"7", "name":"7 7", "username":"John", "email":"Doe", "ticketOrders":"2", "membershipLevel":"Basic",},
        {"_id":"8", "name":"8 8", "username":"John", "email":"Doe", "ticketOrders":"2", "membershipLevel":"Basic",},
        {"_id":"9", "name":"9 9", "username":"John", "email":"Doe", "ticketOrders":"2", "membershipLevel":"Basic",},
        {"_id":"10", "name":"10 10", "username":"John", "email":"Doe", "ticketOrders":"2", "membershipLevel":"Basic",},
        {"_id":"11", "name":"11 11", "username":"John", "email":"Doe", "ticketOrders":"2", "membershipLevel":"Basic",},
        {"_id":"12", "name":"12 12", "username":"John", "email":"Doe", "ticketOrders":"2", "membershipLevel":"Basic",},
      ]
    };

    return usersResult;
  }
}
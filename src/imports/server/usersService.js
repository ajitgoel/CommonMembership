'use strict';
/// <reference types="Accounts" />
import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { UserCollection,UserDomainCollection,DomainCollection } from '../api/collections';
import { MeteorErrors } from '../api/constants';

export const userService = 
{
  getUsersDetailForDomain(domain) 
  {
    var logging = require('./logging.js');  
    const {userDomainsService} = require('./userDomainsService.js');
    check(domain, String);    
    domain=domain.toString().toLowerCase();      

    //check if user is authorized
    //check if user is part of the domain
    //find all userids for that domain, then return all users for those userids
    let userid=Meteor.userId();
    if (!userid) 
    {
      throw new Meteor.Error(MeteorErrors.NotAuthorized);
    }

    let domainsForUserId = userDomainsService.getDomainsForUserId(userid);
    if(domainsForUserId.length=== 0 || !domainsForUserId.includes(domain))
    {
      logging.winston.log('info', `User ${userid} does not belong to domain ${domain}`);
      throw new Meteor.Error(MeteorErrors.NotAuthorized);
    }

    let userIdsForDomain = userDomainsService.getUserIdsForDomain(domain);
    if(userIdsForDomain.length === 0)
    {
      logging.winston.log('info', 'No domain assigned to user');
      throw new Meteor.Error(MeteorErrors.NoDomainAssignedToUser);
    }    
    let users= UserCollection.find(
      { _id: { $in: userIdsForDomain } }, 
      {_id:1, username:1, firstname: 1, lastname: 1, ticketorders:1, membershiplevel:1}).fetch();
    let result = users.map(x=> {
      return {_id:x._id, 
        username:x.username, 
        firstname: x.firstname, 
        lastname:x.lastname, 
        ticketorders:x.ticketorders, 
        membershiplevel:x.membershiplevel
      }});
    return result;
  },

  addUserForExistingDomain(email, domain, firstname, lastname, sendUserNotification, role) 
  {
    var logging = require('./logging.js');  
    const {userDomainsService} = require('./userDomainsService.js');
    check(domain, String);    
    check(email, String);
    check(firstname, String);    
    check(lastname, String);    
    check(sendUserNotification, Boolean);    
    check(role, String);    

    domain=domain.toString().toLowerCase();      
    email=email.toString().toLowerCase();    

    //check if user is authorized
    //check if user is part of the domain
    //insert user for the domain.
    let userid=Meteor.userId();
    if (!userid) 
    {
      throw new Meteor.Error(MeteorErrors.NotAuthorized);
    }

    let domainsForUserId = userDomainsService.getDomainsForUserId(userid);
    if(domainsForUserId.length=== 0 || !domainsForUserId.includes(domain))
    {
      logging.winston.log('info', `User ${userid} does not belong to domain ${domain}`);
      throw new Meteor.Error(MeteorErrors.NotAuthorized);
    }
    
    let createuseroptions={username: email, email: email, domain:domain, firstname: firstname, 
      lastname: lastname, sendUserNotification:sendUserNotification, role: role};
    let userId= Accounts.createUser(createuseroptions);
    logging.winston.log('info', `User created for email ${email} and domain ${domain}`);

    if(sendUserNotification === true)
    {
      try
      {
        Accounts.sendEnrollmentEmail(userId, email);
        logging.winston.log('info', `Send enrollment email to email ${email}`);
      }
      catch(error)
      {
        logging.winston.log('info', `Error sending enrollment email to userid: ${userId} email: ${email}. Error ${error}`);
      }  
    }

    return {userId:userId}; 
  },

  //if domain has been registered before, then return error
  //if domain has not been registered before then check that return error if the email, domain combination has been registered before. 
  createUserForNewDomain(email, password, domain) 
  {
    var logging = require('./logging.js');
    const {userDomainsService} = require('./userDomainsService.js');
    const {domainsService} = require('./domainsService.js');
      
    check(domain, String);
    check(email, String);
    check(password, String);
    
    domain=domain.toString().toLowerCase();
    email=email.toString().toLowerCase();      

    var domainExistForOtherUsers= domainsService.doesDomainExist(domain);
    if(domainExistForOtherUsers)
    {
      logging.winston.log('info', `Domain is already is use, Domain: ${domain} Email: ${email}`);
      throw new Meteor.Error(MeteorErrors.DomainAlreadyInUse);
    }

    var user=Accounts.findUserByEmail(email);
    //#region if user does not exist, then create user, add domain role to user, send enrollment email. 
    if(user == null)
    {
      let createuseroptions={username: email, email: email, password: password, domain:domain, firstname:'', 
        lastname: '', sendUserNotification:false, role: ''};
      let userid= Accounts.createUser(createuseroptions);
      logging.winston.log('info', `User created for email ${email} and domain ${domain}`);
      
      try
      {
        Accounts.sendVerificationEmail(userid, email);
        logging.winston.log('info', `Send verification email to email ${email}`);
      }
      catch(error)
      {
        logging.winston.log('info', `Error sending verification email to userid: ${userid} email: ${email}. Error ${error}`);
      }  
      return {userId:userid, domain:domain}; 
    }
    //#endregion

    //#region if user exists but he is not registered to domain, then add domain to the list of his domains
    let userId=user._id;
    let domainsForUserId=userDomainsService.getDomainsForUserId(userId);
    
    //#region if "user already exists for the domain", return error message back to ui about domain and user. 
    if(domainsForUserId.length>0 && domainsForUserId.includes(domain))
    {
      logging.winston.log('info', `User already exists for the domain, Domain: ${domain} Email: ${email}`);
      throw new Meteor.Error(MeteorErrors.UserExistsForDomain);
    }
    //#endregion
    //#region if "user exists but not for the domain", add domain role to user.
    userDomainsService.addDomainForUserId(userId, domain);
    logging.winston.log('info', `Added domain ${domain} to email ${email}`);
    
    domainsService.addDomain(domain);
    logging.winston.log('info', `Added domain ${domain}`);

    //TODO: create a proper email template and email sending provider. 
    try
    {
      Accounts.sendVerificationEmail(userId, email);
      logging.winston.log('info', `Send verification email to email ${email}`);
    }
    catch(error)
    {
      logging.winston.log('info', `Error sending verification email to userid: ${userId} email: ${email}. Error ${error}`);
    } 
    return {userId:userId, domain:domain}; 
  //#endregion
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
    const {userDomainsService} = require('./userDomainsService.js');

    check(email, String);
    check(password, String);
    check(domain, String);

    domain=domain.toString().toLowerCase();
    email=email.toString().toLowerCase();      

    var user=Accounts.findUserByEmail(email);    
    
    if(user==null)
    {
      throw new Meteor.Error(MeteorErrors.EmailPasswordInvalid);
    }
    
    //#region user exists
    var _checkPasswordReturn=Accounts._checkPassword(user, password);    
    if(_checkPasswordReturn == null || _checkPasswordReturn.error)
    {
      throw new Meteor.Error(MeteorErrors.EmailPasswordInvalid);    
    }
    let userId= _checkPasswordReturn.userId;
    //#region user trying to login with email, password
    if(domain==='')
    {
      let domainsForUserId = userDomainsService.getDomainsForUserId(userId);
      if(domainsForUserId.length === 0)
      {
        logging.winston.log('info', `Email: ${email}, User ${userId} does not belong to domain ${domain}`);
        throw new Meteor.Error(MeteorErrors.UserDoesNotBelongToDomain);
      }

      if(domainsForUserId && domainsForUserId.length ===1)
      {
        return {userId:user._id, domain:domainsForUserId[0]};    
      }

      if(domainsForUserId && domainsForUserId.length >1)
      {
        logging.winston.log('info', `Multiple domains defined for user ${userId}, Domain: ${domain} Email: ${email}`);
        let domainsResult = userDomainsService.getDomainsForUserId(userId);
        return {domains: domainsResult};
      }        
    }
    //#endregion

    //#region user trying to login with email, password, domain
    var domainsForUser = userDomainsService.getDomainsForUserId(userId);
    if(domainsForUser.length===0)
    {
      logging.winston.log('info', `Unauthorized Request, client passing Domain: ${domain} which does not belong to Email: ${email}`);
      throw new Meteor.Error(MeteorErrors.NotAuthorized);
    }    
    let doesdomainBelongToUser=domainsForUser.includes(domain);
    if(doesdomainBelongToUser === false)
    {
      logging.winston.log('info', `Unauthorized Request, client passing Domain: ${domain} which does not belong to Email: ${email}`);
      throw new Meteor.Error(MeteorErrors.NotAuthorized);
    }
    return {userId:user._id, domain:domain}; 
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
      throw new Meteor.Error(MeteorErrors.EmailPasswordInvalid);
    }    
    //TODO: create a proper email template and email sending provider. 
    Accounts.sendResetPasswordEmail(user._id, email);   
    return true;
  },
}
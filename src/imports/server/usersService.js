'use strict';
/// <reference types="Accounts" />
import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { UserCollection,UserDomainCollection,DomainCollection, UserDetailCollection } from '../api/collections';

export const userService = 
{
  //if domain has been registered before, then return error
  //if domain has not been registered before then check that return error if the email, domain combination has been registered before. 
  // 
  createUserIfItDoesNotExist(email, password,domain) 
  {
    var logging = require('./logging.js');
    var emailService = require('./email.js');
    const {userDomainsService} = require('./userDomainsService.js');
    const {domainsService} = require('./domainsService.js');
    var domainOwner_RoleName='domainOwner';
      
    check(domain, String);
    check(email, String);
    check(password, String);
    
    domain=domain.toString().toLowerCase();
    email=email.toString().toLowerCase();      

    var domainExistForOtherUsers= domainsService.doesDomainExistForOtherUsers(domain);
    if(domainExistForOtherUsers)
    {
      logging.winston.log('info', `Domain is already is use, Domain: ${domain} Email: ${email}`);
      throw new Meteor.Error('domain-already-in-use');
    }

    var user=Accounts.findUserByEmail(email);
    //#region if user does not exist, then create user, add domain role to user, send enrollment email. 
    if(user == null)
    {
      let userId= Accounts.createUser({username: email, email: email, password: password});
      logging.winston.log('info', `User created for email ${email} and domain ${domain}`);
      
      userDomainsService.addDomainForUserId(userId, domain);
      logging.winston.log('info', `Added domain ${domain} to email ${email}`);
      
      domainsService.addDomain(domain);
      logging.winston.log('info', `Added domain ${domain}`);

      //TODO: create a proper email template and email sending provider. 
      Accounts.sendEnrollmentEmail(userId, email);
      return {userId:userId, domain:domain}; 
    }
    //#endregion

    //#region if user exists but he is not registered to domain, then add domain to the list of his domains
    let userId=user._id;
    let domainsForUserId=userDomainsService.getDomainsForUserId(userId);
    
    //#region if "user already exists for the domain", return error message back to ui about domain and user. 
    if(domainsForUserId.length>0 && domainsForUserId.includes(domain))
    {
      logging.winston.log('info', `User already exists for the domain, Domain: ${domain} Email: ${email}`);
      throw new Meteor.Error('user-exists-for-domain');
    }
    //#endregion
    //#region if "user exists but not for the domain", add domain role to user.
    userDomainsService.addDomainForUserId(userId, domain);
    logging.winston.log('info', `Added domain ${domain} to email ${email}`);
    
    domainsService.addDomain(domain);
    logging.winston.log('info', `Added domain ${domain}`);

    //TODO: create a proper email template and email sending provider. 
    Accounts.sendEnrollmentEmail(userId, email);
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
    let userId= _checkPasswordReturn.userId;
    //#region user trying to login with email, password
    if(domain==='')
    {
      let domainsForUserId = userDomainsService.getDomainsForUserId(userId);
      if(domainsForUserId.length === 0)
      {
        logging.winston.log('info', `Email: ${email}, User ${userId} does not belong to domain ${domain}`);
        throw new Meteor.Error('user-does-not-belong-to-domain');
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
      throw new Meteor.Error('not-authorized');
    }    
    let doesdomainBelongToUser=domainsForUser.includes(domain);
    if(doesdomainBelongToUser === false)
    {
      logging.winston.log('info', `Unauthorized Request, client passing Domain: ${domain} which does not belong to Email: ${email}`);
      throw new Meteor.Error('not-authorized');
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
      throw new Meteor.Error('email-invalid');
    }    
    //TODO: create a proper email template and email sending provider. 
    Accounts.sendResetPasswordEmail(user._id, email);   
    return true;
  },
}
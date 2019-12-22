'use strict';
/// <reference types="Accounts" />
import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

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

  getUsersForDomain(domain) 
  {
    var logging = require('./logging.js');  
    const {userDomainsService} = require('./userDomainsService.js');
    check(domain, String);    
    domain=domain.toString().toLowerCase();      

    //check if user is authorized
    //check if user is part of the domain
    //find all userids for that domain, then return all users for those userids
    if (!Meteor.userId()) 
    {
      throw new Meteor.Error('not-authorized');
    }

    let domainsForUserId = userDomainsService.getdomainsForUserId(Meteor.userId());
    if(domainsForUserId.count() === 0 || domainsForUserId.findOne({"domain": domain}).count() === 0)
    {
      logging.winston.log('info', `User ${Meteor.userId()} does not belong to domain ${domain}`);
      throw new Meteor.Error('user-does-not-belong-to-domain');
    }

    let userIdsForDomain = userDomainsService.getUserIdsForDomain(domain);
    if(userIdsForDomain.length === 0)
    {
      logging.winston.log('info', 'No domain assigned to user');
      throw new Meteor.Error('no-domain-assigned-to-user');
    }
    //let usersResult= UsersCollection.find({"by":"tutorials point"});
    let usersResult = { 
      'users': [
        { _id:1, username:'John1', name: { first: 'Dickerson', last: 'Macdonald' }, email:'a@b.com', ticketOrders:2, membershipLevel:"Basic", },
        { _id:2, username:'John2', name: { first: 'Larsen', last: 'Shaw' }, email:'a@b.com', ticketOrders:2, membershipLevel:"Basic",  },
        { _id:11, username:'John11', name: { first: 'Mini', last: 'Navarro' }, email:'a@b.com', ticketOrders:2, membershipLevel:"Basic", _rowVariant: 'success'},
        { _id:3, username:'John3',isActive: false, name: { first: 'Geneva', last: 'Wilson' }, email:'a@b.com', ticketOrders:2, membershipLevel:"Basic",  },
        { _id:4, username:'John4',isActive: true, name: { first: 'Jami', last: 'Carney' }, email:'a@b.com', ticketOrders:2, membershipLevel:"Basic",  },
        { _id:5, username:'John5',isActive: false, name: { first: 'Essie', last: 'Dunlap' }, email:'a@b.com', ticketOrders:2, membershipLevel:"Basic",  },
        { _id:6, username:'John6',isActive: true, name: { first: 'Thor', last: 'Macdonald' }, email:'a@b.com', ticketOrders:2, membershipLevel:"Basic",  },
        { isActive: true, name: { first: 'Larsen', last: 'Shaw' },  email:'a@b.com', ticketOrders:2, membershipLevel:"Basic", _cellVariants: { age: 'danger', isActive:'warning'}},
        { _id:7, username:'John7',isActive: false, name: { first: 'Mitzi', last: 'Navarro' }, email:'a@b.com', ticketOrders:2, membershipLevel:"Basic",  },
        { _id:8, username:'John8',isActive: false,  name: { first: 'Genevieve', last: 'Wilson' }, email:'a@b.com', ticketOrders:2, membershipLevel:"Basic",  },
        { _id:9, username:'John9',isActive: true,  name: { first: 'John', last: 'Carney' }, email:'a@b.com', ticketOrders:2, membershipLevel:"Basic",  },
        { _id:10, username:'John10',isActive: false, name: { first: 'Dick', last: 'Dunlap' }, email:'a@b.com', ticketOrders:2, membershipLevel:"Basic",  }
      ],
    };
    console.log(`${usersResult}`);
    return usersResult;
  }
}
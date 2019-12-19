'use strict';
/// <reference types="Accounts" />
/// <reference types="Roles" />
import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
export const UsersCollection = new Mongo.Collection.get('users');
//export const RolesCollection = new Mongo.Collection.get('roles');
export const RolesAssigmentCollection = new Mongo.Collection.get('role-assignment');

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
      RolesAssigmentCollection.findOne({'role._id': domainOwner_RoleName, scope: domain}, {_id:1})
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
      let domainsForUser = Roles.getScopesForUser(_checkPasswordReturn.userId);
      if(domainsForUser == null)
      {
        logging.winston.log('info', 'No domain assigned to user');
        throw new Meteor.Error('no-domain-assigned-to-user');
      }
      if(domainsForUser && domainsForUser.length ===1)
      {
        return {userId:user._id, domain:domainsForUser[0]};    
      }

      if(domainsForUser && domainsForUser.length >1)
      {
        logging.winston.log('info', `Multiple domains defined for user, Domain: ${domain} Email: ${email}`);
        let domainsResult = user.roles.map(function(role)
        {
          return {domain : role}
        });
        return {domains: domainsResult};
      }  
      
    }
    //#endregion

    //#region user trying to login with email, password, domain
    var domainsForUser = user.roles.filter(x => x.scope === domain);
    if(domainsForUser==null)
    {
      logging.winston.log('info', `Unauthorized Request, client passing Domain: ${domain} which does not belong to Email: ${email}`);
      throw new Meteor.Error('not-authorized');
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
    
    if (!Meteor.userId) 
    {
      throw new Meteor.Error('not-authorized');
    }

    /*var user=Accounts.findUserByEmail(email);    
    if(user==null)
    {
      logging.winston.log('info', `Invalid email: ${email}`);
      throw new Meteor.Error('email-invalid');
    } */  
    //let users=Users.find({"domain":domain});
    let usersResult= UsersCollection.find({"by":"tutorials point"});
    /*let usersResult = { 
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
    };*/
    console.log(`${usersResult}`);
    return usersResult;
  }
}
import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base';
import { DomainCollection } from './domains';

export const UserCollection = 
{
  CreateUserIfItDoesNotExist(domain, email, password) 
  {
    var logging = require('./logging.js');
    var email = require('./email.js');
    
    check(domain, String);
    check(email, String);
    check(password, String);
    
    //TODO: add security check
    
    //TODO: check if user has already registered in the domain before. 
    var hasDomainBeenCreatedBefore=DomainCollection.hasDomainBeenCreatedBefore(domain);
    if(hasDomainBeenCreatedBefore === false)
    {
      throw new Meteor.Error('Domain is already is use');
    }

    var hasUserRegisteredInDomainBefore=DomainCollection.hasUserRegisteredInDomainBefore(domain, email);
    if(hasUserRegisteredInDomainBefore === false)
    {
      throw new Meteor.Error('User has already registered in domain');
    }

    var domainResult=DomainCollection.createDomain(domain);
    
    var userId= Accounts.createUser({username: domain + ':'+ email, email: email, password: password, 
      profile:{domainId: domainResult.domainId}});
    logging.winston.log('info', 'User created with userid ' + userId + ', for email: '+ email + 'domain: ' + domain + ' and domainId: ' +  domainId);

    //TODO: 5. send email to user about new account creation.
    var subject='Your account at http://localhost:3000/' + domain;
    var emailText='Your account has been created at http://localhost:3000/' + domain;

    email.send(email, subject, emailText);
    return {userId:userId, domainId:domainId}; 
  }
}
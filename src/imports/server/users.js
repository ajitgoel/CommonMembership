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

    check(domain, String);
    check(email, String);
    check(password, String);
    
    domain=domain.toString().toLowerCase();
    email=email.toString().toLowerCase();      

    //TODO: add security check
    
    //TODO: check if domain has already been registered before. 
    var domainsCount = Users.find({"profile.domain": domain}).count();
    if(domainsCount > 0)
    {
      logging.winston.log('info', 'Domain is already is use, Domain: '+domain+' Email: '+email);
      throw new Meteor.Error('Domain is already is use');
    }

    //TODO: check if user has already registered in the domain before. 
    var emailCountForDomain = Users.find({"profile.domain": domain}, {"profile.email": email}).count();
    if(emailCountForDomain > 0)
    {
      logging.winston.log('info','User is already registered in the domain, Domain: '+domain+ ' Email: '+email);
      throw new Meteor.Error('User is already registered in the domain');
    }

    var usernameToUpdate=domain + ':'+ email;
    var emailToUpdate=domain + ':'+ email;

    var userId= Accounts.createUser({username: usernameToUpdate, email: emailToUpdate, password: password,
      profile:{domain: domain, email: email}});
    logging.winston.log('info', 'User created with userid ' + userId + ', for email: '+ email + 'domain: ' + domain);

    //TODO: send email to user about new account creation.
    Accounts.sendEnrollmentEmail(userId, email);

    //var subject='Your account at http://localhost:3000/' + domain;
    //var emailText='Your account has been created at http://localhost:3000/' + domain;
    //emailService.send(email, subject, emailText);
    return {userId:userId}; 
  }
}
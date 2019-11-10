import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base';
import { Mongo } from 'meteor/mongo'
export const Domains = new Mongo.Collection('domains');
export const Users = new Mongo.Collection('domains');

export const DomainCollection = 
{
  hasDomainBeenCreatedBefore(domain) 
  {
    var logging = require('./logging.js');
    try
    {
      check(domain, String);
      domain=domain.toLowerCase();
      var domainsCount = Domains.find({domain: domain}).count();
      if(domainsCount > 0)
      {
        logging.winston.log('info', 'Domain already exist, Domain: ' +  domain);
        return false;
      }
      return true;
    }
    catch(e)
    {
      logging.winston.log('info', 'Error creating domain: ' +  domain + '. error' +  JSON.stringify(e));
      return false;
    }      
  },

  hasUserRegisteredInDomainBefore(domain, email) 
  {
    var logging = require('./logging.js');
    try
    {
      check(domain, String);
      domain=domain.toLowerCase();
      email=email.toLowerCase();
      
      var domainsCount = Domains.find({domain: domain, user: }).count();
      if(domainsCount > 0)
      {
        logging.winston.log('info', 'Domain already exist, Domain: ' +  domain);
        return false;
      }
      return true;
    }
    catch(e)
    {
      logging.winston.log('info', 'Error creating domain: ' +  domain + '. error' +  JSON.stringify(e));
      return false;
    }      
  },

  createDomain(domain) 
  {
    var logging = require('./logging.js');
    try
    {
      check(domain, String);
      domain=domain.toLowerCase();
      var domainsCount = Domains.find({domain: domain}).count();
      var domainId=Domains.insert({domain:domain, created: new Date(),})
      logging.winston.log('info', 'Domain created with domainId ' + domainId);
      return {domainId:domainId};      
    }
    catch(e)
    {
      logging.winston.log('info', 'Error creating domain: ' +  domain + '. error' +  JSON.stringify(e));
      throw new Meteor.Error('Error creating domain', e);
    }      
  }
}
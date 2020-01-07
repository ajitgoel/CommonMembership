'use strict';
/// <reference types="Accounts" />
import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { UserCollection,UserDomainCollection,DomainCollection } from '../api/collections';
import { MeteorErrors, StateVariables, SecureRoutes, NonEmptyString} from '../api/constants';

export const userDomainsService = 
{
  getUserIdsForDomain(domain) 
  {
    check(domain, NonEmptyString);    
    domain=domain.toString().toLowerCase(); 
    let userIds= UserDomainCollection.find({"domain":domain}, {userid:1, _id:0});
    let result = userIds.map(x => { return x.userid});
    return result;
  },

  getDomainsForUserId(userid) 
  {
    check(userid, NonEmptyString);    
    let domains= UserDomainCollection.find({"userid":userid}, {domain:1, _id:0});
    let result = domains.map(x => { return x.domain});
    return result;
  },
  
  //check if user is authorized
  //check if user is part of the domain    
  isValidUserForDomain(domain) 
  {
    check(domain, NonEmptyString);  
    let loggedinuser_userid=Meteor.userId();
    if (!loggedinuser_userid) 
    {
      return false;
    }
    let domainsForUserId = this.getDomainsForUserId(loggedinuser_userid);
    if(domainsForUserId.length=== 0 || !domainsForUserId.includes(domain))
    {
      return false;
    }
    return true;
  },

  addDomainForUserId(userid, domain) 
  {
    check(userid, NonEmptyString);    
    check(domain, NonEmptyString); 
    UserDomainCollection.insert({userid: userid, domain :domain});
  }
}
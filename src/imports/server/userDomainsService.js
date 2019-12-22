'use strict';
/// <reference types="Accounts" />
import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { UserCollection,UserDomainCollection,DomainCollection, UserDetailCollection } from '../api/collections';
export const userDomainsService = 
{
  getUserIdsForDomain(domain) 
  {
    check(domain, String);    
    domain=domain.toString().toLowerCase(); 
    let userIds= UserDomainCollection.find({"domain":domain}, {userid:1, _id:0});
    let result = userIds.map(x => { return x.userid});
    return result;
  },

  getDomainsForUserId(userid) 
  {
    check(userid, String);    
    let domains= UserDomainCollection.find({"userid":userid}, {domain:1, _id:0});
    let result = domains.map(x => { return x.domain});
    return result;
  },

  addDomainForUserId(userid, domain) 
  {
    check(userid, String);    
    check(domain, String); 
    UserDomainCollection.insert({userid: userid, domain :domain});
  }
}
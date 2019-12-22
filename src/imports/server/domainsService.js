'use strict';
import { check } from 'meteor/check';
import { Mongo } from 'meteor/mongo';
import { UsersCollection,UserDomainCollection,DomainCollection } from '../api/collections';

export const domainsService = 
{
  doesDomainExistForOtherUsers(domain) 
  {
    check(domain, String);    
    domain=domain.toString().toLowerCase(); 
    let domainExist= DomainCollection.find({"domain":domain}, {_id: 1}).count()>0?true:false; 
    return domainExist;
  },
  addDomain(domain) 
  {
    check(domain, String);    
    DomainCollection.update(
      {},
      {$set :{domain :domain}},
      {upsert: true});
  }
}
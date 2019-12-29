'use strict';
/// <reference types="Accounts" />
import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { UserCollection,UserDomainCollection,DomainCollection, UserDetailCollection } from '../api/collections';
import { MeteorErrors } from '../api/constants';

export const usersdetailService = 
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
    let usersDetail= UserDetailCollection.find({"domain":domain}, {_id:1, username:1, 'name.first': 1, 'name.last': 1, email:1, ticketOrders:1, membershipLevel:1});
    let result = usersDetail.map(x=> {
      return {
        _id:x._id, 
        username:x.username, 
        name: x.name, 
        email:x.email, 
        ticketOrders:x.ticketOrders, 
        membershipLevel:x.membershipLevel
      };
    });
    return result;
  },
}
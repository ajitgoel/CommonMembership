'use strict';
import {check} from 'meteor/check';
import {Mongo} from 'meteor/mongo';
import {UserCollection,UserDomainCollection,DomainCollection} from '../api/collections';
import {MeteorErrors, StateVariables, SecureRoutes, NonEmptyString} from '../api/constants';
import domainsService from './domainsService';

describe('domainsService', () => 
{
  beforeEach(() => {
    DomainCollection=jest.fn(() => {
      return { "domain": "domain1", _id: 1 };
    });
  }),
  test.only('doesDomainExist1', () => 
  {
    expect(domainsService.doesDomainExist("domain1")).toBe(true);
  }); 
  test.only('doesDomainExist2', () => 
  {
    expect(domainsService.doesDomainExist("domain2")).toBe(false);
  }); 
})
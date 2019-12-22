import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { assert } from 'chai';
import faker from 'faker';
import { Factory } from 'meteor/dburles:factory';
import StubCollections from 'meteor/hwillson:stub-collections';
import { resetDatabase } from 'meteor/xolvio:cleaner';

import { domainsService } from './domainsService.js';
import { UserCollection,UserDomainCollection,DomainCollection } from '../api/collections';
import { sinon } from 'meteor/practicalmeteor:sinon';

describe('DomainsService', () => 
{
  describe('methods', () => 
  {
    beforeEach(() => 
    {
      resetDatabase();
      //Factory.define('user', Meteor.users, {profile: {},});
      //currentUser = Factory.create('user');
      //sinon.stub(Meteor, 'user');
      //Meteor.user.returns(currentUser);
    });

    it('can add domain', () => {
      domainsService.addDomain('domain1');
      assert.equal(DomainCollection.find().count(), 1);
    });

    it('cannot add same domain twice', () => {
      domainsService.addDomain('domain1');
      domainsService.addDomain('domain1');
      assert.equal(DomainCollection.find().count(), 1);
    });

    afterEach(() => 
    {
      //Meteor.user.restore();
      resetDatabase();
    });
  
  });
});
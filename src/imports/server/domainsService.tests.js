import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { assert } from 'chai';
import faker from 'faker';
import { Factory } from 'meteor/dburles:factory';
import StubCollections from 'meteor/hwillson:stub-collections';
import { resetDatabase } from 'meteor/xolvio:cleaner';

import { domainsService } from './domainsService.js';
import { UserCollection,UserDomainCollection,DomainCollection } from '../api/collections';
import { sinon } from 'sinon';

if (Meteor.isServer) 
{  
  describe('DomainsService', function()
  {
      beforeEach(function ()
      {
        resetDatabase();
        //Factory.define('user', Meteor.users, {profile: {},});
        //currentUser = Factory.create('user');
        //sinon.stub(Meteor, 'user');
        //Meteor.user.returns(currentUser);
      });

      it('can add domain', function()
      {
        DomainCollection.remove({});
        domainsService.addDomain('domain1');
        assert.equal(DomainCollection.find().count(), 1);
      });
      it('doesDomainExist1', function()
      {
        DomainCollection.insert({domain:'domain1'});
        let returnValue=domainsService.doesDomainExist('domain1');
        assert.equal(returnValue, true);

        returnValue=domainsService.doesDomainExist('domain2');
        assert.equal(returnValue, false);
      });
      afterEach(() => 
      {
        //Meteor.user.restore();
        resetDatabase();
      });
  });
}
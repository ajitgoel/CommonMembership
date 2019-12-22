import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { assert } from 'chai';
import faker from 'faker';
import { Factory } from 'meteor/dburles:factory';
import StubCollections from 'meteor/hwillson:stub-collections';
import { resetDatabase } from 'meteor/xolvio:cleaner';

import { userService } from './usersService.js';
import { UserCollection,UserDomainCollection,DomainCollection } from '../api/collections';
import { sinon } from 'meteor/practicalmeteor:sinon';

describe('UsersService', () => 
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

    it('can login', () => {
      let result=userService.loginUserForDomain('meethagoel@gmail.com', '123123', '');
      assert.fail('email-password-invalid');
      assert.equal(result.domain);
    });

    afterEach(() => 
    {
      //Meteor.user.restore();
      resetDatabase();
    });
  
  });
});
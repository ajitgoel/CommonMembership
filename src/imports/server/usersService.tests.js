/// <reference types="node" />
import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { assert } from 'chai';
import faker from 'faker';
import { Factory } from 'meteor/dburles:factory';
import StubCollections from 'meteor/hwillson:stub-collections';
import { resetDatabase } from 'meteor/xolvio:cleaner';

import { userService } from './usersService.js';
import { userDomainsService } from './userDomainsService.js';
import { Accounts } from 'meteor/accounts-base';
import { UserCollection,UserDomainCollection,DomainCollection } from '../api/collections';
var sinon = require('sinon');
      
if (Meteor.isServer) 
{
  describe('UsersService', function()
  {
    this.timeout(15000);
    beforeEach(function()
    {
      resetDatabase();
      //Factory.define('user', Meteor.users, {profile: {},});
      //let currentUser = Factory.create('user');
      //sinon.stub(Meteor, 'user');
      //Meteor.user.returns(currentUser);
    });
    /*it('can login', function() 
    {
      let result=userService.loginUserForDomain('meethagoel@gmail.com', '123123', '');
      assert.fail('email-password-invalid');
      assert.equal(result.domain);
    });*/
    it('add users for existing domain', function(done) 
    {
      sinon.stub(userDomainsService,'isValidUserForDomain').returns(true);
      sinon.stub(Accounts,'sendEnrollmentEmail');
      let users=[];
      users.push({email:'ajit@goel.com', firstname:'ajit', lastname:'goel', role:'admin'});
      users.push({email:'meetha@goel.com', firstname:'meetha', lastname:'goel', role:'admin'});
      
      let result=userService.addUsersForExistingDomain('clearcrimson', users, true);
      done();
      console.log(result);
      let length=result.filter(d => d.userId!=null).length;    
      assert.equal(length, 2);            
      sinon.restore();
    });
    
    afterEach(function()
    {
      //Meteor.user.restore();
      resetDatabase();
    });  
  });
}
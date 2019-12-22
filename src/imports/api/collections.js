import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Items = new Mongo.Collection('items');
export const UserCollection = new Mongo.Collection.get('users');
export const UserDetailCollection = new Mongo.Collection('users-detail');
export const UserDomainCollection = new Mongo.Collection('user-domains');
export const DomainCollection = new Mongo.Collection('domains');

if (Meteor.isServer) 
{
  UserDetailCollection.rawCollection().createIndex({domain: 'text',});
  UserDomainCollection.rawCollection().createIndex({userid: 'text',});
  DomainCollection.rawCollection().createIndex({domain: 'text',});
}

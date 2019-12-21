import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Notes = new Mongo.Collection('notes');
export const Items = new Mongo.Collection('items');
export const UsersCollection = new Mongo.Collection.get('users');
export const UserDomainCollection = new Mongo.Collection('user-domains');
export const DomainCollection = new Mongo.Collection('domains');

if (Meteor.isServer) 
{
  Notes.rawCollection().createIndex({text: 'text',});
}

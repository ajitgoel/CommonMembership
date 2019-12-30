import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';

export const Items = new Mongo.Collection('items');
export const UserCollection = new Mongo.Collection.get('users');
export const UserDetailCollection = new Mongo.Collection('users-detail');
export const UserDomainCollection = new Mongo.Collection('user-domains');
export const DomainCollection = new Mongo.Collection('domains');
export const DomainAuditLogCollection = new Mongo.Collection('domain-audit-log');

const Schemas = {};

Schemas.Domain = new SimpleSchema({
  domain: {type: String, label: "Domain", required: true}
});
DomainCollection.attachSchema(Schemas.Domain);

Schemas.UserDomain = new SimpleSchema({
  domain: {type: String, label: "Domain", required: true},
  userid: {type: String, label: "User Id", required: true}
});
UserDomainCollection.attachSchema(Schemas.UserDomain);

Schemas.UserDetail = new SimpleSchema({
  email: {type: String, label: "Email", required: true},
  name: {type: Object, label: "Name", required: false},
  password: {type: String, label: "password", required: true, min:6},
  sendUserNotification: {type: Boolean, label: "Send User Notification", required: true, defaultValue:false},
  role: {type: String, label: "role", required: true}
});
UserDetailCollection.attachSchema(Schemas.UserDetail);

Schemas.DomainAuditLog = new SimpleSchema({
  domain: {type: String, label: "Domain", required: true},
  type: {type: String, label: "Type", required: true, defaultValue:'Info'},
  auditLogText: {type: String, label: "Audit Log Text", required: true},
  stackTrace: {type: String, label: "Stack Trace", required: true, defaultValue:''},
  createdAt: {type: Date, label: "Created At", required: true},
});
DomainAuditLogCollection.attachSchema(Schemas.DomainAuditLog);

if (Meteor.isServer) 
{
  UserDetailCollection.rawCollection().createIndex({domain: 'text',});
  UserDomainCollection.rawCollection().createIndex({userid: 'text',});
  DomainCollection.rawCollection().createIndex({domain: 'text',});
  DomainAuditLogCollection.rawCollection().createIndex({domain: 'text',});
}

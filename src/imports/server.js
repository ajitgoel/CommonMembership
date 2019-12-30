import { Meteor } from 'meteor/meteor';
import './server/accountsBase';
import { Accounts } from 'meteor/accounts-base';
import { MeteorErrors, StateVariables} from './api/constants';

const isDev = process.env.NODE_ENV !== 'production'

Meteor.publish('currentUserId', function () 
{
  console.warn(`Meteor publish currentUserId called with ${this.userId}`);
  return this.userId;
});

Meteor.startup(() => 
{
  Accounts.config({loginExpirationInDays: StateVariables.LoginExpirationInDays});
  process.env.MAIL_URL = 
    `${Meteor.settings.private.Mailgun.Protocol}://${Meteor.settings.private.Mailgun.Username}:${Meteor.settings.private.Mailgun.Password}@${Meteor.settings.private.Mailgun.SMTP_Hostname}:${Meteor.settings.private.Mailgun.Port}`;
});
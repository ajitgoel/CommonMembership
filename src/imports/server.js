import { Meteor } from 'meteor/meteor';
import './server/accountsBase';
import { Accounts } from 'meteor/accounts-base';
import { MeteorErrors, StateVariables, SecureRoutes, NonEmptyString} from './api/constants';
import './api/publications';

const isDev = process.env.NODE_ENV !== 'production'

Meteor.startup(() => 
{
  Accounts.config({
    loginExpirationInDays: StateVariables.LoginExpirationInDays, 
    sendVerificationEmail: true,
    passwordResetTokenExpirationInDays:3,
    passwordEnrollTokenExpirationInDays :30
  });
  let username=encodeURIComponent(Meteor.settings.private.AmazonSES.Username);
  let password=encodeURIComponent(Meteor.settings.private.AmazonSES.Password);
  process.env.MAIL_URL = 
    `${Meteor.settings.private.AmazonSES.Protocol}://${username}:${password}@${Meteor.settings.private.AmazonSES.Hostname}:${Meteor.settings.private.AmazonSES.Port3}`;
});
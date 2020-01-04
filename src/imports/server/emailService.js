'use strict';
import { Email } from 'meteor/email';
import { MeteorErrors } from '../api/constants';
import { check } from 'meteor/check';

export const emailService = 
{
  sendemail(fromAddress, subject, emailText) 
  {
    var logging = require('./logging.js');        
    try
    {
      check([fromAddress, subject, emailText], [String]);        
      let to=Meteor.settings.private.ToEmailId;
      console.warn(to);
      Email.send({to:to, from:fromAddress, subject:subject, text:emailText});
    }
    catch(error) 
    {
      console.warn(error);
      logging.winston.log('info', `Error sending email from: ${fromAddress} subject: ${subject} emailText: ${emailText} Error: ${error}`);
      throw new Meteor.Error(MeteorErrors.ServerError);
    };
  }
}
'use strict';
import { check } from 'meteor/check';
const AWS = require('aws-sdk');
import { MeteorErrors, StateVariables, SecureRoutes, NonEmptyString} from '../api/constants';

export const emailServiceAWS = 
{
  sendemail(fromAddress, subject, emailText) 
  {
      check(fromAddress, NonEmptyString);
      check(subject, NonEmptyString);
      check(emailText, NonEmptyString);
      var logging = require('./logging.js');

      AWS.config.update({      
        accessKeyId: Meteor.settings.private.AmazonSES.AccessKeyID, 
        secretAccessKey: Meteor.settings.private.AmazonSES.SecretAccessKey, 
        region: Meteor.settings.private.AmazonSES.Region
      });
      var params = {Destination: {CcAddresses: [],ToAddresses: [Meteor.settings.private.ToEmailId,]},
      Message: 
      {
          Body: 
          {
              //Html: {Charset: "UTF-8",Data: "HTML_FORMAT_BODY"},
              Text: {Charset: "UTF-8",Data: emailText}
          },
          Subject: {Charset: 'UTF-8',Data: subject}
          },
          Source: Meteor.settings.private.SourceEmailId,//required
          ReplyToAddresses: [fromAddress,],
      };
      var sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();

      sendPromise.then(function(data) 
      {
        logging.winston.log('info', 'Email send from: '+ fromAddress + '. Response from Amazon SES: ' +  JSON.stringify(data));
        return data;
      }).
      catch(function(err) 
      {
        logging.winston.log('info', 'Error sending email from: '+ fromAddress + '. Error from Amazon SES: ' +  JSON.stringify(err));
        throw new Meteor.Error(MeteorErrors.ServerError);
      });
  }
}
import { check } from 'meteor/check';
const AWS = require('aws-sdk');
        
export const Email = 
{
  send(fromAddress, subject, emailText) 
  {
      check(fromAddress, String);
      check(subject, String);
      check(emailText, String);
      
      AWS.config.update({      
        accessKeyId: Meteor.settings.private.AmazonSES.AccessKeyID, 
        secretAccessKey: Meteor.settings.private.AmazonSES.SecretAccessKey, 
        region: Meteor.settings.private.AmazonSES.Region
      });
      var params = {Destination: {CcAddresses: [],ToAddresses: [Meteor.settings.private.SourceEmailId,]},
      Message: 
      {
          Body: 
          {
              //Html: {Charset: "UTF-8",Data: "HTML_FORMAT_BODY"},
              Text: {Charset: "UTF-8",Data: emailText}
          },
          Subject: {Charset: 'UTF-8',Data: subject}
          },
          Source: fromAddress,//required
          ReplyToAddresses: [fromAddress,],
      };
      var sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();

      sendPromise.then(function(data) 
      {
        return data;
      }).
      catch(function(err) 
      {
        throw new Meteor.Error('Error sending email', err);
      });
  }
}
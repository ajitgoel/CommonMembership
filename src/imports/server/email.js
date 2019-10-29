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
      accessKeyId: Meteor.settings.AccessKeyID, 
      secretAccessKey: Meteor.settings.SecretAccessKey, 
      region: Meteor.settings.AmazonSES_Region
    });
    var params = {Destination: {CcAddresses: [],ToAddresses: [Meteor.settings.SourceEmailId,]},
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
        console.log(data.MessageId);
    }).
    catch(function(err) 
    {
      console.error(err, err.stack);
    });
  }
}
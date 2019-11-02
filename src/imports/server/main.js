/*import { add, transports } from 'winston';
import 'winston-loggly-bulk';
import { Meteor } from 'meteor/meteor';
import winston from 'winston';

add(transports.Loggly, 
{
  inputToken: "6d88810e-b0eb-4214-8d3f-9f667d3aae37",
  subdomain: "ajitgoel",
  tags: ["meteor", "winston"],
  json:true
});
*/

var winston = require('winston');
var {Loggly} = require('winston-loggly-bulk');

winston.add(new Loggly({
    token: Meteor.settings.private.Loggly.token,
    subdomain: Meteor.settings.private.Loggly.subdomain,
    tags: ["Winston-NodeJS"],
    json: true
}));
winston.log('info', "Hello World from Node.js!");

if(Meteor.isServer)
{  
    Meteor.startup(function(){
        winston.log('info', "Hello World from Node.js!  winston-loggly-bulk-demo has started!");
    });
}
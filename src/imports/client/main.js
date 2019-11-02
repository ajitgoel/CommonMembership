import { Meteor } from 'meteor/meteor';
import { winston } from 'meteor/clinical:winston-browser-logging';

if(Meteor.isClient)
{
  Meteor.startup(function()
  {
    // You should see a message on both the browser console and Loggly.com
    winston.info("winston-client has started on the client!");
  });    
}
'use strict';
import {Loggly} from 'winston-loggly-bulk';
import winston from 'winston';

winston.add(new Loggly({
  token: Meteor.settings.private.Loggly.token,
  subdomain: Meteor.settings.private.Loggly.subdomain,
  tags: ["Winston-NodeJS"],
  json: true
}));
module.exports.winston = winston;
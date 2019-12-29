import { Accounts } from 'meteor/accounts-base';

Accounts.emailTemplates.siteName = Meteor.settings.private.SiteName;
Accounts.emailTemplates.from = Meteor.settings.private.SourceEmailId;

//#region EnrollAccount
Accounts.emailTemplates.enrollAccount.html = function (user, url) 
{
  let newUrl = url.replace("#/enroll-account", "verifyemail");
  SSR.compileTemplate('enrollAccount', `<pre> ${Assets.getText('emailTemplates/email-verify/content.txt')} </pre>`);
  return SSR.render("enrollAccount", 
  { 
    name: user.username, 
    action_url: newUrl, 
    support_url:Meteor.settings.private.SupportUrl,
    ProductName:Meteor.settings.private.ProductName,
    WebsiteURL:Meteor.settings.private.WebsiteURL,
    CompanyName:Meteor.settings.private.CompanyName,
    CompanyNameAddress1:Meteor.settings.private.CompanyNameAddress1,
    CompanyNameAddress2:Meteor.settings.private.CompanyNameAddress2,
  });
};
//#endregion

//#region ResetPassword
Accounts.emailTemplates.resetPassword.html = function (user, url) 
{
  let newUrl = url.replace("#/reset-password", "changepassword");
  SSR.compileTemplate('forgotPassword', `<pre> ${Assets.getText('emailTemplates/password-reset/content.txt')} </pre>`);
  return SSR.render("forgotPassword", 
  { 
    name: user.username, 
    action_url: newUrl, 
    support_url:Meteor.settings.private.SupportUrl,
    ProductName:Meteor.settings.private.ProductName,
    WebsiteURL:Meteor.settings.private.WebsiteURL,
    CompanyName:Meteor.settings.private.CompanyName,
    CompanyNameAddress1:Meteor.settings.private.CompanyNameAddress1,
    CompanyNameAddress2:Meteor.settings.private.CompanyNameAddress2,
  });
};
//#endregion

//#region VerifyEmail
Accounts.emailTemplates.verifyEmail.html = function (user, url) 
{
  let newUrl = url.replace("#/enroll-account", "verifyemail");
  SSR.compileTemplate('enrollAccount', `<pre> ${Assets.getText('emailTemplates/email-verify/content.txt')} </pre>`);
  return SSR.render("enrollAccount", 
  { 
    name: user.username, 
    action_url: newUrl, 
    support_url:Meteor.settings.private.SupportUrl,
    ProductName:Meteor.settings.private.ProductName,
    WebsiteURL:Meteor.settings.private.WebsiteURL,
    CompanyName:Meteor.settings.private.CompanyName,
    CompanyNameAddress1:Meteor.settings.private.CompanyNameAddress1,
    CompanyNameAddress2:Meteor.settings.private.CompanyNameAddress2,
  });
};
//#endregion

/*Accounts.onCreateUser(function(options, user) 
{
  var logging = require('./logging.js');
  const {userDomainsService} = require('./userDomainsService.js');
  const {domainsService} = require('./domainsService.js');
  let domain=options.domain;
  let email=options.email;
  let userid=user._id;

  userDomainsService.addDomainForUserId(userid, domain);
  logging.winston.log('info', `Added domain ${domain} to email ${email}`);
  
  domainsService.addDomain(domain);
  logging.winston.log('info', `Added domain ${domain}`);

  Accounts.sendEnrollmentEmail(userid, email);
  logging.winston.log('info', `Send enrollment email to email ${email}`);
  return user;
});*/
import { Accounts } from 'meteor/accounts-base';

Accounts.emailTemplates.siteName = Meteor.settings.private.SiteName;
Accounts.emailTemplates.from = Meteor.settings.private.SourceEmailId;

//#region EnrollAccount
Accounts.emailTemplates.enrollAccount.subject = (user) => {
  return `Welcome to Awesome Town, ${user.profile.name}`;
};

Accounts.emailTemplates.enrollAccount.text = (user, url) => {
  return 'You have been selected to participate in building a better future!'
    + ' To activate your account, simply click the link below:\n\n'
    + url;
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
Accounts.emailTemplates.verifyEmail = {
   subject() {
      return "Activate your account now!";
   },
   text(user, url) {
      return `Hey ${user}! Verify your e-mail by following this link: ${url}`;
   }
};
//#endregion

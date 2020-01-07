import { check } from 'meteor/check';

export const MeteorErrors = 
{
  NotAuthorized: 'not-authorized',
  NotAuthorizedFailureMessage: 'There was an error logging you in. Our administrators have been notified of the issue and we will have a look.',
  NoDomainAssignedToUser: 'no-domain-assigned-to-user',
  UserDoesNotExistDomainNotRegistered: 'user-does-not-exist-domain-not-registered',
  DomainAlreadyInUse: 'domain-already-in-use',
  UserExistsForDomain: 'user-exists-for-domain',
  EmailPasswordInvalid: 'email-password-invalid',
  UserDoesNotBelongToDomain: 'user-does-not-belong-to-domain',
  ServerError: 'server-error',
};
export const NonEmptyString = Match.Where((x) => {
  check(x, String);
  return x.length > 0;
});

export const StateVariables = 
{
  SelectedDomain: 'selected-domain',
  NavigationMessage: 'navigation-message',
  MinimumPasswordLength:6,
  LoginExpirationInDays:0.0006,
};
export const SecureRoutes = 
{
  Dashboard: 'dashboard',
  Users: 'users',
  AddUser: 'add-user',
  ImportUsers: 'import-users',
  AccountProfile: 'account-profile', 
  Settings: 'settings', 
  AccountBilling: 'account-billing', 
  AccountNotifications: 'account-notifications'
};
/// <reference types="Cypress" />

Cypress.Commands.add("resetDatabase", () =>
  cy.exec('"C:\\Program Files\\MongoDB\\Server\\4.2\\bin\\mongo" mongodb://localhost:3001/meteor --eval "db.dropDatabase()"')
  //cy.exec(`mongo mongodb://localhost:3001/meteor ${filePath}`)
);

Cypress.Commands.add('adduser', (email, password, domain, firstname, lastname, sendUserNotification, role) => 
{
  cy.get("[data-cy=email]").clear().type(email);
  cy.get("[data-cy=firstname]").clear().type(firstname);
  cy.get("[data-cy=lastname]").clear().type(lastname);
  cy.get("[data-cy=sendusernotification]").check({force: sendUserNotification});
  cy.get("[data-cy=role]").select(role);
  cy.get("[data-cy=adduser]").click();
});

Cypress.Commands.add('registerUser', (email, password, domain) => 
{
  cy.get("[data-cy=email]").clear().type(email);
  cy.get("[data-cy=password]").clear().type(password);
  cy.get("[data-cy=domain]").clear().type(domain);
  cy.get("[data-cy=termsAndConditions]").check({force: true});  
  cy.get("[data-cy=privacyPolicy]").check({force: true});
  cy.get("[data-cy=registeruser]").click();
});

Cypress.Commands.add('loginUser', (email, password) => 
{
  cy.get("[data-cy=email]").clear().type(email);
  cy.get("[data-cy=password]").clear().type(password);
  cy.get("[data-cy=loginuser]").click();
});

Cypress.Commands.add('resetpassword', (email) => 
{
  cy.get("[data-cy=email]").clear().type(email);
  cy.get("[data-cy=resetpassword]").click();
});

Cypress.Commands.add('contactUs', (name, email, message) => 
{
  cy.visit(Cypress.config().baseUrl);    
  cy.get("[data-cy=contact]").click();

  cy.get("[data-cy=name]").clear().type(name);
  cy.get("[data-cy=email]").clear().type(email);
  cy.get("[data-cy=message]").clear().type(message);
  cy.get("[data-cy=sendemail]").click();
});

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

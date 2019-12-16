/// <reference types="Cypress" />

Cypress.Commands.add("resetDatabase", () =>
  cy.exec('"C:\\Program Files\\MongoDB\\Server\\4.2\\bin\\mongo" mongodb://localhost:3001/meteor --eval "db.dropDatabase()"')
);

Cypress.Commands.add('registerUser', (email, password, domain) => 
{
  cy.contains("Register").click();
  cy.get("[data-cy=email]").type(email);
  cy.get("[data-cy=password]").type(password);
  cy.get("[data-cy=confirmPassword]").type(password);
  cy.get("[data-cy=domain]").type(domain);
  cy.get("[data-cy=termsAndConditions]").check({force: true});  
  cy.get("[data-cy=privacyPolicy]").check({force: true});
  cy.get("[data-cy=registeruser]").click();
  cy.url().should("eq", "http://localhost:3000/dashboard/clearcrimson/");
});

Cypress.Commands.add('loginUser', (email, password) => 
{
  cy.contains("Login").click();

  cy.get("[data-cy=email]").type(email);
  cy.get("[data-cy=password]").type(password);
  cy.get("[data-cy=loginuser]").click();
  cy.url().should("eq", "http://localhost:3000/dashboard/clearcrimson/");
});

Cypress.Commands.add('contactUs', (name, email, message) => 
{
  cy.visit(Cypress.config().baseUrl);    
  cy.get("[data-cy=contact]").click();

  cy.get("[data-cy=name]").type(name);
  cy.get("[data-cy=email]").type(email);
  cy.get("[data-cy=message]").type(message);
  cy.get("[data-cy=sendemail]").click();
  //cy.url().should("eq", "http://localhost:3000/dashboard/clearcrimson/");
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

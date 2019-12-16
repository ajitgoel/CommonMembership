/// <reference types="Cypress" />

describe("login-user", () => 
{
  let email='ajitgoel@gmail.com';
  let pasword='awesome-password';
  let domain='ClearCrimson';

  before(() => 
  {
      cy.resetDatabase();
  });
  beforeEach(() => 
  {
    cy.visit(Cypress.config().baseUrl);
    cy.registerUser(email, pasword, domain);  
  });
  after(() => 
  {

  });
  afterEach(() =>
  {

  });
  it("should login the user", () => 
  {         
    cy.visit('/login');
    cy.loginUser(email, pasword, domain);
  });
});
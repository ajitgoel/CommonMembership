/// <reference types="Cypress" />

describe("login-user", () => 
{
  let email1='ajitgoel@gmail.com';
  let password1='awesome-password';
  let domain1='ClearCrimson';

  let email2='meethagoel@gmail.com';
  let password2='awesome-password';
  let domain2='meteor';

  before(() => 
  {
      cy.resetDatabase();
  });
  beforeEach(() => 
  {
    cy.visit(Cypress.config().baseUrl); 
  });
  after(() => 
  {

  });
  afterEach(() =>
  {

  });
  it("should login the user with one domain", () => 
  {             
    cy.registerUser(email1, password1, domain1); 
    cy.url({timeout: 30000}).should("eq", `${Cypress.config().baseUrl}/dashboard/${domain1.toLowerCase()}/`);
    cy.visit('/login');
    cy.loginUser(email1, password1);
    cy.url({timeout: 30000}).should("eq", `${Cypress.config().baseUrl}/dashboard/${domain1.toLowerCase()}/`);
  });

  it("should not login invalid user", () => 
  {         
    cy.visit('/login');
    cy.loginUser('SomeRandomEmail@gmail.com', 'SomeRandomPassword', '');
    cy.get("[data-cy=emailpasswordinvalid]").contains('The email or password that you entered is invalid. Please try again or');
  });

  it("should login the user with two domains", () => 
  {             
    cy.visit('/register');
    cy.registerUser(email1, password1, domain2); 
    cy.url({timeout: 30000}).should("eq", `${Cypress.config().baseUrl}/dashboard/${domain2.toLowerCase()}/`);

    cy.visit('/login');
    cy.loginUser(email1, password1);
    cy.url({timeout: 30000}).should("eq", `${Cypress.config().baseUrl}/dashboard/${domain2.toLowerCase()}/`);
  });
});
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
    cy.contains("Register").click();
    cy.registerUser(email1, password1, domain1); 
    cy.url({timeout: 30000}).should("eq", `${Cypress.config().baseUrl}/dashboard/${domain1.toLowerCase()}/`);
    cy.contains("Sign in").click();
    cy.loginUser(email1, password1);
    cy.url({timeout: 30000}).should("eq", `${Cypress.config().baseUrl}/dashboard/${domain1.toLowerCase()}/`);
    cy.get("[data-cy=logout]").should("have.text", 'Log out');
    cy.get("[data-cy=logout]").click();
  });

  it("should not login invalid user", () => 
  {         
    cy.contains("Sign in").click();
    cy.loginUser('SomeRandomEmail@gmail.com', 'SomeRandomPassword', '');
    cy.get("[data-cy=emailpasswordinvalid]").contains('The email or password that you entered is invalid. Please try again or');
  });

  it("should login the user with two domains", () => 
  {             
    cy.contains("Register").click();
    cy.registerUser(email1, password1, domain2); 
    cy.url({timeout: 30000}).should("eq", `${Cypress.config().baseUrl}/dashboard/${domain2.toLowerCase()}/`);
    cy.get("[data-cy=logout]").should("have.text", 'Log out');
    cy.get("[data-cy=logout]").click();

    cy.contains("Sign in").click();
    cy.loginUser(email1, password1);    
    cy.get("[data-cy=domain]").contains('Select domain');
    cy.get("[data-cy=domain]").select(domain2);
    cy.get("[data-cy=loginuser]").click();
    cy.url({timeout: 30000}).should("eq", `${Cypress.config().baseUrl}/dashboard/${domain2.toLowerCase()}/`);
    cy.get("[data-cy=logout]").should("have.text", 'Log out');
    cy.get("[data-cy=logout]").click();
  });
});
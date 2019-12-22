/// <reference types="Cypress" />

describe("login-user", () => 
{
  let email='ajitgoel@gmail.com';
  let password='awesome-password';
  let domain='ClearCrimson';

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
  it("should login the user", () => 
  {             
    cy.registerUser(email, password, domain); 
    cy.visit('/login');
    cy.loginUser(email, password, domain);
    cy.url().should("eq", `${Cypress.config().baseUrl}/dashboard/${domain.toLowerCase()}}/`);
  });

  it("should not login invalid user", () => 
  {         
    cy.visit('/login');
    cy.loginUser('jkjgfjkgfkjfdkj@fdskkjdfsjkfsdkjfsdkj.com', 'champa123', '');
    cy.get("[data-cy=emailpasswordinvalid]").contains('The email or password that you entered is invalid. Please try again or');
  });
});
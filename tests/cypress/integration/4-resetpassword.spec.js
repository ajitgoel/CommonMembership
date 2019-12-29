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
  it("1. should show an error message-if the user does not exist, 2. should reset the user's password-if the user exists", () => 
  {             
    cy.contains("Register").click();
    cy.registerUser(email, password, domain); 
    cy.url({timeout: 30000}).should("eq", `${Cypress.config().baseUrl}/dashboard/${domain.toLowerCase()}/`);

    cy.visit('/resetpassword');
    cy.resetpassword('SomeRandomEmail@gmail.com');
    cy.get("[data-cy=emailinvalid]").should('contain.text', 'We could not find your account. Enter a different email or click\n                      Register to continue.\n                    ');

    cy.visit('/resetpassword');
    cy.resetpassword(email);
    cy.get("[data-cy=successalert]").should("have.text", "Success Please check your email for instructions on how to reset your password");
  });
});
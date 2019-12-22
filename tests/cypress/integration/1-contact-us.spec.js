/// <reference types="Cypress" />

describe("contact-us", () => 
{
  let name='Ajit Goel';
  let email='ajitgoel@gmail.com';
  let message='This is a test message';

  before(() => 
  {

  });
  beforeEach(() => 
  {

  });
  after(() => 
  {

  });
  afterEach(() =>
  {

  });
  it("should send message to site admin", () => 
  {         
    cy.contactUs(name, email, message);
    cy.get("[data-cy=successalert]").should("have.text", "Success Your email was send successfully.");
  });
});
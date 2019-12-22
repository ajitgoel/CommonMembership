/// <reference types="Cypress" />

describe("register-user", () => 
{
  let email1='ajitgoel@gmail.com';
  let password1='awesome-password';
  let domain1='ClearCrimson';

  let email2='meethagoel@gmail.com';
  let password2='awesome-password1';

  before(() => 
  {
      cy.resetDatabase();
  });
  beforeEach(() => 
  {
    cy.visit(Cypress.config().baseUrl);
  });
  after(() => {      
  });
  afterEach(() =>{
  });

  it("should create and login the new user", () => 
  {
    cy.registerUser(email1, password1, domain1);
    cy.url({timeout: 30000}).should("eq", `${Cypress.config().baseUrl}/dashboard/${domain1.toLowerCase()}/`);
    
    cy.visit('/register');    
    cy.registerUser(email2, password2, domain1);
    cy.get("[data-cy=domainexists]").should("have.text", 'This domain already exists. Please select another one to continue.');


    /*cy.window().then(win => 
    {
      // this allows accessing the window object within the browser
      const user = win.Meteor.user();
      expect(user).to.exist;
      expect(user.profile.name).to.equal("Ajit Goel");
      expect(user.emails[0].address).to.equal(
        "ajitgoel@gmail.com"
      );
    });*/
  });
});
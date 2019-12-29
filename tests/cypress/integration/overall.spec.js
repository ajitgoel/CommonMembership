/// <reference types="Cypress" />

describe("overall-integration-test", () => 
{
  let email1='ajitgoel@gmail.com';
  let password1='awesome-password';
  let domain1='ClearCrimson';

  let email2='meethagoel@gmail.com';
  let password2='awesome-password1';
  let domain2='Meteor';
  let firstname2='Meetha';
  let lastname2='Goel';
  let sendUserNotification2=true;
  let role2='Contributor';

  before(() => 
  {
      cy.resetDatabase();
  });
  beforeEach(() => 
  {
  });
  after(() => {      
  });
  afterEach(() =>{
  });

  it("should create new user, not allow same domain to be registered by different users", () => 
  {
    cy.visit(Cypress.config().baseUrl);
    cy.contains("Register").click();
    cy.registerUser(email1, password1, domain1);
    cy.url({timeout: 30000}).should("eq", `${Cypress.config().baseUrl}/dashboard/${domain1.toLowerCase()}/`);
    cy.get("[data-cy=logout]").should("have.text", 'Log out');
    cy.get("[data-cy=logout]").click();

    cy.contains("Register").click();
    cy.registerUser(email2, password2, domain1);
    cy.get("[data-cy=domainexists]").should("have.text", 'This domain already exists. Please select another one to continue.');
    
    cy.contains("Register").click();
    cy.registerUser(email1, password1, domain2);
    cy.url({timeout: 30000}).should("eq", `${Cypress.config().baseUrl}/dashboard/${domain2.toLowerCase()}/`);
    cy.get("[data-cy=logout]").should("have.text", 'Log out');
    cy.get("[data-cy=logout]").click();

    cy.contains("Register").click();
    cy.contains("Sign in").click();
    cy.loginUser(email1, password1);
    cy.get("[data-cy=domain]").contains('Select domain');
    cy.get("[data-cy=domain]").select(domain2.toLowerCase());
    cy.get("[data-cy=loginuser]").click();
    cy.url({timeout: 30000}).should("eq", `${Cypress.config().baseUrl}/dashboard/${domain2.toLowerCase()}/`);

    cy.contains("Add user").click();
    cy.adduser(email2, password2, domain1, firstname2, lastname2, sendUserNotification2, role2);
    cy.get("[data-cy=successalert]").should("have.text", "Success User was added successfully.");
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
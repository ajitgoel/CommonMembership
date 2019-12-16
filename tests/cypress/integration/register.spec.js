/// <reference types="Cypress" />

describe("register-user", () => 
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
    cy.visit("http://localhost:3000");
  });
  after(() => {      
  });
  afterEach(() =>{
  });

  it("should create and login the new user", () => 
  {
    cy.registerUser(email, pasword, domain);

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
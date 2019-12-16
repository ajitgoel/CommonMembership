/// <reference types="Cypress" />

describe("sign-up", () => 
{
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
      cy.contains("Register").click();
      cy.get("[data-cy=email]").type("ajitgoel@gmail.com");
      cy.get("[data-cy=password]").type("awesome-password");
      cy.get("[data-cy=confirmPassword]").type("awesome-password");
      cy.get("[data-cy=domain]").type("ClearCrimson");
      cy.get("[data-cy=termsAndConditions]").check({force: true});  
      cy.get("[data-cy=privacyPolicy]").check({force: true});

      cy.get("[data-cy=registeruser]").click();
  
      cy.url().should("eq", "http://localhost:3000/dashboard/clearcrimson/");
  
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
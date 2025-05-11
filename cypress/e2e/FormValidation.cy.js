/// <reference types= "cypress"/>
describe("Form Test", () => {
  beforeEach(() => {
    cy.fixture("TextBoxData").as("userData");
  });

  it("Visi DemoQA", function () {
    cy.visit("https://demoqa.com/");
    cy.contains("Elements").click();
    cy.contains("Text Box").click();
    cy.get('[id="userName"]')
      .type(this.userData.fullName)
      .should("have.value", this.userData.fullName);
    cy.get('[id="userEmail"]')
      .type(this.userData.email)
      .should("have.value", this.userData.email);
    cy.get('[id="currentAddress"]')
      .type(this.userData.currentAddress)
      .should("have.value", this.userData.currentAddress);
    cy.get('[id="permanentAddress"]')
      .type(this.userData.permanentAddress)
      .should("have.value", this.userData.permanentAddress);
      // cy.get('input[placeholder="Full Name"]')
  });
});

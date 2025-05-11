/// <reference types="Cypress"/>
describe("test", function () {
  // beforeEach(()=>{
  //     cy.fixture("TextBoxData").as("data");

  // });

  it("test Home Page", function () {
    cy.visit("https://www.snapptrip.com/");
    cy.get('[aria-label="پرواز داخلی"]').click();

    cy.get('input[placeholder="مبدا"').click();
  });
});

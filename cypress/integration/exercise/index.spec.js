/* global cy:false */

describe("Pairing Exercise - Cypress", () => {
  it("should load the app", () => {
    cy.visit("/");
  });

  it(`should Verify the number of buttons present are correct`, () => {
    cy.get('button[data-e2e-test^="space-button-"]').should("have.length", 3);
  });

  it(`should Verify the correct space is initially loaded`, () => {

    verifyCoorectSpaceContents("5148448", 1,2);
    cy.get(`button[data-e2e-test="space-button-2"]`).click();
    verifyCoorectSpaceContents("5148457", 2,2);
  });


  function verifyCoorectSpaceContents  (storageSum, noUsers, noImgs){

     cy.get(`a`).should("contain", storageSum);
     cy.get('div.user').should('have.length', noUsers + 1);
     cy.get('div.images').children().should('have.length', noImgs);

  }


});

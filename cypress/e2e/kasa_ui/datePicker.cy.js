/// <reference types="cypress" />
const commonSteps = require("../steps/commonSteps")

context('Home page and date picker is visible', () => {
  beforeEach(() => {
    cy.visit('https://kasa.com')
    cy.get('#full-screen-hero-check-in-input').click()
  })

  it('User is not able to choose past dates using the date picker', () => {
    var day = commonSteps.getRandomPastDay()
    
    cy.get('div[class="asd__month"]').first().within(() => {
      cy.get('button').contains(day).should('have.attr', 'disabled')
    })
  })
})
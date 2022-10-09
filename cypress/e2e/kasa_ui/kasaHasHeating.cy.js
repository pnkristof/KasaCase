/// <reference types="cypress" />
const commonSteps = require("../steps/commonSteps")

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false
})
context('Home page is visible', () => {
  beforeEach(() => {
    cy.visit('https://kasa.com')
  })

  it('Selected Kasa has Heating in the amenities list', () => {
    commonSteps.searchFor("Denver, CO", "11/01/2022", "11/02/2022")
    cy.get('ul[class="list-page__content-list list-reset"]', {timeout: 5000}).first().within(() => {
      cy.get('div[class=recommended-room-type__inner-wrapper]').within(()=>{
        cy.get('a').contains("View details").click()
      })
    })
    commonSteps.checkForBasicAmenity('Heating')
  })
})
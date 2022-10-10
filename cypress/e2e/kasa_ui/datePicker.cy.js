/// <reference types="cypress" />

const home = require("../pages/home.page")

context('Home page and date picker is visible', () => {
  beforeEach(() => {
    cy.visit('https://kasa.com')
    cy.get('#full-screen-hero-check-in-input').click()
  })

  it('User is not able to choose past dates using the date picker', () => {
    home.checkPastDayAvailability()
  })
})
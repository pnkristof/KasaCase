/// <reference types="cypress" />
const commonSteps = require("../steps/commonSteps")

context('Home page is visible', () => {
    beforeEach(() => {
      cy.visit('https://kasa.com')
    })

    it('User is not able to book Kasa for one night stay', () => {
      commonSteps.searchFor("Austin, TX", "11/01/2022", "11/02/2022")
      cy.wait(4500)
      commonSteps.checkIfResultAreBookable(false)
      commonSteps.startNewSearchFor("San Francisco, CA", "12/01/2022", "12/02/2022")
      cy.wait(4500)
      commonSteps.checkIfResultAreBookable(false)
      commonSteps.startNewSearchFor("Seattle, WA", "01/01/2023", "01/02/2023")
      commonSteps.checkIfResultAreBookable(false)
    })
})
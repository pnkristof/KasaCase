/// <reference types="cypress" />
const commonSteps = require("../steps/commonSteps")

context('Single Night Stay', () => {
    beforeEach(() => {
      cy.visit('https://kasa.com')
    })

    it('Look for Austin, TX', () => {
      commonSteps.searchFor("Austin, TX", "11/01/2022", "11/02/2022")
      cy.wait(4500)
      commonSteps.checkIfResultAreBookable(false)

    })
})
const utils = require("../utils")

var url = "https://kasa.com/"

var searchWidget = '#search-widget'
  var locationInput = '#full-screen-hero-search-input'
  var checkInInput = '#full-screen-hero-check-in-input'
  var checkOutInput = '#full-screen-hero-check-out-input'
  var submit = 'button[type="submit"]'
  var datePickerMonths = 'div[class="asd__month"]'

function searchFor(location, checkIn, checkOut, delay = 4500){
  cy.get(searchWidget).within(() => {
    cy.get(locationInput)
    .clear()
    .click()
    .type(`${location}{enter}`)
    cy.get(checkInInput)
    .clear()
    .type(checkIn)
    cy.get(checkOutInput)
    .clear()
    .type(checkOut)
    cy.get(submit)
    .click()
  })
  cy.wait(delay)
}

function startNewSearch(location, checkIn, checkOut, delay = 4500){
  cy.visit(url)
  searchFor(location, checkIn, checkOut, delay)
}

function checkPastDayAvailability(){
  if(utils.isFirstDayOfTheMonth()){  
    cy.get('button[aria-label="Move backward to switch to the previous month."]').click()
  }
  
  var day = utils.getRandomPastDay()

  cy.get(datePickerMonths).first().within(() => {
    cy.get('button').contains(day).should('have.attr', 'disabled')
  })
}

module.exports = {
  url,
  searchFor,
  startNewSearch,
  checkPastDayAvailability
};

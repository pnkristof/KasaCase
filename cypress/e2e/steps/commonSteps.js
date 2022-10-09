const dayjs = require('dayjs')

function searchFor(location, checkIn, checkOut){
  cy.get('#full-screen-hero-search-input')
    .clear()
    .click()
    .type(`${location}{enter}`)
  cy.get('#full-screen-hero-check-in-input')
    .clear()
    .type(checkIn)
  cy.get('#full-screen-hero-check-out-input')
    .clear()
    .type(checkOut)
  cy.get('#search-widget').contains('Search').click()
}

function startNewSearchFor(location, checkIn, checkOut){
  cy.get('#nav-search-input')
    .click()
    .clear()
    .type(`${location}{enter}`)
  cy.get('#nav-check-in-input')
    .clear()
    .type(checkIn)
  cy.get('#nav-check-out-input')
    .clear()
    .type(checkOut)
  cy.get('button[type="submit"]').contains('Search').click()
}

function checkIfResultAreBookable(expectation){
  var results = 
  cy.get('ul[class="list-page__content-list list-reset"]').children().each((element) => {
    cy.wrap(element).within(() => {
      if(element.hasClass('mb:24-rem property-card')){
        if(expectation){
          cy.get('div[class="recommended-room-type"]').should('exist')
        }
        else{
          cy.get('div[class="recommended-room-type"]').should('not.exist')
        }
      }
    })
  })
}

function getRandomPastDay(){
  if(dayjs().format('D') > 1){
    return Math.floor(Math.random() * (dayjs().format('D') - 2)) + 1
  }
  else{
    cy.get('button[aria-label="Move backward to switch to the previous month."]').click()
    return Math.floor(Math.random() * 28) + 1
  }
}

module.exports = {
    searchFor,
    startNewSearchFor,
    checkIfResultAreBookable,
    getRandomPastDay
};


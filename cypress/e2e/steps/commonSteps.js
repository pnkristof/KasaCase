function searchFor(location, checkIn, checkOut){
  cy.get('#full-screen-hero-search-input')
    .click()
    .type(`${location}{enter}`)
  cy.get('#full-screen-hero-check-in-input')
    .type(checkIn)
  cy.get('#full-screen-hero-check-out-input')
    .type(checkOut)
  cy.get('#search-widget').contains('Search').click()
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

module.exports = {
    searchFor,
    checkIfResultAreBookable
};
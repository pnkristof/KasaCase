var locationInput = '#nav-search-input'
var checkInInput = '#nav-check-in-input'
var checkOutInput = '#nav-check-out-input'
var submit = 'button[type="submit"]'

var resultList = 'ul[class="list-page__content-list list-reset"]'

var recommendedRoomType = 'div[class=recommended-room-type__inner-wrapper]'

function searchFor(location, checkIn, checkOut, delay = 4500){
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
  cy.wait(delay)
}

function checkIfAllBookable(expectation){
  cy.get(resultList).children().each((element) => {
    cy.wrap(element).within(() => {
      if(isKasa(element)){
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

function isKasa(element){
  return element.hasClass('mb:24-rem property-card')
}

// TODO: would be nice to check details by index
function viewFirstPropertyDetails(){
  cy.get(resultList, {timeout: 5000}).first().within(() => {
    cy.get(recommendedRoomType).within(() => {
      cy.get('a').contains("View details").click()
    })
  })
}

module.exports = {
  searchFor,
  checkIfAllBookable,
  viewFirstPropertyDetails
};
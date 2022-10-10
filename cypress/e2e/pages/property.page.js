function checkForAmenity(type, amenity){
  cy.get(`ul[aria-labelledby="${type}"]`).within(() => {
    cy.get('li').contains(amenity).should('exist')
  })
}

module.exports = {
  checkForAmenity
};
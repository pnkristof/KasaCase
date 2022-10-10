var method = 'GET'
var endpoint = 'https://api.punkapi.com/v2/beers'

function checkBeersForHop(query = '', hop, quantity, unit){
  cy.log("Sending GET /beers request with query \'" + query + "\'")
  
  cy.request({
    method: method,
    url: endpoint + query,
  }).then( ({ body }) => {
    cy.log(`Checking ${body.length} beers for ${hop} hop with ${quantity} ${unit}`)
    validateBeers(body)
    checkHopQuantity(body, hop, quantity, unit)
  })
}

function checkHopQuantity(beers, hopName, hopQuantity, unit){
  beers.forEach((beer) =>{
    beer.ingredients.hops.forEach((hop) => {
      if(hop.name == hopName){
        expect(hop.amount.value).to.equal(hopQuantity)
        expect(hop.amount.unit).to.equal(unit)
      }
    })
  })
}

function validateBeers(beers){
  // a valid beer should have a non-empty description and an ibu measured with number
  beers.forEach((beer) => {
    cy.wrap(beer.description.length).should('be.gt', 0)
    expect(typeof(beer.ibu)).to.eq(typeof(1))
  })
}

module.exports = {
  checkBeersForHop
}
var method = 'GET'
var endpoint = 'https://api.punkapi.com/v2/beers'

function getBeers(query = ''){
  cy.log("Sending GET /beers request with query \'" + query + "\'")
  
  cy.request({
    method: method,
    url: endpoint + query,
  })
}

module.exports = {
  method,
  endpoint
}
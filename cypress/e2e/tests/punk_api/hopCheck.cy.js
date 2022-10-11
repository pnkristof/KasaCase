/// <reference types="cypress" />

const getBeers = require('../../requests/getBeers')
const beerAssertions = require('../../requests/beerAssertions')

context('punk api', () => {
  it('Wyeast 3522 - Belgian Ardennes yeast beer with Tomahawk hop contains 12.5 grams of Magnum hops', () => {
    cy.request({
      method: getBeers.method,
      url: getBeers.endpoint + '?yeast=Wyeast_3522_-_Belgian_Ardennes™&hops=Tomahawk',
    }).then(({body}) => {
      beerAssertions.checkYeast(body, 'Wyeast 3522 - Belgian Ardennes™', true)
      beerAssertions.validateBeers(body)
      beerAssertions.checkHopQuantity(body, 'Magnum', 12.5, 'grams')
    })
  })

  it('American Ale yeast beer with Chinook hop is recommended with cheese', () => {
    cy.request({
      method: getBeers.method,
      url: getBeers.endpoint + '?yeast=American_Ale&hops=Chinook'
    }).then(({body}) => {
      beerAssertions.checkYeast(body, 'American Ale', false)
      beerAssertions.validateBeers(body)
      beerAssertions.checkHopQuantity(body, 'Magnum', 12.5, 'grams')
      beerAssertions.checkFoodRecommendation(body, 'cheese', false)
      beerAssertions.cheeckBrewersTip(body, 'bourbon', false)
    })
  })
})
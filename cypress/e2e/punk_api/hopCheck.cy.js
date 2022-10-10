/// <reference types="cypress" />

const getBeers = require('../requests/getBeers')

context('', () => {
  it('Wyeast 3522 - Belgian Ardennes yeast beer with Tomahawk hop contains 12.5 grams of Magnum hops', () => {
    getBeers.checkBeersForHop('?yeast=Wyeast%203522%20-%20Belgian%20Ardennes&hops=Tomahawk', 'Magnum', 12.5, "grams")
  })
})

const utils = require("../utils")

// a valid beer should have a non-empty description and an ibu measured with number
function validateBeers(beers){
  cy.log(`Validating ${beers.length} beers based on description existence and ibu`)
  beers.forEach((beer) => {
    cy.wrap(beer.description.length).should('be.gt', 0)
    expect(typeof(beer.ibu)).to.eq(typeof(1))
  })
}

function checkYeast(beers, yeast, exactMatch){
  cy.log(`Checking ${beers.length} beers for "${yeast}" yeast`)

  beers.forEach((beer) =>{
    if(exactMatch){
      expect(beer.ingredients.yeast).to.equal(yeast)
    }
    else{
      expect(beer.ingredients.yeast).contain(yeast)
    }
  })
}

function checkHopQuantity(beers, hopName, hopQuantity, unit){
  cy.log(`Checking ${beers.length} beers for "${hopName}" hop with ${hopQuantity} ${unit} value`)

  beers.forEach((beer) =>{
    beer.ingredients.hops.forEach((hop) => {
      if(hop.name == hopName){
        expect(hop.amount.value).to.equal(hopQuantity)
        expect(hop.amount.unit).to.equal(unit)
      }
    })
  })
}

function checkFoodRecommendation(beers, food){
  cy.log(`Checking ${beers.length} beers for "${food}" as food recommendation`)

  beers.forEach((beer) => {
    if(!utils.arrayContainsString(beer.food_pairing, food)){
      throw new Error(`Beer ${beer.name} (id ${beer.id}) does not contain ${food} as food recommendation`)
    }
  })
}

function cheeckBrewersTip(beers, tip, exactMatch){
  cy.log(`Checking ${beers.length} beers for "${tip}" as brewers tip`)

  beers.forEach((beer) => {
    if(exactMatch){
      expect(beer.brewers_tips).to.equal(tip)
    }
    else{
      expect(beer.brewers_tips).contain(tip)
    }
  })
}

module.exports = {
  checkHopQuantity,
  checkYeast,
  validateBeers,
  checkFoodRecommendation,
  cheeckBrewersTip
}
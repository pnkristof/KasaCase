/// <reference types="cypress" />

import searchData from '../../fixtures/example.json'

const home = require("../pages/home.page")
const results = require("../pages/results.page")
const property = require("../pages/property.page")

context('Home page is visible', () => {
  beforeEach(() => {
    cy.visit('https://kasa.com')
  })

  it('Selected Kasa has Heating in the amenities list', () => {
    home.searchFor(searchData.bookingData[0].location, searchData.bookingData[0].checkIn, searchData.bookingData[0].checkOut)
    results.viewFirstPropertyDetails()
    property.checkForAmenity("basics", "Heating")
    home.startNewSearch(searchData.bookingData[1].location, searchData.bookingData[1].checkIn, searchData.bookingData[1].checkOut)
    results.viewFirstPropertyDetails()
    property.checkForAmenity("basics", "Heating")
    home.startNewSearch(searchData.bookingData[2].location, searchData.bookingData[2].checkIn, searchData.bookingData[2].checkOut)
    results.viewFirstPropertyDetails()
    property.checkForAmenity("basics", "Heating")
  })
})
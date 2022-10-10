/// <reference types="cypress" />

import searchData from '../../fixtures/example.json'

const home = require("../pages/home.page")
const results = require("../pages/results.page")

context('Home page is visible', () => {
    beforeEach(() => {
      cy.visit(home.url)
    })

    it('User is not able to book Kasa for one night stay', () => {
      home.searchFor(searchData.bookingData[0].location, searchData.bookingData[0].checkIn, searchData.bookingData[0].checkOut)
      results.checkIfAllBookable(false)
      results.searchFor(searchData.bookingData[1].location, searchData.bookingData[1].checkIn, searchData.bookingData[1].checkOut)
      results.checkIfAllBookable(false)
      results.searchFor(searchData.bookingData[2].location, searchData.bookingData[2].checkIn, searchData.bookingData[2].checkOut)
      results.checkIfAllBookable(false)
    })
})
const dayjs = require('dayjs')

function getRandomPastDay(){
  if(isFirstDayOfTheMonth){
    return Math.floor(Math.random() * (dayjs().format('D') - 2)) + 1
  }
  else{
    cy.get('button[aria-label="Move backward to switch to the previous month."]').click()
    return Math.floor(Math.random() * 28) + 1
  }
}

function isFirstDayOfTheMonth(){
  if(dayjs().format('D') > 1){
    return false
  }
  return true
}
module.exports = {
    getRandomPastDay,
    isFirstDayOfTheMonth
};
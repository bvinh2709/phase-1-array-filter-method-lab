// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(array, name) {
    const driverList = array.filter(element => element.toLowerCase() === name.toLowerCase())
    console.log(driverList)
    return driverList
}
findMatching(drivers, "Bobby")


function fuzzyMatch(array, name) {
    const driverList = array.filter(element => element[0] + element[1] === name)
    console.log(driverList)
    return driverList
}
fuzzyMatch(drivers, "Sa")

const driversObj = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function matchName (array, name) {
    const driverList = array.filter(element => element.name === "Bobby")
    console.log(driverList)
    return driverList
}
matchName(driversObj, "Bobby")
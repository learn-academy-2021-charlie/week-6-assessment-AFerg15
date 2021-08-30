// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their names capitalized.

// a) Create a test with an expect statement using the variable provided.

// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is a president of the galaxy.", "Arthur Dent is a radio employee."]

//create a function 
//parameter 
  //array of objects
//returns
  //sentence about each person
  //names capitalized

describe("dontPanic", () => {
  it("takes in an array of objects and returns an array with a sentence about each person with their names capitalized", () => {
    expect(dontPanic(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is a president of the galaxy.", "Arthur Dent is a radio employee."])
  
  })
})
var people = [
  { name: "ford prefect", occupation: "hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "radio employee" }
]

// b) Create the function that makes the test pass.

// //use .map to map over array creating string 
// const dontPanic = people.map((person) => {
//   let theMice = person.name + ' is a ' + person.occupation
//   return theMice.toUpperCase()
// })

// console.log(dontPanic)
//need to use .split + substr but can't get the syntax straight
  // ---> [
//   'FORD PREFECT IS A HITCHHIKER',
//   'ZAPHOD BEEBLEBROX IS A PRESIDENT OF THE GALAXY',
//   'ARTHUR DENT IS A RADIO EMPLOYEE'
// ]


const dontPanic = (array) => { 
  //create an empty array to hold  
let towel = []
// for loop to iterate through
for (let i=0; i<array.length; i++){
  //.split to split into array of characters
let theMice = array[i].name.split(" ")
//[j] for index, for loop to iterate
  for (let j=0; j<theMice.length; j++){
  //character at the 0th index, toUpperCase, substr with 1 for index of second character  
    theMice[j] = theMice[j][0].toUpperCase() + theMice[j].substr(1)
  }
//join to restructure string
  theMice = theMice.join(" ")
//.push to push new uppercased values into string
  towel.push(`${theMice} is a ${array[i].occupation}.`)
}
return towel
}
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.
describe("remainders", () => {
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
    expect(remainders(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(remainders(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

var hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
var hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

// b) Create the function that makes the test pass.

// //create a function with array as parameter
// // use .filter to return only numbers
// // use typeof to evaluate datatype 
// // use .map and % to get remainders
const remainders = (array) => { 
  return array.filter((x) => typeof (x) === 'number').map((x) => { return x % 3})
}
// const remainders = hodgepodge2.filter((x) => typeof (x) === 'number').map((x) => { return x % 3})
// console.log(remainders(hodgepodge1))

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.
describe("cubeIt", () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
    expect(cubeIt(cubeAndSum1)).toEqual(99)
    expect(cubeIt(cubeAndSum2)).toEqual(1125)
  })
})

var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

// b) Create the function that makes the test pass.
//create a function
//parameter - array
//return sum of all nums cubed
//process
  //use .map to **3 values
  // const cubeIt = (array) => {return array.map((x) => {return x **3})}
  // console.log(cubeIt(cubeAndSum2))
  //^^^ read the problem amanda. smh.
    //use .reduce to sum all nums and **3 result.
  const cubeIt = (array) => {return array.map((x) => {return x**3}).reduce((a,b) => a + b, 0)}
    //!!! I think it's finally starting to click!
  // Test Suites: 1 passed, 1 total
  // Tests:       3 passed, 3 total
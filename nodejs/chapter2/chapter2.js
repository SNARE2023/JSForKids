// declare an integer variable
var num1 = 12

// declare another variable num2 that will evenly divide num1
var num2 = 6

// divide num1 by num2 and add 3 to it
var num3 = num1 / num2 + 3
console.log(num3)

// declar two string variables
var greeting = "Hi "
var myName = "Filler ;)"

// concatenate them and assign it to a third string variable
var theFullGreeting = greeting + myName
console.log(theFullGreeting)

// print the 4th character in the third string variable
console.log(theFullGreeting.slice(3, 4))

// how do you print only the winky face?
console.log(theFullGreeting.slice(10))

// print only LLER from the below variable
var myName = "FILLER_STRING"
console.log("get me the 4 characters from the 3rd character onwards: " + myName.slice(2, 6))

// convert myName to lowercase and printinf it
var myNewName = myName.toLowerCase()
console.log("my name is lower case: " + myNewName)

// print the length of the string myName
var theLengthOfMyName = myName.length
console.log("length of my name: " + theLengthOfMyName)

// declare boolean variable
var iAmNotAnAirHead = false
console.log("Am i an airhead?: " + iAmNotAnAirHead)

// check if a string var which has the value 5 
// is equal to num var which has the value 5
var str = "5"
var number = 5
var boolFact = number == str
console.log("Is 5 and \"5\" the same? when we use '==': " + boolFact)
boolFact = number === str
console.log("Is 5 and \"5\" the same? when we use '===': " + boolFact)

// write an example code that uses + & = in a calculation
var newNum = 2
var newNum2 = 10
var theBiggerNum = newNum + newNum2
console.log("newNum + newNum2: " + theBiggerNum)
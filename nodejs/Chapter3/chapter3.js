

// declare an array of numbers that has 5 numbers
var myNumArr = [1, 2, 3, 4, 5]


// display the value of the 1st element
console.log(myNumArr[0])


// change the value of the 1st element
myNumArr[0] = 100


// display the value of the 1st element again
console.log(myNumArr[0])


// display the value of the 3rd element
console.log(myNumArr[4])

// display the value of the 2nd index item
console.log(myNumArr[2])


// add one more element to the array in the 9th index
myNumArr[8] = 9
console.log(myNumArr[8])

// print the array; comment you observation
console.log(myNumArr)
// It lists most of the values and leaves a few unidentifind
// set the value of the 2nd element to 10
myNumArr[1] = 10
console.log(myNumArr[1])


// use the correct operators to show the 2nd element is:
// same as "10"
// not same as "10"
console.log(myNumArr[1] === "10")
console.log(myNumArr[1] == 10)

// declare a variable myArray
// assign string hello to index 0
// assign number 100 to index 1
// assign an array of 5 numbers to index 2
// assign a string as the last element of inner array
var myArray = ["hello", 100, [1, 2, 3, 4, 5, "goodbye"]];

// display the length of myArray
console.log("myArray length: " + myArray.length)

// fetch the value of the 3 element of the inner array
console.log(myArray[2][2])

// pop the last element of myArray and assign it to a var called thar
var thar = myArray.pop([2])
console.log("pop the last element of myArray and assign it to a var called thar: " + thar)

// add string "the end" to the end of thar
thar.push("The end")
console.log(thar)


// add string "the beginning" to the front of thar
thar.unshift("The beginning")
console.log("add string \"the beginning\" to the front of thar: " + thar)

// remove the first element of myArray and add it to the beginning of thar
var tempvar = myArray.shift()
thar.unshift(tempvar)
console.log(thar)


// what is the length of myArray now?
console.log(myArray.length)

// what is the length of thar now?
console.log(thar.length)


// create 3 string arrays - stars, planets and satellites
var stars = []
var planets = []
var satellites = []


// star array should have our sun and the nearest star to us
stars[0] = "The Sun"
stars[1] = " Alpha Centauri."

// planet array should have the first three planets
planets[0] = "Mercury."
planets[1] = "Venus."
planets[2] = "Earth."

// satellite array should have the satellites of the first three planets
satellites[0] = "The Moon."

// concat the above three arrays and find its length
var spaceObjects = satellites.concat(planets, stars)
console.log(spaceObjects.length + "The lenght of the mashup array")

// check to see if venus is present in the concatenated array
console.log(spaceObjects.indexOf(planets[1]))
//
console.log(spaceObjects)

// check to see if mars is present in the concatenated array
console.log(spaceObjects.indexOf("mars"))

// join the stars array with " * "
console.log(stars.join("     **     "))

// create a stack as follows:
// top most element: slice of bread
// next element butter
// next element tomatoes
// next element boiled egg slices
// next element humus
// bottom element: slice of bread
// with the above stack construct the recipe of making a sandwich and display it as a string
console.log("A bear's guide to making the ultimate snack..")
console.log("        ")
console.log("        ")
var sandwichToppings = ["butter", "cheese", "tomato", "boiled eggs", "lettuce", "humus", "bread."]
var sandwich = sandwichToppings.join(" and then ")
console.log ("First the bread and then " + sandwich)
console.log("              ")
console.log("              ")
console.log("And that's how you make a egg & cheesey sandwich.")
console.log("\n")

// Make an insult generator.
var randomBodyParts = ["face", "nose", "bum"];
var randomAdjectives = ["smelly", "dumb", "boring"];
var randomWords = ["Fly", "Maggot", "Slug",];
var randomBodyPart = randomBodyParts[Math.floor(Math.random() *3)];
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
var randomWord = randomWords[Math.floor(Math.random() * 3)];
var randomInsult = "Your " + randomBodyPart + " is like a " + randomAdjective + " " + randomWord + "!!!";
console.log(randomInsult)
console.log("\n")
// make a food generator.

var randomCheese = ["Mozzarella ", "Cheddar ", "Elemental "];
var randomBase = ["Rye ", "Sourdough ", "wholemeal "];
var randomToppings = ["Mushrooms ", "Pineapple", "Olives",];
var secondRandomToppings = ["Salami", "Basil", "Eggplant"]
var randomCheese = randomCheese[Math.floor(Math.random() *3)];
var randomBase = randomBase[Math.floor(Math.random() * 3)];
var randomToppings = randomToppings[Math.floor(Math.random() * 3)];
var secondRandomToppings = secondRandomToppings[Math.floor(Math.random() *3)];
var randomPizza = "Your  pizza contains " + randomCheese +" "+ randomBase + " "+ randomToppings +" "+ secondRandomToppings + "!    :). Enjoy.";
console.log(randomPizza)







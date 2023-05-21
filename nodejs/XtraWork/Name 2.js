const SIZE = 10

function getRandomNumber(){
    return Math.ceil(Math.random() * SIZE)
}

var randNum = getRandomNumber()
console.log ("The random number pulled out of my hat is: " + randNum)
for (var loopCount=0; loopCount<randNum; loopCount++){
    console.log("loops" + loopCount + "counted")
}
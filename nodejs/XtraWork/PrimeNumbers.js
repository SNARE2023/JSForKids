
const SIZE = 1000

function getRandomNumber() {
    return Math.ceil(Math.random() * SIZE)
}

var randNum = getRandomNumber()
console.log("randomnumber generated is: " + randNum)
var newVar = 1
while (newVar <= randNum) {
    // console.log(newVar)
    if (randNum % newVar == 0 && newVar != 1 && randNum != newVar) {
        console.log("Not prime :(")
        break
    }
    newVar++
}



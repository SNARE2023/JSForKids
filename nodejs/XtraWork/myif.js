
const SIZE = 100

function getRandomNumber(){
    return Math.ceil(Math.random() * SIZE)
}

var randNum = getRandomNumber()
console.log(randNum)
if (randNum %2 == 0){
    console.log("Hoora, it's even!!.")
}else{
    console.log("Yipeee, it's odd!!..")
}
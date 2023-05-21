var ourFristFunction = function () {
    console.log("HELLO");
};
ourFristFunction();
//\\
console.log("border")
//\\
var drawCats = function (howmanytimes) {
    for (var i = 0; i < howmanytimes; i++) {
        console.log("=^-.-^=")
    }
}
drawCats(9)
//\\
console.log("border")
//\\
var printXnumTimes = function (whatToDraw, howManyTimes) {
    for (var i = 0; i < howManyTimes; i++) {
        console.log(i + " " + whatToDraw);
    }
};
printXnumTimes("XD", 8);
//\\
console.log("border")
//\\
var double = function (number) {
    return number * 2
};
console.log(double(20))
//\\
console.log("border")
//\\
var triple = function (number) {
    return number * 3
};
console.log(double(20) + triple(9))
//\\
console.log("border")
//\\
var pickrandomWords = function (words) {
    var idx = Math.floor(Math.random() * words.length)
    console.log(idx)
    return words[idx];
};
var randomWords = ["Sus", "Sussy", "Sussyer"]
var pickrandomWords = function (words) {
    var idx = Math.floor(Math.random() * words.length)
    console.log(idx)
    return words[idx];
};
//\\
console.log("border")
//\\
var fifthLetter = function (name) {
    if (name.length < 5 ) {
        console.log("Sorry your name is too short (< 5 letter).")     
        return;
    }
     console.log("the fifth letter in your name is " + name[4]);
};
fifthLetter("samusa")


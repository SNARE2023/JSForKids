var num = 92
var numII = 92
var areNumsSame = function (numII, num) {
    if (numII !== num) {
        console.log("CAR")
    } else {
        console.log("VAN")
    }
}
areNumsSame(num, numII)
//\\
var Array = [1, 2, 3, 4, 5, 6];
for (var i = 0; i < Array.length; i++) {
    console.log(Array[i]);
}
//\\
var suus = [5, 2];
var pong = [3, 8];

var arraycheck = function (suus, pong) {
    var diff = false
    for (var ui = 0; ui < suus.length; ui++) {
        for (var ei = 0; ei < pong.length; ei++) {
            if (suus[ui] === pong[ei]) {
                console.log("Y")
            } else {
                console.log("N")
                diff = true
                break
            }
        }
        if (diff == true) {
            break
        }
    }
}

arraycheck(suus, pong);




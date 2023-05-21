

var idxGen = function (arraySize) {
    var idx = Math.floor(Math.random() * arraySize)
    return idx
};

var mainFunc = function () {
    var names = ["Thachi", "koochi", "thini", "galatay madi", "poop madi"]
    var gidx = idxGen(names.length)
    console.log(names[gidx]);
};
mainFunc()



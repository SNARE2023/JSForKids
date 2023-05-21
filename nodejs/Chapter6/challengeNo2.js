var alphabet = "abcdefghijklmnopqrstuvwxyz";
var randomString = "";
var stringLength = 6;

for (var i = 0; i < stringLength; i++) {
  randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
}

console.log(randomString);
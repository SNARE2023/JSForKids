var dog = {
    name: "Pancake",
    legs: 4,
    age: 10,
    isAwesome: true
   };
   console.log(dog)
   //
   dog.bark = function () {
     console.log("Woof woof! My name is " + this.name + "!");
    };
    dog.bark();
    
    //

    var speak = function () {
        console.log(this.sound + "! My name is " + this.name + " THE GOAT!");
       };
    var cat = {
        sound: " GET REKT BOZO",
        name: "Mittens",
        isGamer: true,
       speak: speak
       };
       cat.speak();
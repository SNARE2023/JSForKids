// create and display the value of the student's name
var student = {
 "Name": "Vihaan",
 "Age": 11,
 "Favourite colour": "Lime",
 "Height": "4ft 9inch",
 "Zodiac": "Pisces"
 }; 
console.log("The name of the student is " + student["Name"])
console.log(student)

/*create an empty object and add values to the fields specified above 
using key-value pair notation*/
var computer = {}
computer["CPU"] =  "AMD Ryzen 9 16x",
computer["GPU"] =  "Nvidia RTX 3050",
computer["RAM"] =  "SODIMM 32 GB DDR5",
computer["Storage"] =  "2TB SATA SSD",
computer["Power"] =  "Red Flacon 3300x 550 watts"
console.log(computer)

var lureModule = {}
lureModule["setName"] = "Pokemon GO limited."
lureModule["cardNumber"] = "67."
lureModule["setNumber"] = "78."
lureModule["cardName"] = "Lure Module."
lureModule["gameFunction"] = "All players show the top 3 cards of thier deck. If there are any pokemon put them in your hand."
lureModule["className"] = "Trainer."
//no.2
var pokemonCards = [
    {
        name: "Magikarp", 
        hitPionts: "30", 
        evolutionStage: "Basic",
        className: "pokemon",
        attacks: [{name: "Lively Grouping", 
                   damage: 0, 
                   energyCost: "1 colorless"}, 
                  {name: "Raging Fin", 
                   damage: 10, 
                   rule: "does 30 more damage for each magikarp & gyarados \
                       in your discard pile.", 
                   energyCost: "2 colorless"}],
        weakness: "Electric type",
        weaknessDamage: "Double damage",
        resisitance: "null",
        retreatCost: "1 colorless energy"
    },
    {
        name: "Fairy Energy",
        gameFunction: "Power attacks that use fairy enrgy or not fully \
        shield fairy type pokemon from attacks",
        className: "energy",
        secondGameFunction: "Powers up a retreat",
        isSpecialEnergy: "False"
     }
]
//            
console.log(pokemonCards[0].attacks[1].damage)


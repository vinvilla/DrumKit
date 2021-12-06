
//
// //constructor function
// function BellBoy(name, age, hasWorkPermit, languages) {
//   this.name = name;
//   this.age = age;
//   this.hasWorkPermit = hasWorkPermit;
//   this.languages = languages;
//   this.moveSuitCase: function () {
//     alert ("May I take your suitcase?");
//     pickUpSuitcase();
//     move();
//   }
// }
//
// // Initialize Object
// var bellboy1 = new BellBoy("Timmy", 19, true, ["French", "English"]);

//constructor function
function HouseKeeper (yearsOfExperience, name, cleaningRepertoire) {
  this.yearsOfExperience = yearsOfExperience;
  this.name = name;
  this.cleaningRepertoire = cleaningRepertoire;
  this.clean: function () {
    alert ("cleaning in progress");
  }
}

// Initialize Object
var houseKeeper1 = new HouseKeeper(19, "Alice", ["bathroom", "lobby", "bedroom"]);

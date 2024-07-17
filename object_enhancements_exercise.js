// Object Enhancements Exercise:
// In this exercise, you’ll refactor some ES5 code into ES2015. Write your code in the sections with a comment to “Write an ES2015 Version”.

// Same Keys and Values:
// function createInstructor(firstName, lastName){
//   return {
//     firstName: firstName,
//     lastName: lastName
//   }
// }

// Same Keys and Values ES2015:
 function createInstructor(firstName, lastName) {
  return {
    firstName,
    lastName
  }
}


// Computed Property Names:
// var favoriteNumber = 42;
// var instructor = {
//   firstName: "Colt"
// }
// instructor[favoriteNumber] = "That is my favorite!"

// Computed Property Names ES2015:
let favoriteNumber = 42;
const instructor = {
  firstName: 'Colt',
  [favoriteNumber]: 'That is my favorite!'
}


// Object Methods:
// var instructorEx2 = {
//   firstName: "Colt",
//   sayHi: function(){
//     return "Hi!";
//   },
//   sayBye: function(){
//     return this.firstName + " says bye!";
//   }
// }

// Object Methods ES2015:
const instructorEx2 = {
  firstName: 'Colt',
  sayHi() {
    return 'Hi!';
  },
  sayBye() {
    return this.firstName + ' says bye!';
  }
}


// createAnimal function ES2015:

const d = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
// d.bark()  //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
// s.bleet() //"BAAAAaaaa"

function createAnimal(species, verb, sound){
  return {
    species,
    [verb]() {
      return sound;
    }  
  }
}
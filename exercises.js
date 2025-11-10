// =====================================================
// TAMU SHPE JavaScript Practice Exercises
// =====================================================

// =====================================================
// ARROW FUNCTIONS
// =====================================================



// Exercise 1
function sayWelcome(name) {
  console.log("Welcome, " + name + "!");
}
// TODO: convert to arrow function version
// const sayWelcome = ...

sayWelcome("Mark"); // "Welcome, Mark!"

// Exercise 2
// TODO: Write an arrow function called addThree
    //takes a number and returns it plus 3.
const addThree = /* your code here */

console.log(addThree(7)); 


// =====================================================
// TERNARY OPERATORS
// =====================================================

// Exercise 1
const age = 16;
// TODO: Use a ternary to set status to "Adult" or "Minor"
const status1 = /* your code here */
console.log(status1); // "Minor"

// Exercise 2
const temp = 85;
// TODO: If temp >= 80 → "It's hot outside"
    // else → "It's nice outside"
const weatherMessage = /* your code here */
console.log(weatherMessage);







// =====================================================
// OBJECTS (Destructuring + Spread)
// =====================================================

// Exercise 1 — Destructuring
const student = {
  name: "Ana",
  major: "CS",
  year: "Junior"
};
// TODO:
    // 1. Destructure name and year from student
    // 2. Log: "Ana is a Junior"
console.log(/* your message here */);

// Exercise 2 — Spread
const baseMember = { name: "Luis", club: "SHPE", role: "Member" };
// TODO:
    // 1. Create a new object called leader based on baseMember
    // 2. Change role to "Officer" using spread
    // 3. Add a new property: points: 50
    // const leader = ...

console.log(leader);
// Expected: { name: "Luis", club: "SHPE", role: "Officer", points: 50 }







// =====================================================
// MAP
// =====================================================

// Exercise 1
const prices = [5, 10, 15];
// TODO: Use map to create a new array with each price doubled
const doubledPrices = /* your code */
console.log(doubledPrices); 

// Exercise 2
const names = ["Ana", "Luis", "Mark"];
// TODO: Use map to create ["#1 Ana", "#2 Luis", "#3 Mark"]
const numbered = 
console.log(numbered);







// =====================================================
// FILTER
// =====================================================

// Exercise 1
const numbers = [1, 2, 3, 4, 5, 6];
// TODO: Use filter to keep only even numbers
const evenNumbers = /* your code */
console.log(evenNumbers); 

// Exercise 2
const members = [
  { name: "Ana", points: 90 },
  { name: "Luis", points: 40 },
  { name: "Mark", points: 75 }
];
// TODO: Use filter to keep members with points >= 70
const activeMembers = /* your code */
console.log(activeMembers);





// =====================================================
// FINAL CHALLENGE — SHPE POINTS BOARD
// =====================================================

const membersList = [
  { name: "Ana", points: 80 },
  { name: "Luis", points: 40 },
  { name: "Mark", points: 95 }
];

// 1. Write an arrow function addBonus(member)
// that returns a NEW object with +10 points (use spread)
const addBonus = /* your code */

// 2. Create a new array with the bonus applied using map()
const withBonus = /* your code */

// 3. Filter members with points >= 70 → "active" members
const active = /* your code */

// 4. Use map + ternary to create strings:
// "<name> - Status: Gold" if points >= 90
// "<name> - Status: Silver" otherwise
const leaderboard = /* your code */

console.log(leaderboard);
// Example output:
// ["Ana - Status: Silver", "Mark - Status: Gold"]

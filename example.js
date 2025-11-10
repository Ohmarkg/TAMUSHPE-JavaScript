const PrintSomething = (thing) => console.log(thing);

//returning with an arrow function
// () vs {}
const Add = (a, b) => (a + b);

const Subtract = (a, b) => {
  return (a - b);
}

//ternary example
const age = 20;
const canVote = age >= 18 ? "Yes" : "No";
console.log(canVote);

//without ternary
const age2 = 20;
let canVote2;
if (age2 >= 18) {
  canVote2 = "Yes";
} else {
  canVote2 = "No";  
}
console.log(canVote2);


const numbers = [1, 2, 3, 4];
const doubled = numbers.map((n,index) => {
    console.log(`Index: ${index}`);
    return n * 2;
});

console.log(doubled); // [2, 4, 6, 8]

//filter example
const evenNumbers = numbers.filter(n => n % 2 === 0);
console.log(evenNumbers); // [2, 4]
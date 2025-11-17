# TAMUSHPE-JavaScript
We learning some useful things about JavaScript.


## Arrow Functions
The orignal way to make a function in JavaScript was with the `function` keyword and standard declaration.

```JavaScript
function DoSomething () {
    console.log("Something has been done")
}
```

A more common way of creating functions is with the arrow notation! `(params) => rest of function `

```JavaScript
const DoSomething = () => console.log("Something has been done")
```
Passing parameters is perfectly valid as well. 
```JavaScript
const PrintSomething = (thing) => console.log(thing);
PrintSomething("Holy moly");
```
If you want to run any js files use `node example.js` to get output.

### Returning values 
When returning with an arrow functions you have two options , `()` or `{}` with a `return` call

```JavaScript 
const Add = (a, b) => (a + b); //() not needed but good practice

const Subtract = (a, b) => {
  return (a - b);
}
```
## Ternary Operators
`?` otherwise known as the ternary operator is a way to simplify if else chain and reduce code line usage.
### How to use 
`condition ? (truthResponse) : (falseResponse)`. 
If the condition is true , then return the first value (truthResponse) else if condition is false return second value (falseResponse)

```JavaScript
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
console.log(canVote2)
```

## Objects
Objects a data structure containing key value pair , pretty much like a dictionary in python.  
```JavaScript
const student = {
  name: "Mark",
  major: "CS",
  year: "Senior",
  greet() {
    console.log(`Hi, I'm ${this.name}!`);
  },
};

student.greet(); // Hi, I'm Mark!
```
We can grab the values of an object through destructuring 
```JavaScript
const { name, major } = student;
console.log(name, major); // Mark CS
```

We can copy an object properties using the `...` operator. 
```JavaScript
const base = { club: "SHPE", role: "Member" };
const updated = { ...base, role: "App Lead" };

console.log(updated);
// { club: "SHPE", role: "App Lead" }
```
## Map, Filter  
We often have to work with arrays with some form a manipulation or filtering. This is where `map` and `filter` come into play!

### map
`map` applies a passed function to every element in the array and then return a copy of that array 

```JavaScript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(n => n * 2);

console.log(doubled); // [2, 4, 6, 8]
```
The notation inside map look familiar ? Its an arrow function! n will represent each element in numbers.  
If we want access to the index , we can an additional parameter.  
```JavaScript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((n,index) => {
    console.log(`Index: ${index}`);
    return n * 2;
});

console.log(doubled); // [2, 4, 6, 8]
```
## filter

`filter` will select elements from an array based of a specified `condition`. 
```JavaScript
//filter example
const evenNumbers = numbers.filter(n => n % 2 === 0);
console.log(evenNumbers); // [2, 4]
```
## Async Await ,Promises, Fetch 
This topic is a bit more complex so this will be for next time! Unless we have a lot of left over time

## Promises
When building an application we have to make a network request to get more data. `fetch` allows us to get this data through Promises objects. Promises represents values that hasnt been obtained yet but will be eventually , such as a network request.

```JavaScript
const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Everything worked!");
  } else {
    reject("Something went wrong.");
  }
});

myPromise
  .then(message => console.log(message))
  .catch(error => console.error(error));
// Here we make the promise object we holds the promise , then we consume it
// with .then to get the value and do something with it.
// .catch is what we the program does if an error occurs in the promise
```

Most of the time you wont be writing your own promise , you'll be working with promise object obtained from `fetch`.

## Async + Await Version

async and await let us work with Promises using cleaner, more readable syntax.

Key ideas:

Adding async before a function makes it automatically return a Promise.

Using await pauses the function until the Promise resolves.

Inside an async function, we can write asynchronous code that looks synchronous.

Example with fetch:
```JavaScript
async function getData() {
  try {
    // fetch returns a Promise, so we await its value
    const response = await fetch("https://dog.ceo/api/breeds/image/random");

    // response.json() ALSO returns a Promise, so we await that too
    const data = await response.json();

    console.log(data);
  } catch (err) {
    console.error("There was an error:", err);
  }
}
getData();
```

`fetch()` starts a network request and returns a Promise.

`await fetch()` waits for the request to finish before moving on.

response.json() also returns a Promise that resolves to actual data.

We usually need two awaits when using fetch:

// ============================================
// Basic examples: fetch + async/await
// ============================================

// Example 1: Get a user and log their name
async function fetchUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data = await response.json();
    console.log("User name:", data.name);
  } catch (error) {
    console.error("Error fetching user:", error);
  }
}

// Example 2: Get posts and log their titles
async function fetchPostTitles() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    const titles = posts.map(post => post.title);
    console.log("Post titles:", titles.slice(0, 5)); // first 5 titles
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

// Uncomment to test the examples
// fetchUser();
// fetchPostTitles();


// ============================================
// Exercises: fill in the TODOs
// ============================================

// Exercise 1: Fetch a random dog image
// API: https://dog.ceo/api/breeds/image/random
async function getRandomDogImage() {
  try {
    // 1. Use fetch() to call the URL above
    // 2. Await .json() to get the data object
    // 3. Log the image URL (data.message)
    // const response = ...
    // const data = ...
    // console.log("Dog image URL:", ...);

    
  } catch (error) {
    console.error("Error fetching dog image:", error);
  }
}

// Exercise 2: Fetch Pokémon data and log its name and ID
// API example: https://pokeapi.co/api/v2/pokemon/pikachu
async function getPokemon(pokemonName) {
  try {
    // 1. Build the URL using the pokemonName argument
    // 2. Fetch and await the response
    // 3. Await .json()
    // 4. Log something like: "Pikachu has ID 25"
    // const response = ...
    // const data = ...
    // console.log(`${data.name} has ID ${data.id}`);
  } catch (error) {
    console.error("Error fetching pokemon:", error);
  }
}

// Exercise 3: Fetch todos and filter completed ones
// API: https://jsonplaceholder.typicode.com/todos
async function getCompletedTodos() {
  try {
    // 1. Fetch todos from the URL above
    // 2. Await .json() to get the array
    // 3. Use .filter() to keep only completed todos
    // 4. Log the first 5 completed todo titles
    // const response = ...
    // const todos = ...
    // const completed = ...
    // console.log(completed.slice(0, 5));
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
}

// Exercise 4: Combine map, filter, and fetch
// API: https://jsonplaceholder.typicode.com/users
async function getUserEmailsStartingWithC() {
  try {
    // 1. Fetch the users list
    // 2. Await .json()
    // 3. Filter users whose email starts with "c" or "C"
    // 4. Map to just the emails
    // 5. Log the resulting array
    // const response = ...
    // const users = ...
    // const filtered = ...
    // console.log(filtered);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

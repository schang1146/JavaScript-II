// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const peek1 = "a boo!"
const notHiding = () => peek1;
console.log(notHiding()); // found peek1!
const hiding = () => {
    const peek2 = "nobody here!";
}
try {console.log(peek2); // can't find peek2!
}
catch(err) {
  console.log("can't find peek2!");
}

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = (newCounter) => {
  // Return a function that when invoked increments and returns a counter variable.
  return newCounter()
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};

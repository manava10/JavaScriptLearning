// =============================================
// Loops in JavaScript
// =============================================

console.log("=== 1. FOR LOOP ===\n");

// Basic for loop
console.log("Counting from 1 to 5:");
for (let i = 1; i <= 5; i++) {
    console.log(`Count: ${i}`);
}

// For loop with array
console.log("\nIterating through array:");
const fruits = ["apple", "banana", "orange", "mango"];
for (let i = 0; i < fruits.length; i++) {
    console.log(`${i + 1}. ${fruits[i]}`);
}

console.log("\n=== 2. WHILE LOOP ===\n");

console.log("Countdown from 5:");
let countdown = 5;
while (countdown > 0) {
    console.log(countdown);
    countdown--;
}
console.log("Liftoff! 🚀");

console.log("\n=== 3. DO-WHILE LOOP ===\n");

// Executes at least once, even if condition is false
let number = 1;
console.log("Numbers from 1 to 3:");
do {
    console.log(number);
    number++;
} while (number <= 3);

console.log("\n=== 4. FOR...OF LOOP ===\n");

// Best for iterating over arrays
const colors = ["red", "green", "blue"];
console.log("Colors:");
for (const color of colors) {
    console.log(`- ${color}`);
}

// Works with strings too
console.log("\nIterating over string:");
const word = "JavaScript";
for (const char of word) {
    console.log(char);
}

console.log("\n=== 5. FOR...IN LOOP ===\n");

// Best for iterating over object properties
const person = {
    name: "John",
    age: 30,
    city: "New York"
};

console.log("Person details:");
for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}

// Can also be used with arrays (but for...of is preferred)
console.log("\nArray indices:");
const numbers = [10, 20, 30];
for (const index in numbers) {
    console.log(`Index ${index}: ${numbers[index]}`);
}

console.log("\n=== 6. BREAK STATEMENT ===\n");

console.log("Finding first even number:");
const nums = [1, 3, 5, 8, 9, 10];
for (const num of nums) {
    if (num % 2 === 0) {
        console.log(`Found even number: ${num}`);
        break;  // Exit the loop
    }
}

console.log("\n=== 7. CONTINUE STATEMENT ===\n");

console.log("Printing only odd numbers:");
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;  // Skip even numbers
    }
    console.log(i);
}

console.log("\n=== 8. NESTED LOOPS ===\n");

console.log("Multiplication table (1-3):");
for (let i = 1; i <= 3; i++) {
    let row = "";
    for (let j = 1; j <= 3; j++) {
        row += `${i * j}\t`;
    }
    console.log(row);
}

console.log("\n=== 9. ARRAY METHODS (Modern Alternatives) ===\n");

const items = [1, 2, 3, 4, 5];

// forEach - executes a function for each element
console.log("forEach:");
items.forEach((item, index) => {
    console.log(`Index ${index}: ${item}`);
});

// map - creates a new array with transformed elements
console.log("\nmap (double each number):");
const doubled = items.map(item => item * 2);
console.log(doubled);

// filter - creates a new array with elements that pass a test
console.log("\nfilter (only even numbers):");
const evens = items.filter(item => item % 2 === 0);
console.log(evens);

// reduce - reduces array to a single value
console.log("\nreduce (sum of all numbers):");
const sum = items.reduce((total, item) => total + item, 0);
console.log(`Sum: ${sum}`);

console.log("\n=== 10. LOOP PERFORMANCE TIP ===\n");

// Cache array length for better performance
const largeArray = new Array(1000).fill(0);
console.log("Optimized loop with cached length:");

const len = largeArray.length;  // Cache length
let processedCount = 0;
for (let i = 0; i < len; i++) {
    processedCount++;
}
console.log(`Processed ${processedCount} items`);

console.log("\n✅ Loops completed!");

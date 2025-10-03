// =============================================
// Arrays in JavaScript
// =============================================

console.log("=== 1. CREATING ARRAYS ===\n");

// Array literal
const fruits = ["apple", "banana", "orange"];
console.log("Fruits:", fruits);

// Array constructor
const numbers = new Array(1, 2, 3, 4, 5);
console.log("Numbers:", numbers);

// Empty array
const empty = [];
console.log("Empty array:", empty);

// Mixed types (not recommended but possible)
const mixed = [1, "hello", true, null, { name: "John" }];
console.log("Mixed array:", mixed);

console.log("\n=== 2. ACCESSING ARRAY ELEMENTS ===\n");

console.log("First fruit:", fruits[0]);
console.log("Second fruit:", fruits[1]);
console.log("Last fruit:", fruits[fruits.length - 1]);

// Array length
console.log("Array length:", fruits.length);

console.log("\n=== 3. MODIFYING ARRAYS ===\n");

// Adding elements
fruits.push("mango");  // Add to end
console.log("After push:", fruits);

fruits.unshift("strawberry");  // Add to beginning
console.log("After unshift:", fruits);

// Removing elements
const lastFruit = fruits.pop();  // Remove from end
console.log("Removed:", lastFruit);
console.log("After pop:", fruits);

const firstFruit = fruits.shift();  // Remove from beginning
console.log("Removed:", firstFruit);
console.log("After shift:", fruits);

console.log("\n=== 4. ARRAY METHODS - MAP ===\n");

const nums = [1, 2, 3, 4, 5];

// map - transforms each element
const doubled = nums.map(num => num * 2);
console.log("Original:", nums);
console.log("Doubled:", doubled);

const squared = nums.map(num => num ** 2);
console.log("Squared:", squared);

console.log("\n=== 5. ARRAY METHODS - FILTER ===\n");

// filter - keeps elements that pass a test
const evens = nums.filter(num => num % 2 === 0);
console.log("Even numbers:", evens);

const greaterThanThree = nums.filter(num => num > 3);
console.log("Greater than 3:", greaterThanThree);

console.log("\n=== 6. ARRAY METHODS - REDUCE ===\n");

// reduce - reduces array to a single value
const sum = nums.reduce((total, num) => total + num, 0);
console.log("Sum:", sum);

const product = nums.reduce((total, num) => total * num, 1);
console.log("Product:", product);

const max = nums.reduce((max, num) => num > max ? num : max, nums[0]);
console.log("Maximum:", max);

console.log("\n=== 7. ARRAY METHODS - FIND ===\n");

// find - returns first element that matches
const numbers2 = [5, 12, 8, 130, 44];
const found = numbers2.find(num => num > 10);
console.log("First number > 10:", found);

// findIndex - returns index of first match
const foundIndex = numbers2.findIndex(num => num > 10);
console.log("Index of first number > 10:", foundIndex);

console.log("\n=== 8. ARRAY METHODS - SOME & EVERY ===\n");

// some - checks if at least one element passes test
const hasEven = nums.some(num => num % 2 === 0);
console.log("Has even numbers:", hasEven);

// every - checks if all elements pass test
const allPositive = nums.every(num => num > 0);
console.log("All positive:", allPositive);

console.log("\n=== 9. ARRAY METHODS - INCLUDES & INDEXOF ===\n");

const colors = ["red", "green", "blue", "yellow"];

// includes - checks if array contains an element
console.log("Has 'blue':", colors.includes("blue"));
console.log("Has 'purple':", colors.includes("purple"));

// indexOf - returns index of element (or -1)
console.log("Index of 'green':", colors.indexOf("green"));
console.log("Index of 'purple':", colors.indexOf("purple"));

console.log("\n=== 10. ARRAY METHODS - SLICE & SPLICE ===\n");

const letters = ["a", "b", "c", "d", "e"];

// slice - returns a shallow copy of a portion
const sliced = letters.slice(1, 4);  // From index 1 to 3
console.log("Sliced (1-4):", sliced);
console.log("Original unchanged:", letters);

// splice - changes the array by removing/adding elements
const removed = letters.splice(2, 2, "X", "Y");  // Remove 2 from index 2, add X, Y
console.log("Removed:", removed);
console.log("After splice:", letters);

console.log("\n=== 11. ARRAY METHODS - SORT & REVERSE ===\n");

const nums2 = [3, 1, 4, 1, 5, 9, 2, 6];

// sort - sorts array (mutates original)
nums2.sort((a, b) => a - b);  // Ascending
console.log("Sorted ascending:", nums2);

nums2.sort((a, b) => b - a);  // Descending
console.log("Sorted descending:", nums2);

// reverse - reverses array order
const reversed = [1, 2, 3, 4, 5].reverse();
console.log("Reversed:", reversed);

console.log("\n=== 12. ARRAY METHODS - JOIN & CONCAT ===\n");

// join - creates a string from array
const words = ["Hello", "World", "JavaScript"];
const sentence = words.join(" ");
console.log("Joined:", sentence);

// concat - merges arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merged = arr1.concat(arr2);
console.log("Concatenated:", merged);

// Spread operator (modern way)
const merged2 = [...arr1, ...arr2];
console.log("Spread merge:", merged2);

console.log("\n=== 13. ARRAY DESTRUCTURING ===\n");

const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log("First:", first);
console.log("Second:", second);
console.log("Rest:", rest);

// Skipping elements
const [a, , c] = [10, 20, 30];
console.log("a:", a, "c:", c);

console.log("\n=== 14. MULTIDIMENSIONAL ARRAYS ===\n");

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("Matrix:");
for (const row of matrix) {
    console.log(row);
}

console.log("Element at [1][2]:", matrix[1][2]);

console.log("\n=== 15. ARRAY ITERATION ===\n");

const items = ["apple", "banana", "cherry"];

// forEach
console.log("forEach:");
items.forEach((item, index) => {
    console.log(`${index}: ${item}`);
});

// for...of
console.log("\nfor...of:");
for (const item of items) {
    console.log(item);
}

// for loop
console.log("\nfor loop:");
for (let i = 0; i < items.length; i++) {
    console.log(`${i}: ${items[i]}`);
}

console.log("\n✅ Arrays completed!");

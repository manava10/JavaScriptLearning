// =============================================
// Functions in JavaScript
// =============================================

console.log("=== 1. FUNCTION DECLARATION ===\n");

// Traditional function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Alice"));
console.log(greet("Bob"));

// Function with multiple parameters
function add(a, b) {
    return a + b;
}

console.log("5 + 3 =", add(5, 3));

console.log("\n=== 2. FUNCTION EXPRESSION ===\n");

// Anonymous function assigned to a variable
const multiply = function(a, b) {
    return a * b;
};

console.log("4 * 6 =", multiply(4, 6));

// Named function expression
const subtract = function sub(a, b) {
    return a - b;
};

console.log("10 - 4 =", subtract(10, 4));

console.log("\n=== 3. ARROW FUNCTIONS (ES6) ===\n");

// Basic arrow function
const square = (num) => {
    return num * num;
};

console.log("Square of 5:", square(5));

// Concise arrow function (implicit return)
const cube = num => num * num * num;
console.log("Cube of 3:", cube(3));

// Arrow function with multiple parameters
const divide = (a, b) => a / b;
console.log("15 / 3 =", divide(15, 3));

// Arrow function with no parameters
const getRandomNumber = () => Math.random();
console.log("Random number:", getRandomNumber());

console.log("\n=== 4. DEFAULT PARAMETERS ===\n");

function greetWithDefault(name = "Guest") {
    return `Welcome, ${name}!`;
}

console.log(greetWithDefault("Charlie"));
console.log(greetWithDefault());  // Uses default value

function calculatePrice(price, tax = 0.1) {
    return price + (price * tax);
}

console.log("Price with 10% tax:", calculatePrice(100));
console.log("Price with 20% tax:", calculatePrice(100, 0.2));

console.log("\n=== 5. REST PARAMETERS ===\n");

// Rest parameter collects remaining arguments into an array
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log("Sum of 1, 2, 3:", sum(1, 2, 3));
console.log("Sum of 10, 20, 30, 40:", sum(10, 20, 30, 40));

function introduce(firstName, lastName, ...hobbies) {
    console.log(`Name: ${firstName} ${lastName}`);
    console.log("Hobbies:", hobbies.join(", "));
}

introduce("John", "Doe", "reading", "coding", "gaming");

console.log("\n=== 6. RETURN VALUES ===\n");

// Function with return value
function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

const fullName = getFullName("Jane", "Smith");
console.log("Full name:", fullName);

// Function with early return
function checkAge(age) {
    if (age < 18) {
        return "Minor";
    }
    return "Adult";
}

console.log("Age 15:", checkAge(15));
console.log("Age 25:", checkAge(25));

// Function returning an object
function createPerson(name, age) {
    return {
        name: name,
        age: age,
        greet: function() {
            return `Hi, I'm ${this.name}`;
        }
    };
}

const person = createPerson("Tom", 30);
console.log(person.greet());

console.log("\n=== 7. HIGHER-ORDER FUNCTIONS ===\n");

// Function that takes another function as argument
function processArray(arr, callback) {
    const result = [];
    for (const item of arr) {
        result.push(callback(item));
    }
    return result;
}

const numbers = [1, 2, 3, 4, 5];
const doubled = processArray(numbers, num => num * 2);
console.log("Doubled:", doubled);

// Function that returns a function
function createMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log("Double 5:", double(5));
console.log("Triple 5:", triple(5));

console.log("\n=== 8. IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE) ===\n");

(function() {
    console.log("This function runs immediately!");
})();

// IIFE with parameters
(function(name) {
    console.log(`Hello from IIFE, ${name}!`);
})("World");

// Arrow function IIFE
(() => {
    console.log("Arrow function IIFE");
})();

console.log("\n=== 9. CALLBACK FUNCTIONS ===\n");

function fetchData(callback) {
    console.log("Fetching data...");
    setTimeout(() => {
        const data = { id: 1, name: "Sample Data" };
        callback(data);
    }, 1000);
}

console.log("Starting data fetch...");
fetchData((data) => {
    console.log("Data received:", data);
});

console.log("\n=== 10. FUNCTION SCOPE ===\n");

let globalVar = "I'm global";

function outerFunction() {
    let outerVar = "I'm in outer function";
    
    function innerFunction() {
        let innerVar = "I'm in inner function";
        console.log(globalVar);   // Can access global
        console.log(outerVar);    // Can access outer
        console.log(innerVar);    // Can access own
    }
    
    innerFunction();
    // console.log(innerVar);  // Would cause error - innerVar not accessible here
}

outerFunction();

console.log("\n✅ Functions completed!");
console.log("Note: Some async operations may still be running...");

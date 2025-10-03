// =============================================
// Operators in JavaScript
// =============================================

console.log("=== 1. ARITHMETIC OPERATORS ===\n");

const a = 10;
const b = 3;

console.log(`a = ${a}, b = ${b}`);
console.log("Addition (+):", a + b);        // 13
console.log("Subtraction (-):", a - b);     // 7
console.log("Multiplication (*):", a * b);  // 30
console.log("Division (/):", a / b);        // 3.333...
console.log("Modulus (%):", a % b);         // 1 (remainder)
console.log("Exponentiation (**):", a ** b); // 1000

// Increment and Decrement
let counter = 5;
console.log("\nCounter:", counter);
console.log("Pre-increment (++counter):", ++counter);  // 6
console.log("Post-increment (counter++):", counter++); // 6, then becomes 7
console.log("Counter after post-increment:", counter);  // 7

console.log("\n=== 2. COMPARISON OPERATORS ===\n");

console.log("10 == '10':", 10 == '10');      // true (loose equality)
console.log("10 === '10':", 10 === '10');    // false (strict equality)
console.log("10 != '10':", 10 != '10');      // false
console.log("10 !== '10':", 10 !== '10');    // true
console.log("5 > 3:", 5 > 3);                // true
console.log("5 < 3:", 5 < 3);                // false
console.log("5 >= 5:", 5 >= 5);              // true
console.log("5 <= 4:", 5 <= 4);              // false

console.log("\n=== 3. LOGICAL OPERATORS ===\n");

const isAdult = true;
const hasLicense = false;

console.log("isAdult AND hasLicense:", isAdult && hasLicense);  // false
console.log("isAdult OR hasLicense:", isAdult || hasLicense);   // true
console.log("NOT isAdult:", !isAdult);                          // false

// Short-circuit evaluation
console.log("\nShort-circuit with &&:", false && console.log("This won't run"));
console.log("Short-circuit with ||:", true || console.log("This won't run"));

console.log("\n=== 4. ASSIGNMENT OPERATORS ===\n");

let x = 10;
console.log("x = 10:", x);

x += 5;  // x = x + 5
console.log("x += 5:", x);  // 15

x -= 3;  // x = x - 3
console.log("x -= 3:", x);  // 12

x *= 2;  // x = x * 2
console.log("x *= 2:", x);  // 24

x /= 4;  // x = x / 4
console.log("x /= 4:", x);  // 6

x %= 4;  // x = x % 4
console.log("x %= 4:", x);  // 2

console.log("\n=== 5. TERNARY OPERATOR ===\n");

const age = 18;
const canVote = age >= 18 ? "Yes" : "No";
console.log(`Age: ${age}, Can vote? ${canVote}`);

const score = 85;
const grade = score >= 90 ? 'A' : score >= 80 ? 'B' : score >= 70 ? 'C' : 'F';
console.log(`Score: ${score}, Grade: ${grade}`);

console.log("\n=== 6. STRING OPERATORS ===\n");

const firstName = "John";
const lastName = "Doe";
const fullName = firstName + " " + lastName;  // Concatenation
console.log("Full name:", fullName);

// Template literals (ES6)
const greeting = `Hello, ${firstName}!`;
console.log("Greeting:", greeting);

console.log("\n=== 7. TYPE OPERATORS ===\n");

console.log("typeof 42:", typeof 42);
console.log("typeof 'hello':", typeof 'hello');
console.log("typeof true:", typeof true);
console.log("typeof {}:", typeof {});
console.log("typeof []:", typeof []);

const person = { name: "Alice" };
console.log("'name' in person:", 'name' in person);    // true
console.log("'age' in person:", 'age' in person);      // false

console.log("\n✅ Operators completed!");

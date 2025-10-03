// =============================================
// Conditionals (if/else, switch)
// =============================================

console.log("=== 1. IF STATEMENT ===\n");

const temperature = 25;

if (temperature > 30) {
    console.log("It's hot outside! 🌞");
}

console.log(`Temperature: ${temperature}°C`);

console.log("\n=== 2. IF-ELSE STATEMENT ===\n");

const age = 20;

if (age >= 18) {
    console.log("You are an adult ✅");
} else {
    console.log("You are a minor ❌");
}

console.log("\n=== 3. IF-ELSE IF-ELSE STATEMENT ===\n");

const score = 85;

if (score >= 90) {
    console.log(`Score: ${score} - Grade: A 🌟`);
} else if (score >= 80) {
    console.log(`Score: ${score} - Grade: B 👍`);
} else if (score >= 70) {
    console.log(`Score: ${score} - Grade: C 👌`);
} else if (score >= 60) {
    console.log(`Score: ${score} - Grade: D 😐`);
} else {
    console.log(`Score: ${score} - Grade: F ❌`);
}

console.log("\n=== 4. NESTED IF STATEMENTS ===\n");

const isLoggedIn = true;
const isPremiumUser = true;

if (isLoggedIn) {
    console.log("Welcome back!");
    
    if (isPremiumUser) {
        console.log("You have premium access 👑");
    } else {
        console.log("Consider upgrading to premium!");
    }
} else {
    console.log("Please log in to continue");
}

console.log("\n=== 5. SWITCH STATEMENT ===\n");

const day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

console.log(`Day ${day} is ${dayName}`);

console.log("\n=== 6. SWITCH WITH MULTIPLE CASES ===\n");

const fruit = "apple";

switch (fruit) {
    case "apple":
    case "pear":
    case "banana":
        console.log(`${fruit} is a common fruit 🍎`);
        break;
    case "mango":
    case "papaya":
        console.log(`${fruit} is a tropical fruit 🥭`);
        break;
    default:
        console.log(`${fruit} is a fruit`);
}

console.log("\n=== 7. TERNARY OPERATOR (Shorthand IF-ELSE) ===\n");

const userAge = 22;
const accessLevel = userAge >= 18 ? "full access" : "restricted access";
console.log(`Age: ${userAge}, Access: ${accessLevel}`);

// Nested ternary (use with caution)
const marks = 75;
const result = marks >= 90 ? "Excellent" : marks >= 70 ? "Good" : marks >= 50 ? "Pass" : "Fail";
console.log(`Marks: ${marks}, Result: ${result}`);

console.log("\n=== 8. NULLISH COALESCING (??) ===\n");

const username = null;
const defaultName = username ?? "Guest";
console.log("Username:", defaultName);  // "Guest"

const count = 0;
const displayCount = count ?? 10;
console.log("Count:", displayCount);  // 0 (not 10, because 0 is not null/undefined)

console.log("\n=== 9. OPTIONAL CHAINING (?.) ===\n");

const user = {
    name: "Alice",
    address: {
        city: "New York"
    }
};

console.log("City:", user?.address?.city);  // "New York"
console.log("ZIP:", user?.address?.zip);    // undefined (no error!)

console.log("\n✅ Conditionals completed!");

// =============================================
// Advanced JavaScript Topics
// =============================================

console.log("=== 1. CLOSURES ===\n");

// Closure - function that remembers its outer variables
function createCounter() {
    let count = 0;  // Private variable
    
    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
}

const counter = createCounter();
console.log("Count:", counter.getCount());
console.log("Increment:", counter.increment());
console.log("Increment:", counter.increment());
console.log("Decrement:", counter.decrement());
console.log("Final count:", counter.getCount());

console.log("\n=== 2. SPREAD OPERATOR ===\n");

// With arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log("Combined arrays:", combined);

// Copying arrays
const original = [1, 2, 3];
const copy = [...original];
console.log("Copied array:", copy);

// With objects
const person = { name: "John", age: 30 };
const updatedPerson = { ...person, city: "New York" };
console.log("Updated person:", updatedPerson);

// With function arguments
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log("Sum:", sum(1, 2, 3, 4, 5));

console.log("\n=== 3. REST PARAMETERS ===\n");

function multiply(multiplier, ...numbers) {
    return numbers.map(num => num * multiplier);
}

console.log("Multiply by 2:", multiply(2, 1, 2, 3, 4, 5));

console.log("\n=== 4. DESTRUCTURING ===\n");

// Array destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log("First:", first, "Second:", second, "Rest:", rest);

// Object destructuring
const user = { 
    username: "alice", 
    email: "alice@example.com",
    age: 28,
    country: "USA"
};

const { username, email, ...otherProps } = user;
console.log("Username:", username);
console.log("Other props:", otherProps);

// Nested destructuring
const data = {
    user: {
        name: "Bob",
        address: {
            city: "San Francisco"
        }
    }
};

const { user: { name, address: { city } } } = data;
console.log("Name:", name, "City:", city);

console.log("\n=== 5. TEMPLATE LITERALS ===\n");

const product = "laptop";
const price = 999;

// Multi-line strings
const message = `
    Product: ${product}
    Price: $${price}
    Total with tax: $${price * 1.1}
`;
console.log(message);

// Tagged templates
function highlight(strings, ...values) {
    return strings.reduce((result, str, i) => {
        return `${result}${str}**${values[i] || ''}**`;
    }, '');
}

const tagged = highlight`Price is ${price} for ${product}`;
console.log("Tagged:", tagged);

console.log("\n=== 6. CLASSES (ES6) ===\n");

class Animal {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    
    speak() {
        console.log(`${this.name} makes a sound`);
    }
    
    static info() {
        console.log("Animals are living organisms");
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name, "Dog");
        this.breed = breed;
    }
    
    speak() {
        console.log(`${this.name} barks!`);
    }
    
    fetch() {
        console.log(`${this.name} is fetching the ball`);
    }
}

const dog = new Dog("Buddy", "Golden Retriever");
dog.speak();
dog.fetch();
Animal.info();

console.log("\n=== 7. MODULES (Conceptual) ===\n");

// Export (in a module file)
// export const PI = 3.14159;
// export function square(x) { return x * x; }
// export default class Calculator { }

// Import (in another file)
// import Calculator, { PI, square } from './module.js';
// import * as MathUtils from './module.js';

console.log("Modules allow code organization and reusability");
console.log("Use 'export' and 'import' keywords");

console.log("\n=== 8. GENERATORS ===\n");

function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = numberGenerator();
console.log("Generator next():", gen.next().value);
console.log("Generator next():", gen.next().value);
console.log("Generator next():", gen.next().value);

// Infinite generator
function* infiniteCounter() {
    let count = 0;
    while (true) {
        yield count++;
    }
}

const infinite = infiniteCounter();
console.log("Infinite:", infinite.next().value);
console.log("Infinite:", infinite.next().value);
console.log("Infinite:", infinite.next().value);

console.log("\n=== 9. SYMBOLS ===\n");

// Symbols are unique identifiers
const sym1 = Symbol("description");
const sym2 = Symbol("description");

console.log("Symbols are unique:", sym1 === sym2);  // false

// Using symbols as object keys
const id = Symbol("id");
const obj = {
    [id]: 12345,
    name: "Object"
};

console.log("Symbol key value:", obj[id]);

console.log("\n=== 10. MAPS AND SETS ===\n");

// Map - key-value pairs with any type of key
const map = new Map();
map.set("name", "John");
map.set(1, "one");
map.set(true, "boolean");

console.log("Map size:", map.size);
console.log("Map get('name'):", map.get("name"));
console.log("Map has(1):", map.has(1));

// Set - collection of unique values
const set = new Set([1, 2, 3, 3, 4, 4, 5]);
console.log("Set:", set);  // Only unique values
set.add(6);
console.log("Set size:", set.size);
console.log("Set has(3):", set.has(3));

console.log("\n=== 11. PROXY ===\n");

const handler = {
    get: function(target, prop) {
        console.log(`Getting ${prop}`);
        return prop in target ? target[prop] : "Not found";
    },
    set: function(target, prop, value) {
        console.log(`Setting ${prop} to ${value}`);
        target[prop] = value;
        return true;
    }
};

const proxyObj = new Proxy({}, handler);
proxyObj.name = "Alice";
console.log("Name:", proxyObj.name);
console.log("Age:", proxyObj.age);

console.log("\n=== 12. OPTIONAL CHAINING & NULLISH COALESCING ===\n");

const userData = {
    name: "John",
    address: {
        city: "NYC"
    }
};

// Optional chaining
console.log("City:", userData?.address?.city);
console.log("ZIP:", userData?.address?.zip);  // undefined, no error

// Nullish coalescing
const value = null;
const defaultValue = value ?? "default";
console.log("Default value:", defaultValue);

const zero = 0;
const withZero = zero ?? 10;
console.log("With zero:", withZero);  // 0, not 10

console.log("\n=== 13. PRIVATE CLASS FIELDS ===\n");

class BankAccount {
    #balance = 0;  // Private field
    
    deposit(amount) {
        this.#balance += amount;
        console.log(`Deposited $${amount}`);
    }
    
    withdraw(amount) {
        if (this.#balance >= amount) {
            this.#balance -= amount;
            console.log(`Withdrawn $${amount}`);
        } else {
            console.log("Insufficient funds");
        }
    }
    
    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount();
account.deposit(100);
account.withdraw(30);
console.log("Balance:", account.getBalance());
// console.log(account.#balance);  // Would cause error

console.log("\n=== 14. PROMISE COMBINATORS ===\n");

const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.reject("Error");

// Promise.all - waits for all
Promise.all([p1, p2])
    .then(results => console.log("All resolved:", results))
    .catch(err => console.log("All error:", err));

// Promise.allSettled - waits for all regardless of outcome
Promise.allSettled([p1, p2, p3])
    .then(results => console.log("AllSettled:", results));

// Promise.race - first to complete
Promise.race([p1, p2])
    .then(result => console.log("Race winner:", result));

// Promise.any - first to resolve (ignores rejections)
Promise.any([p1, p2])
    .then(result => console.log("Any resolved:", result));

console.log("\n✅ Advanced topics completed!");

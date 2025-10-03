// =============================================
// Objects in JavaScript
// =============================================

console.log("=== 1. CREATING OBJECTS ===\n");

// Object literal
const person = {
    name: "John Doe",
    age: 30,
    city: "New York"
};

console.log("Person:", person);

// Empty object
const emptyObj = {};
console.log("Empty object:", emptyObj);

// Using Object constructor
const car = new Object();
car.brand = "Toyota";
car.model = "Camry";
car.year = 2023;
console.log("Car:", car);

console.log("\n=== 2. ACCESSING PROPERTIES ===\n");

// Dot notation
console.log("Name:", person.name);
console.log("Age:", person.age);

// Bracket notation
console.log("City:", person["city"]);

// Dynamic property access
const propertyName = "age";
console.log("Dynamic access:", person[propertyName]);

console.log("\n=== 3. MODIFYING OBJECTS ===\n");

// Adding properties
person.email = "john@example.com";
person["phone"] = "123-456-7890";

console.log("Updated person:", person);

// Modifying properties
person.age = 31;
console.log("New age:", person.age);

// Deleting properties
delete person.phone;
console.log("After deleting phone:", person);

console.log("\n=== 4. OBJECT METHODS ===\n");

const calculator = {
    value: 0,
    add: function(num) {
        this.value += num;
        return this;
    },
    subtract: function(num) {
        this.value -= num;
        return this;
    },
    multiply: function(num) {
        this.value *= num;
        return this;
    },
    getResult: function() {
        return this.value;
    }
};

// Method chaining
const result = calculator.add(10).multiply(2).subtract(5).getResult();
console.log("Calculator result:", result);

console.log("\n=== 5. THIS KEYWORD ===\n");

const user = {
    firstName: "Jane",
    lastName: "Smith",
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    },
    greet: function() {
        console.log(`Hello, I'm ${this.fullName()}`);
    }
};

user.greet();

console.log("\n=== 6. OBJECT SHORTHAND (ES6) ===\n");

const name = "Alice";
const age = 25;
const country = "USA";

// Property shorthand
const student = { name, age, country };
console.log("Student:", student);

// Method shorthand
const teacher = {
    name: "Mr. Brown",
    subject: "Math",
    teach() {  // Shorthand method
        console.log(`Teaching ${this.subject}`);
    }
};

teacher.teach();

console.log("\n=== 7. COMPUTED PROPERTY NAMES ===\n");

const propName = "favoriteColor";
const obj = {
    [propName]: "blue",
    [`${propName}Code`]: "#0000FF"
};

console.log("Object with computed properties:", obj);

console.log("\n=== 8. OBJECT DESTRUCTURING ===\n");

const product = {
    id: 101,
    title: "Laptop",
    price: 999,
    brand: "Dell"
};

// Basic destructuring
const { title, price } = product;
console.log(`Product: ${title}, Price: $${price}`);

// Destructuring with rename
const { brand: manufacturer } = product;
console.log("Manufacturer:", manufacturer);

// Destructuring with default values
const { color = "silver" } = product;
console.log("Color:", color);

console.log("\n=== 9. NESTED OBJECTS ===\n");

const company = {
    name: "Tech Corp",
    address: {
        street: "123 Main St",
        city: "San Francisco",
        country: "USA"
    },
    employees: {
        engineering: 50,
        sales: 30,
        hr: 10
    }
};

console.log("Company:", company.name);
console.log("Location:", company.address.city);
console.log("Engineers:", company.employees.engineering);

// Nested destructuring
const { address: { city, country: nation } } = company;
console.log(`Located in ${city}, ${nation}`);

console.log("\n=== 10. OBJECT METHODS ===\n");

// Object.keys()
const keys = Object.keys(person);
console.log("Person keys:", keys);

// Object.values()
const values = Object.values(person);
console.log("Person values:", values);

// Object.entries()
const entries = Object.entries(person);
console.log("Person entries:", entries);

// Object.assign() - copying objects
const original = { a: 1, b: 2 };
const copy = Object.assign({}, original);
console.log("Copy:", copy);

// Spread operator (modern way)
const clone = { ...original };
console.log("Clone:", clone);

console.log("\n=== 11. OBJECT METHODS (Advanced) ===\n");

// Object.freeze() - prevent modifications
const frozen = Object.freeze({ x: 10, y: 20 });
frozen.x = 100;  // This won't work
console.log("Frozen object:", frozen);

// Object.seal() - prevent adding/removing properties
const sealed = Object.seal({ a: 1, b: 2 });
sealed.a = 10;  // Can modify
sealed.c = 3;   // Can't add
delete sealed.b; // Can't delete
console.log("Sealed object:", sealed);

// Object.hasOwnProperty()
console.log("Has 'name' property:", person.hasOwnProperty('name'));
console.log("Has 'salary' property:", person.hasOwnProperty('salary'));

console.log("\n✅ Objects completed!");

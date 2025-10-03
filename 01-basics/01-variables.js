// =============================================
// Variables and Data Types
// =============================================

console.log("=== 1. VARIABLES ===\n");

// Three ways to declare variables:
// var (old way, function-scoped)
var oldWay = "I'm using var";

// let (modern, block-scoped, can be reassigned)
let canChange = "I can be changed";
canChange = "See, I changed!";

// const (modern, block-scoped, cannot be reassigned)
const cannotChange = "I'm constant";
// cannotChange = "This would cause an error!";

console.log("var:", oldWay);
console.log("let:", canChange);
console.log("const:", cannotChange);

console.log("\n=== 2. DATA TYPES ===\n");

// Primitive types
const numberType = 42;                    // Number
const stringType = "Hello, JavaScript!";  // String
const booleanType = true;                 // Boolean
const undefinedType = undefined;          // Undefined
const nullType = null;                    // Null
const symbolType = Symbol("unique");      // Symbol (ES6)
const bigIntType = 9007199254740991n;     // BigInt (ES2020)

console.log("Number:", numberType, "- Type:", typeof numberType);
console.log("String:", stringType, "- Type:", typeof stringType);
console.log("Boolean:", booleanType, "- Type:", typeof booleanType);
console.log("Undefined:", undefinedType, "- Type:", typeof undefinedType);
console.log("Null:", nullType, "- Type:", typeof nullType);
console.log("Symbol:", symbolType.toString(), "- Type:", typeof symbolType);
console.log("BigInt:", bigIntType, "- Type:", typeof bigIntType);

// Reference types
const arrayType = [1, 2, 3];
const objectType = { name: "John", age: 30 };
const functionType = function() { return "I'm a function"; };

console.log("\nArray:", arrayType, "- Type:", typeof arrayType);
console.log("Object:", objectType, "- Type:", typeof objectType);
console.log("Function:", functionType, "- Type:", typeof functionType);

console.log("\n=== 3. TYPE CONVERSION ===\n");

// String to Number
const stringNumber = "123";
console.log("String '123' to Number:", Number(stringNumber), typeof Number(stringNumber));
console.log("Using parseInt:", parseInt(stringNumber));
console.log("Using parseFloat:", parseFloat("123.45"));

// Number to String
const number = 456;
console.log("Number 456 to String:", String(number), typeof String(number));
console.log("Using toString():", number.toString());

// To Boolean
console.log("\nTruthy and Falsy values:");
console.log("Boolean(1):", Boolean(1));        // true
console.log("Boolean(0):", Boolean(0));        // false
console.log("Boolean(''):", Boolean(''));      // false
console.log("Boolean('text'):", Boolean('text')); // true
console.log("Boolean(null):", Boolean(null));  // false
console.log("Boolean(undefined):", Boolean(undefined)); // false

console.log("\n✅ Variables and data types completed!");

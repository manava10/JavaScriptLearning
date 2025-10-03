// =============================================
// Asynchronous JavaScript
// =============================================

console.log("=== 1. CALLBACKS ===\n");

// Simple callback
function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();
}

greet("Alice", () => {
    console.log("Callback executed!");
});

// Simulating async operation with callback
function fetchUserData(userId, callback) {
    console.log(`Fetching data for user ${userId}...`);
    setTimeout(() => {
        const userData = { id: userId, name: "John Doe", email: "john@example.com" };
        callback(userData);
    }, 1000);
}

console.log("\nFetching user data...");
fetchUserData(123, (data) => {
    console.log("User data received:", data);
});

console.log("\n=== 2. PROMISES ===\n");

// Creating a Promise
const myPromise = new Promise((resolve, reject) => {
    const success = true;
    
    setTimeout(() => {
        if (success) {
            resolve("Operation successful!");
        } else {
            reject("Operation failed!");
        }
    }, 1000);
});

// Consuming a Promise
console.log("Starting promise...");
myPromise
    .then(result => {
        console.log("Success:", result);
    })
    .catch(error => {
        console.log("Error:", error);
    });

console.log("\n=== 3. PROMISE CHAINING ===\n");

function step1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step 1 completed");
            resolve(1);
        }, 1000);
    });
}

function step2(value) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Step 2 completed with value: ${value}`);
            resolve(value + 1);
        }, 1000);
    });
}

function step3(value) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Step 3 completed with value: ${value}`);
            resolve(value + 1);
        }, 1000);
    });
}

console.log("Starting promise chain...");
step1()
    .then(step2)
    .then(step3)
    .then(finalValue => {
        console.log("Final value:", finalValue);
    })
    .catch(error => {
        console.log("Error in chain:", error);
    });

console.log("\n=== 4. ASYNC/AWAIT ===\n");

// Async function with await
async function fetchData() {
    console.log("Fetching data with async/await...");
    
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve({ data: "Sample data", status: "success" });
        }, 1000);
    });
    
    const result = await promise;
    console.log("Data received:", result);
    return result;
}

fetchData().then(result => {
    console.log("Function returned:", result.status);
});

console.log("\n=== 5. ERROR HANDLING WITH ASYNC/AWAIT ===\n");

async function riskyOperation() {
    try {
        console.log("Attempting risky operation...");
        
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                const success = Math.random() > 0.5;
                if (success) {
                    resolve("Success!");
                } else {
                    reject(new Error("Operation failed!"));
                }
            }, 1000);
        });
        
        const result = await promise;
        console.log("Result:", result);
    } catch (error) {
        console.log("Caught error:", error.message);
    }
}

riskyOperation();

console.log("\n=== 6. PROMISE.ALL ===\n");

// Wait for multiple promises to complete
const promise1 = new Promise(resolve => setTimeout(() => resolve("First"), 1000));
const promise2 = new Promise(resolve => setTimeout(() => resolve("Second"), 500));
const promise3 = new Promise(resolve => setTimeout(() => resolve("Third"), 1500));

console.log("Waiting for all promises...");
Promise.all([promise1, promise2, promise3])
    .then(results => {
        console.log("All promises resolved:", results);
    })
    .catch(error => {
        console.log("One promise failed:", error);
    });

console.log("\n=== 7. PROMISE.RACE ===\n");

// Returns first promise to complete
const slow = new Promise(resolve => setTimeout(() => resolve("Slow"), 2000));
const fast = new Promise(resolve => setTimeout(() => resolve("Fast"), 500));

console.log("Racing promises...");
Promise.race([slow, fast])
    .then(result => {
        console.log("Winner:", result);
    });

console.log("\n=== 8. PRACTICAL EXAMPLE - SEQUENTIAL ASYNC OPERATIONS ===\n");

// Simulating database operations
async function getUserById(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id, username: "john_doe" });
        }, 500);
    });
}

async function getPostsByUser(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, title: "First Post", userId },
                { id: 2, title: "Second Post", userId }
            ]);
        }, 500);
    });
}

async function getCommentsForPost(postId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, text: "Great post!", postId },
                { id: 2, text: "Thanks for sharing", postId }
            ]);
        }, 500);
    });
}

async function loadUserContent(userId) {
    try {
        console.log("Loading user content...");
        
        const user = await getUserById(userId);
        console.log("User loaded:", user.username);
        
        const posts = await getPostsByUser(user.id);
        console.log("Posts loaded:", posts.length);
        
        const comments = await getCommentsForPost(posts[0].id);
        console.log("Comments loaded:", comments.length);
        
        return { user, posts, comments };
    } catch (error) {
        console.error("Error loading content:", error);
    }
}

loadUserContent(123);

console.log("\n=== 9. PARALLEL ASYNC OPERATIONS ===\n");

async function loadDataInParallel() {
    console.log("Loading data in parallel...");
    
    const [user, posts, settings] = await Promise.all([
        getUserById(1),
        getPostsByUser(1),
        new Promise(resolve => setTimeout(() => resolve({ theme: "dark" }), 300))
    ]);
    
    console.log("All data loaded:", { user, posts: posts.length, settings });
}

loadDataInParallel();

console.log("\n=== 10. SETTIMEOUT & SETINTERVAL ===\n");

// setTimeout - executes once after delay
console.log("Setting timeout for 2 seconds...");
const timeoutId = setTimeout(() => {
    console.log("Timeout executed!");
}, 2000);

// Can cancel with clearTimeout
// clearTimeout(timeoutId);

// setInterval - executes repeatedly
console.log("Setting interval for every 1 second...");
let counter = 0;
const intervalId = setInterval(() => {
    counter++;
    console.log(`Interval tick: ${counter}`);
    
    if (counter >= 3) {
        clearInterval(intervalId);
        console.log("Interval stopped");
    }
}, 1000);

console.log("\n✅ Async JavaScript examples started!");
console.log("Note: Async operations will continue running...\n");

// Note: This prevents the script from exiting immediately
setTimeout(() => {
    console.log("\n✅ All async examples completed!");
}, 6000);

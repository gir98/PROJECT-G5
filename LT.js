// console.log("ke haal hai");

// var a=200;

// function abc(){
//     console.log("bdia bhai");
// }

// var b=3000;

// setTimeout(() => {
//     console.log("Settimout called");
//     abc(" from timeout");
//     console.log("settimeout finished");
// },2000);

// ----------------------------------------------------------------------------------------------------------------------------

// 🧠 GLOBAL EXECUTION CONTEXT (GEC) is created

// ----------------------------
// 🥇 Phase 1: MEMORY ALLOCATION (Creation Phase)
// JS scans the code and allocates memory:

// a      -> undefined
// abc    -> function abc() { console.log("bdia bhai"); }
// b      -> undefined
// setTimeout -> registered in environment (not executed yet)

// ----------------------------
// 🥈 Phase 2: CODE EXECUTION (Execution Phase)

console.log("ke haal hai"); 
// 👉 Output: "ke haal hai" (synchronous)

// Now value is assigned to 'a'
var a = 200;

// Function already created in memory phase, nothing happens here
function abc() {
    console.log("bdia bhai");
}

// Now value is assigned to 'b'
var b = 3000;

// setTimeout is called
// 🔄 setTimeout is handled by Web APIs (browser or Node.js environment)
// Timer of 2000ms starts in background
setTimeout(() => {
    // This entire callback is sent to Web APIs environment
    // After 2000ms, it goes to Callback Queue and waits
    // When Call Stack is empty, Event Loop pushes this to Call Stack

    console.log("Settimout called");      // 👉 Output after 2s: "Settimout called"
    abc(" from timeout");                 // 👉 Output after 2s: "bdia bhai"
    console.log("settimeout finished");   // 👉 Output after 2s: "settimeout finished"

}, 2000);

// ⚠ Execution does not wait for setTimeout. JS engine moves on.
// This is NON-BLOCKING (asynchronous)
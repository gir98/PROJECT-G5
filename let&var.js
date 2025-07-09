if (true) {
    let x = 10;
    console.log(x); // Output: 10
}
console.log(x);

// Error: x is not defined
// reference error

console.log("TDZ Example");
console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x = 5;


/*Key Characteristics of let
Block Scope:
Variables declared with let are scoped to the block they are defined in (e.g., inside {} such as in loops, conditionals, or functions).
Unlike var, which has function scope or global scope, let variables are not accessible outside their block.
*/

/*No Hoisting for Access:
Variables declared with let are hoisted to the top of their block, but they are not initialized until their declaration is reached in the code. This creates a Temporal Dead Zone (TDZ) where accessing the variable before declaration results in a ReferenceError.*/
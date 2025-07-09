// function.calculate(param1){
//     console.log("calculate the BL");
//     param1();
// }

// var sumOfTwo=() =>{
//     console.log("SUM OF TWO WORKING");
// }
// calculate(sumOfTwo);





function calculate(longFunction, a,b){
    return longFunction(a,b); 
}

// logical function
function add(a,b){
    return a+b;
}

//logical function
function sub(a,b){
    return a-b;
}
console.log(calculate(add,3,5));
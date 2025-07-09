// const promiseOne=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task is complete");
//     },5000);
// })
// // consume promise
// promiseOne.then(function(){
//     console.log("Promise consumed");
// })

// output = why the Promise consumed not printed because we dindt connect resolve to .then



const promiseOne=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task is complete");
        resolve() // now connected to .then
    },5000);
})
// consume promise
promiseOne.then(function(){
    console.log("Promise consumed");
})

// output: 
// Async task is complete
// Promise consumed
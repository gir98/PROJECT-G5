// console.log('Start script',new Date().toLocaleTimeString());
// function walkInRes(cb) {
//     console.log("🚶 I am going in the restaurant");
//     setTimeout(cb, 2000);
// }

// function orderFood(cb) {
//     console.log("📝 I am ordering food");
//     setTimeout(cb, 2000);
// }

// function getFood(cb) {
//     console.log("🍽 I got the food");
//     setTimeout(cb, 2000);
// }

// function eatFood(cb) {
//     console.log("😋 I am eating the food");
//     setTimeout(cb, 2000);
// }

// function exitRes() {
//     console.log("🏃 I am exiting the restaurant");
// }

// // Run the chain
// walkInRes(() => {
//     orderFood(() => {
//         getFood(() => {
//             eatFood(() => {
//                 exitRes(()=>{
//                     console.log("End script",new Date().toLocaleDateString());
//                 });
//             });
//         });
//     });
// });






console.log('Start script',new Date().toLocaleTimeString());
function walkInRes(cb) {
    console.log(" I am going in the restaurant",new Date().toLocaleTimeString());
    setTimeout(cb, 2000);
}

function orderFood(cb) {
    console.log(" I am ordering food",new Date().toLocaleTimeString());
    setTimeout(cb, 2000);
}

function getFood(cb) {
    console.log(" I got the food",new Date().toLocaleTimeString());
    setTimeout(cb, 2000);
}

function eatFood(cb) {
    console.log(" I am eating the food",new Date().toLocaleTimeString());
    setTimeout(cb, 2000);
}

function exitRes() {
    console.log(" I am exiting the restaurant",new Date().toLocaleTimeString());
}

// Run the chain
walkInRes(() => {
    orderFood(() => {
        getFood(() => {
            eatFood(exitRes);
        });
    });
});
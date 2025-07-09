// console.log("Start Script");

// const myPromise = new Promise((resolve,reject) =>{
//     setTimeout(()=> {
//         resolve("foo");
//         // reject("foo");
//     },5000);
// });


// myPromise
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err));
// // console.log(myPromise);



// console.log("start");
// const myPromise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("get placed");
//     },5000);
// });

// myPromise

// .then((res)=> console.log(res))
// .then(()=>{
//     setTimeout(()=>{
//         console.log("party")
//     },3000)
// })
// .then(()=> {
//     setTimeout(()=>{
//         console.log("joining")
//     },5000)
// })
// .then(()=>{
//     setTimeout(()=>{
//         console.log("work")
//     },5000)
// })

// .then(()=>{
//     setTimeout(()=>{
//         console.log("Fired")
//     },5000)
// })
// .catch((err)=> console.log("err"))
// console.log(myPromise);
function pranshPlacement(placementStep,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("will get");
        },delay);
    });
}
pranshPlacement("got the",4000)
.then(()=> pranshPlacement("party",4000))
.then(()=>pranshPlacement("working",4000))
.then(()=>pranshPlacement("layoff",1000))
.catch((err)=>console.log(err));
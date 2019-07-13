
var time=0;
// var counter = ()=>{
//     console.log(`the time is ${time++} seconds`);
// }

// module.exports.counter = ()=>{
//     console.log(`the time is ${time++} seconds`);
// }


// module.exports.PI = 3.14;

// module.exports.sum = (a,b)=>{
//     console.log(`the sum of 2 nos are ${a+b}`);
// }
// counter();
// module.exports = counter;


const counter = ()=>{
    console.log(`the time is ${time++} seconds`);
}


const PI = 3.14;

const sum = (a,b)=>{
    console.log(`the sum of 2 nos are ${a+b}`);
}

module.exports = {
    counter,
    sum,
    PI

}
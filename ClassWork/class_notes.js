//<!-- synchronous is a blocking architecture,so the excution of each operation is dependent on the complection of the one before it. -->

function sum() {
    console.log("2");
}

function example() {
    console.log("1");
    sum();
    console.log("3");
}
example();

//<!-- Asynchronous is a non-blocking arcitecture,so the execution of one task isn't dependent on the another tasks can run simultaneously. -->

function sum() {
    setTimeout(() => {
        console.log("2");
    }, 2000);
}
function example() {
    console.log("1");
    sum();
    console.log("3");
}
example();


// promises 
// A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It allows you to write asynchronous code in a more synchronous and readable manner.

// A promise can be in one of three states:
// 1. Pending: The initial state, neither fulfilled nor rejected.
// 2. Fulfilled: The operation completed successfully, and the promise has a resulting value.
// 3. Rejected: The operation failed, and the promise has a reason for the failure.

// Promise 
// const promise = new Promise ((resolve, reject) => {
//     setTimeout(() => {
//         resolve("found data");
//     },2000);
// });

// promise.then((result) => {
//     console.log(result);
// });

const promise = new Promise ((resolve, reject) => {
    setTimeout(() => {
       reject("data not found.somthing went wrong");
    },2000);
});

promise.catch((error) => {
    console.log(error);
});


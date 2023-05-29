// Exercise 1: Comparison
// const compareToTen = num => {
//     return new Promise((resolve, reject) => {
//         if(num<10){
//             resolve(num + ' is less than 10, good job')
//         }
//         else {
//             reject(num + ' is greater or equal to 10')
//         }
//     })
// }
// compareToTen(9)
// .then(result => {
//     console.log(result);
// })
// .catch(error => {
//     console.log(error);
// })




// Exercise 2: Promises
// const p = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve('success')
//     }, 4000)

// })
// .then(result => {
//     console.log(result);
// })
// .catch(error => {
//     console.log(error, 'Ooops something went wrong');
// })
// console.log(p)

// OR:
// let myPromise = new Promise (function (resolve,reject) {
//     if (true){
//         setTimeout(() => {
//             resolve('Success!')
//         },'4000')
//     }
//     else{
//         reject(
//             console.log('OOPS, something went wrong!')
//         )
//     }
// } )
// myPromise.then(result=>console.log(result))
// myPromise.catch(error=>console.log(error))

// OR:
// let res
// setTimeout(()=> {
//     res = Promise.resolve('Success!'); res.then(result=>console.log(result))
// },'4000')




// Exercise 3: Resolve & Reject
// let num = 3;
// let p = new Promise(function (resolve, reject) {
//     if (num > 2) {
//         resolve('num');
//     } else {
//         reject('Booo');
//     }
// })
// .then(function (value) {
//     console.log(`I got a ${num}`);
// })
// .catch(function (value) {
//     console.log("Booo");
// });




// Exercise 4: Quizz - Not Mandatory
// don't understand the task
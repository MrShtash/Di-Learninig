// 1
// const studentObj = {
//     first: 'Elie',
//     last:'Schoppik',
// }
// function printFullName({first, last}) {
//     console.log(`Your full name is ${first} ${last}`);
// }
// printFullName(studentObj)





// 2 Keys and Values
// let keysAndValues = {a: 1, b: 2, c: 3};
// let arr = [Object.keys(keysAndValues), Object.values(keysAndValues)]
// console.log(arr);

let keysAndValues = {a: "Apple", b: "Microsoft", c: "Google"};
// let arr = [];
// for (i of keysAndValues) {
//     arr.push(item)
// }
let arr = [Object.keys(keysAndValues).sort(), Object.values(keysAndValues)];
console.log(arr);

// let keysAndValues = {key1: true, key2: false, key3: undefined};
// let arr = [Object.keys(keysAndValues).sort(), Object.values(keysAndValues)];
// console.log(arr);

// function keysAndValues1(obj){
//   let keys = Object.keys(obj);
//   let values = [];
//   let temp = obj;
//   let a = [keys.sort(), keys.map((item)=>{return (obj[item])})]
//   // let a = keys.sort()
//   // let b = keys.map((item)=>{
//   //   console.log('ff', temp[item]);
//   //   return (temp[item])})
//   console.log('ttt', a);
// }
// console.log(keysAndValues1({ c: "Apple", b: "Microsoft", a: "Google" })); 





// 3 Counter class
// class Counter {
//   constructor() {
//     this.count = 0;
//   }

//   increment() {
//     this.count++;
//   }
// }

// const counterOne = new Counter();
// counterOne.increment();
// counterOne.increment();

// const counterTwo = counterOne;
// counterTwo.increment();

// console.log(counterOne.count);
// // forcast: 2, we create counterOne+1, after that 1+1=2 (line 45) and create counterTwo = counterOne
// // fact: 3
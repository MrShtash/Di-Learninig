// Exercise 1: Analyzing The Map Method
// [1, 2, 3].map(num => {
//   if (typeof num === 'number') return num * 2;
//   return ;
// });
// forecast: [2,4,6]
// fact: I'm right

// Exercise2: Analyzing The Reduce Method
// [[0, 1], [2, 3]].reduce(
//   (acc, cur) => {
//     return acc.concat(cur);
//   },
//   [1, 2],
// );
// forecast: [1,2,3]
// fact: [1,2,0,1,2,3]

// Exercise3 : Analyze This Code
// const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num, i) => {
//     console.log(num, i);
//     alert(num);
//     return num * 2;
// })
// What is the value of i ?
// forecast: i is index
// fact: 1 0, 2 1, 4 2, 5 3, 8 4, 9 5

// Exercise4 : Nested Arrays
//1
// const array = [[1],[2],[3],[[[4]]],[[[5]]]];
// // [1,2,3,[4],[5]]
// let arr1 = array.flat(2)
// console.log(arr1);

// 2
// const greeting = [
//   ["Hello", "young", "grasshopper!"],
//   ["you", "are"],
//   ["learning", "fast!"],
// ];
// let newGreeting = greeting.flat(2);
// console.log(newGreeting.join(" "));

// const newArr = greeting.map((item) => {
//     return item
// })
// console.log(newArr);
// console.log(newArr.join(" "));

// 3
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
console.log(trapped.flat(24));
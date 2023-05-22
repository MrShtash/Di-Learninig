// Exercise 1: Scope
// #1
// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }

// #1.1 - run in the console: funcOne()
// prediction: a = 3, coz when we call func we see message inside func, and 'a' was changed by if statement.
// fact: a = 3

// #1.2 What will happen if the variable is declared with const instead of let?
// prediction: we can't reright const. Const can be used in 1 block, when we declare. But we declare 'a' in func and after that used if statement, we cant reright const
// fact: error

// #2
// let a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// #2.1 - run in the console:
// funcThree()
// funcTwo()
// funcThree()

// #2.2 What will happen if the variable is declared with const instead of let?
// prediction: we cant reright 'a' inside func, coz we declare it before. If we use const - got error, coz the const can be used inside the block, where we declared it, we can't use the same name for variable
// fact: 1st message a = 0, after than error

//#3
// function funcFour() {
//     window.a = "hello";
// }

// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// #3.1 - run in the console:
// funcFour()
// funcFive()
// prediction: we wil see the message vit 'hello' value, coz we just call funcFive and dont change glabal various 'a'(coz window.a) 
// fact: same

// #4
// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }

// #4.1 - run in the console:
// funcSix()
// #4.2 What will happen if the variable is declared with const instead of let?
// prediction: we dont consol 'a; otside the func. 'a' inside func - new variable. If we use const - got error, coz the const can be used inside the block, where we declared it, we can't use the same name for variable
// fact: we see message with a = test

// #5
// let a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared with const instead of let ?
// prediction: we use new var 'a' = 5 inside block. The 1st alert show us value 5. Next 'a' = 2, coz it outsude block. If we use const - we got an error, coz we can't reright the const
// fact: result don't change






// Exercise 2: Ternary Operator
// function winBattle(){
//     return true;
// }
// winBattle()

// Transform the winBattle() function to an arrow function.
// Create a variable called experiencePoints.
// Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
// Console.log the experiencePoints variable.

// const winBattle = () => true;
// var experiencePoints;
// experiencePoints = winBattle() ? experiencePoints=10 : experiencePoints=1;
// console.log(experiencePoints);






// Exercise 3: Is It A String?
// const isString = (param) => {
//     if (typeof(param) === 'string'){
//         return true
//     }
//     return false;
// }

// const isString = (param) => typeof(param) === 'string' ? true : false
// console.log(isString('hello'));
// console.log(isString([1, 2, 4, 0]));






// Exercise 4: Colors
// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// for (x of colors) {
//     // console.log(`1# choice is ${x}`)
//     console.log(x, colors[x])
// }

// colors.forEach((item, i, arr)=> {
//     // console.log(item, i);
//     console.log(`${i+1} choise is ${item}`)
// })






// Exercise 5: Colors #2
// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const ordinal = ["th","st","nd","rd"];
// colors.forEach((item, i, arr) => {
//     i > 3 ? console.log(`${i+1}${ordinal[i+1]} choise is ${item}`) : console.log(`${i+1}${ordinal[0]} choise is ${item}`)
// })






// Exercise 6: Bank Details
let bankAmount = 1000000;
const vat = 0.17;
let details = ['+500000', '+90000', '-100', '+950000'];
let total;
// let detailsVat = [];

details.forEach((item) => {
    // detailsVat.push(item*vat);
    bankAmount += item*vat;
})
console.log(bankAmount);
const fs = require("fs");
const data = "RightLeft.txt";

// 2
// fs.readFile('RightLeft.txt','utf-8', (err, data) => {
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//     }
// });

// 3-5
let position = 0; // init pos
let sum = 0; // for count
let checked = false; // use like flag to stop 
fs.readFile('RightLeft.txt', 'utf-8', (err, data) => {
    for (let item of data){
        sum++ // take each symbol from data and sum by  
        if (item == '>') {
            position++ // increase pos
        }
        else if (item == '<') {
            position-- // decrease pos
        }
        if (position == -1 && checked == false) { // check if pos == -1
            console.log(`Current position is ${position}. It took ${sum} steps to reach this`)
            checked = true
        }
        }
    console.log(`Final position at the end of the file: ${position}`);
});








// 3
// >>>>><>><>>>>>>>><<<>>>><
// 0123456789
// >>>>><><<>><<><>>>><>>>>>>><

// function calcFinal() {
//     let stepCount = arr.from(data);
//     let position = 0;
//     let sum = 0;
//     let step = 0;
//     fs.readFile('RightLeft.txt', 'utf-8', (err, data) => {
//         for(i=0; i<data.length; i++) {

//         }
//     })
// }

// let position = 0;
// let sum = 0;
// let step = 0;

// function calcFinal() {
//   fs.readFile("RightLeft.txt", "utf-8", (err, data) => {
//     console.log(typeof data);
//   });
// }

// calcFinal();

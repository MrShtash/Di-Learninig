// 1
// let arr = ['*', '* *', '* * *', '* * * *', '* * * * *', '* * * * * *'];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]); 
// }


// 1.1
// let snow = ''
// for (let i = 0; i<7; i++) {
//     snow = snow + '*';
//     console.log(snow)
// }

// 2
let snow = '';

for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 1; j++) {
        snow = snow + '*'
    }
    console.log(snow);
}

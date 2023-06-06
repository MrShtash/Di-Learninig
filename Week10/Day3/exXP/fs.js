const fs = require('fs');
// 1
// const data = 'text.txt'
// fs.readFile('text.txt','utf-8', (err, data) => {
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//     }
// });

// 2
// const data = 'Do you want a secret?'
// fs.writeFileSync('data.txt', data, 'utf-8', (err) => {
//     if(err){
//         console.log(err);
//     }
// });

// 3
// fs.appendFile('data.txt', ' JavaScript is simple', 'utf-8', (err) => {
//     if(err){
//         console.log(err);
//     }
// });

// 4
// fs.unlink('data.txt', (err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('deleted');
//     }
// })
// EX 1
// 1.1
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.

// function hello () {
//     alert('Hello World');
// }
// setTimeout (function () {
//     hello ();
// }, 1000 *2)

// 1.2
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.

// let main = document.getElementById('container')
// function addP () {
//     let newP = document.createElement('p');
//     newP.innerText = 'Hello World';
//     main.appendChild(newP);
// }
// setTimeout (function () {
//     addP ();
// }, 1000 *2)

// 1.3
// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// The interval will be cleared (ie. clearInterval), when the user will click on the button.

// let main = document.getElementById('container');
// function addP () {
//     let newP = document.createElement('p');
//     newP.innerText = 'Hello World';
//     main.appendChild(newP);
// };

// timer = setInterval(function() {
//     addP();
// }, 1000 * 2);

// function stop() {
//     clearInterval(timer);
// };

// Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.

// let counter = 0;
// let timer = setInterval(function () {
//     addP();
//     counter++;
//     console.log(counter);
//     if (counter > 4) {
//         clearInterval (timer)
//     }
// }, 1000*2)

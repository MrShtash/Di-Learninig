// ===EX 1
// Using a DOM property, retrieve the h1 and console.log it.
// Using DOM methods, remove the last paragraph in the <article> tag.
// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out documentation)
// BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)

// let h1 = document.getElementById('idh1');
// console.log(h1);
//OR
// let h1Value = h1.textContent;
// console.log(h1Value);

// or
// var h1El = document.getElementsByTagName("h1")[0];
// console.log(h1El);
// var h1El = document.querySelector("h1");
// console.log(h1El);

// let p = article.lastElementChild;
// article.removeChild(p);

// let h2 = document.getElementById('idh2');
// h2.addEventListener ('click', function(e) {
//     h2.setAttribute("style", "background-color: red");
//     console.log(h2);
// })

// let h3 = document.getElementById('idh3');
// h3.addEventListener ('click', function(e) {
//     h3.setAttribute("style", "display:none ");
//     console.log(h3);
// })

// ~~~
// let btn = document.createElement('button');
// btn.innerText = 'Click Here to bold all text!';
// article.appendChild(btn);
// ~~~

// let btn = document.getElementById("btn");
// btn.addEventListener("click", function (e) {
//   let listp = document.querySelectorAll("p"); //--> [p, p, p]
//   for (let i = 0; i < listp.length; i++) {
//     listp[i].setAttribute("style", "font-weight: bolder");
//   }
// });

// let h1 = document.getElementById('idh1');
// h1.addEventListener ('click', function(e) {
//     h1.style.fontSize = Math.floor(Math.random() * 101) + "px";
//     h1.setAttribute("style", "font-size: Math.floor(Math.random() * 101) + 'px'"); // this line not working
//     console.log(h1);
// });

// let p = document.getElementById("p");
// p.addEventListener("mouseover", function (e) {
//   p.setAttribute("style", "opacity: 0.5");
// });






// === EX 2
// Retrieve the form and console.log it.
// Retrieve the inputs by their id and console.log them.
// Retrieve the inputs by their name attribute and console.log them.
// When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ?
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.
// The output should be :
// <ul class="usersAnswer">
//     <li>first name of the user</li>
//     <li>last name of the user</li>
// </ul>

// let frm = document.getElementById('frm');
// console.log(frm)
// OR
// let frmValue= frm.textContent;
// console.log(frmValue);

// let fName = document.getElementById('fname');
// let lName = document.getElementById('lname');
// let submit = document.getElementById("submit");
// console.log(fName, lName, submit);

// let fName = document.getElementsByName('fname');
// let lName = document.getElementsByName('lname');
// console.log(fName, lName);

// preventDefault() — way to cancel browser default action
// let frm = document.getElementById("frm");
// let ul = document.getElementsByClassName("usersAnswer");
// frm.addEventListener("submit", addUserAnswer);

// function addUserAnswer(e) {
//   e.preventDefault();
//   let fName = frm.elements.fname.value;
//   let lName = frm.elements.lname.value;
//   if (fName.length <= 0 || lName.length <= 0) {
//     alert("please give a valid data");
//   }
//   console.log(`first name is ${fName}`);
//   console.log(`last name is ${lName}`);
// }






// === Ex 3
// Declare a global variable named allBoldItems.
// Create a function called getBold_items() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.
// Create a function called highlight() that changes the color of all the bold text to blue.
// Create a function called return_normal() that changes the color of all the bold text back to black.
// Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function return_normal() on mouseout (ie. when the mouse pointer is moved out of the paragraph).

// let allBoldItems;
// let p = document.getElementById("p");

// function getBold_items() {
//   allBoldItems = p.querySelectorAll("strong");
//   console.log(allBoldItems);
// }
// console.log(getBold_items());

// function highlight() {
//     for (i of allBoldItems) {
//         // allBoldItems.setAttribute("style", "color: blue")
//         i.setAttribute("style", "color: blue")
//     }
// }
// console.log(highlight());

// function return_normal() {
//     for (i of allBoldItems) {
//         i.setAttribute("style", "color: black")
//     }
// }
// console.log(return_normal());

// p.addEventListener('mouseover', highlight);
// p.addEventListener('mouseout', return_normal);






// === EX 4
// let pi = 3.14;
// let sphereVolume;
// let radius = document.getElementById('radius');
// let volume = document.getElementById('volume');
// let form = document.getElementById('MyForm');

// function sphere(event) {
//     event.preventDefault();
//     sphereVolume = (4/3) * pi * radius.value * 3;
//     volume.value = sphereVolume;
//     console.log(volume.value);
// }

// form.addEventListener('submit', sphere);






// === EX 5
let h3 = document.getElementById('idh3')
h3.addEventListener('mouseover', function (){
    h3.style.background = "green";
    h3.style.color = "white";
    // h3.setAttribute("style", "background-color: green; color: white");
});
h3.addEventListener('mouseout', function() {
    h3.style.fontWeight = "700";
    h3.style.fontStyle = "italic";
    h3.style.background = "white";
    h3.style.color = "black";
    // h3.setAttribute("style", "font-weight: 50px, font-style: italic");
});
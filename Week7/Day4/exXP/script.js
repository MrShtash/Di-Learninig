// Exercise 1: Find The Numbers Divisible By 23
// Create a function call isDivisible() that takes no parameter.
// In the function, loop through numbers 0 to 500.

// function isDivisible() {
//     const result = [];
//     for (let i=0; i<500; i ++ ) {
//     result.push(i);
//     }
//     return result;
// }
// let n = isDivisible();
// console.log(n);

// Console.log all the numbers divisible by 23.
// At the end, console.log the sum of all numbers that are divisible by 23.
// Bonus: Add a parameter divisor to the function.

// function isDivisible() {
//   const result = [];
//   let sum = 0;
//   for (let i = 0; i < 500; i++) {
//     if (i % 23 == 0) {
//       result.push(i);
//       sum += i;
//     }
//   }
//   return [result, sum];
// }
// let n = isDivisible();
// console.log(n[0], n[1])






// Exercise 2: Shopping List
// Add the stock and prices objects to your js file.
// const stock = {
//     "banana": 6,
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }
// const prices = {
//     "banana": 4,
//     "apple": 2,
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// }
// Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.

// let shoppingList = ['banana', 'orange', 'apple']

// Create a function called myBill() that takes no parameters.
// The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// The item must be in stock.
// If the item is in stock find out the price in the prices object.
// Call the myBill() function.
//Bonus: If the item is in stock, decrease the item’s stock by 1

// function myBill() {
//     let bill = 0;
//     for (let item of shoppingList){
//         if (item in stock && stock[item]> 0) {
//             bill += prices[item];
//             stock[item] -= 1;
//     }
//     return bill;
// }
// }
// let y = myBill();
// console.log(y)






// Exercise 3: What’s In My Wallet?
// Note: Read the illustration (point 4), while reading the instructions
// Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments:
// — an item price
// — and an array representing the amount of change in your pocket.
// In the function, determine whether or not you can afford the item.
// — If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
// — If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false
// Change will always be represented in the following order: quarters, dimes, nickels, pennies.
// A quarters is 0.25
// A dimes is 0.10
// A nickel is 0.05
// A penny is 0.01
// To illustrate:
// After you created the function, invoke it like this:
// changeEnough(4.25, [25, 20, 5, 0])
// The value 4.25 represents the item’s price
// The array [25, 20, 5, 0] represents 25 quarters, 20 dimes, 5 nickels and 0 pennies.
// The function should return true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50 which is bigger than 4.25 (the total amount due)

// function changeEnough(itemPrice, amountOfChange) {
//     if ((amountOfChange[0] * 0.25 + amountOfChange[1] * 0.1 + amountOfChange[2] * 0.05 + amountOfChange[3] * 0.01) > itemPrice) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// a = changeEnough(4.25, [25, 20, 5, 0]);
// console.log(a);






// Exercise 4: Vacations Costs
// Let’s create functions that calculate your vacation’s costs:
// Define a function called hotelCost().
// — It should ask the user for the number of nights they would like to stay in the hotel.
// — If the user doesn’t answer or if the answer is not a number, ask again.
// — The hotel costs $140 per night. The function should return the total price of the hotel.
// Define a function called planeRideCost().
// — It should ask the user for their destination.
// — If the user doesn’t answer or if the answer is not a string, ask again.
// — The function should return a different price depending on the location.
// — “London”: 183$
// — “Paris” : 220$
// — All other destination : 300$
// Define a function called rentalCarCost().
// — It should ask the user for the number of days they would like to rent the car.
// — If the user doesn’t answer or if the answer is not a number, ask again.
// — Calculate the cost to rent the car. The car costs $40 everyday.
// — If the user rents a car for more than 10 days, they get a 5% discount.
// — The function should return the total price of the car rental.
// Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
// Call the function totalVacationCost()
// Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.

// function hotelCost () {
//     const bill = 140;
//     let days;
//     do {
//         days = Number(prompt('how many nights do u want: '));
//     }
//     // while (days < 0 && !Number.isNaN(days));
//     while (isNaN(days) || days <= 0);
//     let result = days*bill;
//     return result
// }
// // let y = hotelCost();
// // console.log(y)

// function planeRideCost() {
//     let target;
//     let flag = true;
//     do {
//         target = prompt('which city would u like to travel: ');
//         flag = false;
//         for (i of target) {
//             if (isNaN(parseInt(i)) == false) {
//             flag = true;
//             }
//         }
//     }
//     while (flag) 
//         if (target === 'London') {
//             return 183;
//         }
//         else if (target === 'Paris') {
//             return 220;
//         }
//         else {
//             return 300;
//         }
// }
// // let o = planeRideCost();
// // console.log(o)

// function rentalCarCost() {
//     const dr = 40;
//     let period;
//     do {
//         period = Number(prompt('how many days for car rent u want: '));
//     }
//     while (isNaN(period) || period <= 0);
//     let res = period*dr;

//     if (period > 10) {
//         res*=0.95
//     }
//     return res
// }
// // let c = rentalCarCost();
// // console.log(c)

// function totalVacationCost() {
//     let hotel = hotelCost();
//     let city = planeRideCost();
//     let car = rentalCarCost();
//     let total = hotel + city + car;
//     return total;
// }
// let b = totalVacationCost();
// console.log('Total cost for holiday: ', b)






// Exercise 5: Users
// Create a new structured HTML file and a new Javascript file
// Add the code above, to your HTML file
// Using Javascript:
// Retrieve the div and console.log it
// Change the name “Pete” to “Richard”.
// Delete the <li> that contains the text node “Sarah”. (It’s the second <li> of the second <ul>)
// Change each first name of the two <ul>'s to your name. (Hint : use a loop)
// Using Javascript:
// Add a class called student_list to both of the <ul>'s.
// Add the classes university and attendance to the first <ul>.
// Using Javascript:
// Add a “light blue” background color and some padding to the <div>.
// Do not display the <li> that contains the text node “John”. (the first <li> of the <ul>)
// Add a border to the <li> that contains the text node “Richard”. (the second <li> of the <ul>)
// Change the font size of the whole body.
// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).

// 2.1
// let div = document.getElementById('container');
// console.log(div);
// 2.2
// let parentElem = document.getElementsByClassName('list')[0];
// console.log(parentElem);
// let childElem = parentElem.lastElementChild;
// console.log(childElem);
// childElem.innerText = 'Richard';
//2.3
// let parentElem1 = document.getElementsByClassName('list')[1];
// console.log(parentElem);
// let childElem1 = parentElem1.children[1];
// console.log(childElem1);
// parentElem1.removeChild(childElem1);
// 2.4
// let li = document.getElementsByTagName('li');
// console.log(li);
// for (l of li) {
//     l.innerText = 'Stas';
//     console.log(li);
// }
// 3.1
// let ul = document.getElementsByTagName('ul');
// console.log(ul);
// for (u of ul) {
//     u.classList.add('student_list');
//     console.log(ul);
// }
// 3.2
// ul[0].classList.add('univercity', 'attendance');
// 4.1
// let div = document.getElementById('container');
// console.log(div);
// div.setAttribute("style", "background-color: blue; padding: 70px;");
// console.log(div);
// 4.2
// let parentElem = document.getElementsByClassName('list')[0];
// console.log(parentElem);
// let childElem = parentElem.firstElementChild;
// console.log(childElem);
// childElem.setAttribute("style", "display:none");
// 4.3

// let parentElem = document.getElementsByClassName('list')[0];
// console.log(parentElem);
// let childElem = parentElem.lastElementChild;
// console.log(childElem);
// childElem.innerText = 'Richard';
// childElem.setAttribute("style", "border: 4px; border-style: solid;");
// console.log(childElem);

// 4.4
// document.body.setAttribute("style", "font-size:30px")
// Bonus
// let div = document.getElementById('container');
// // console.log(div);
// div.setAttribute("style", "background-color: lightblue; padding: 70px;");
// // console.log(div);
// if (div.style.backgroundColor == "lightblue"){
//     let parentElem = document.getElementsByClassName('list')[0];
//     let li1 = parentElem.lastElementChild;
//     let li2 = parentElem.firstElementChild;
//     for (li in parentElem){
//     alert(`Hello ${li1.innerText} ${li2.innerText}`)
//     break
//     }
// }






// Exercise 6: Change The Navbar
// Create a new structured HTML file and a new Javascript file
// Add the code above, to your HTML file
// Using Javascript, in the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
// We are going to add a new <li> to the <ul>.
// First, create a new <li> tag (use the createElement method).
// Create a new text node with “Logout” as its specified text.
// Append the text node to the newly created list node (<li>).
// Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.
// Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).

// let div = document.getElementById('navBar');
// div.setAttribute('id', 'socialNetworkNavigation');
// console.log(div);

// let li = document.createElement('li');
// let x = document.createElement("x");
// x.innerText = 'Logout';
// x.setAttribute('href','#');
// li.appendChild(x);
// ul = document.getElementsByTagName('ul')
// ul[0].appendChild(li)

// let li01 = ul[0].firstElementChild
// let li02 = ul[0].lastElementChild

// console.log(li01.innerText, li02.innerText)






// Exercise 7: My Book List
// Take a look at this link for help.
// The point of this challenge is to display a list of two books on your browser.
// In the body of the HTML page, create an empty section:
// <section class="listBooks"></section>
// In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
// title,
// author,
// image : a url,
// alreadyRead : which is a boolean (true or false).
// Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)
// Requirements : All the instructions below need to be coded in the js file:
// Using the DOM, render each book inside a div (the div must be added to the <section> created in part 1).
// For each book :
// You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.
// The width of the image has to be set to 100px.
// If the book is already read. Set the color of the book’s details to red.

let allBooks = [
    {
        title:"Harry Potter",
	    author: "J.K.Rowling",
	    image : "https://www.megatoys24.ru/uploads/all/b1/bf/43/b1bf43f60c22a61c39df32865e986169.jpg",
        alreadyRead: true,
    },
    {
        title:"Atlas Shrugged",
	    author: "Ayn Rand",
	    image : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Atlas_Shrugged_%281957_1st_ed%29_-_Ayn_Rand.jpg/1200px-Atlas_Shrugged_%281957_1st_ed%29_-_Ayn_Rand.jpg",
        alreadyRead: false,
    }
]

section = document.querySelector('section')

for (let ab in allBooks){
    let div = document.createElement('div')
    let par = document.createElement('p')
    let partxt = document.createTextNode(allBooks[ab].title)
    par.append(partxt)
    let par1 = document.createElement('p')
    let partxt1 = document.createTextNode(allBooks[ab].author)
    par1.append(partxt1)
    let img = document.createElement('img')
    img.src = allBooks[ab].image
    img.style.width = '400px'
    div.appendChild(par)
    div.appendChild(par1)
    div.appendChild(img)
    if (allBooks[ab].alreadyRead == true){
        div.style.backgroundColor = 'red'
    }
    section.appendChild(div)
}
// Exercise 1 : List Of People

// Part I - Review About Arrays
// const people = ["Greg", "Mary", "Devon", "James"];
// 1 Write code to remove “Greg” from the people array.
// people.shift();
// 2 Write code to replace “James” to “Jason”.
// people[2] = "Jason";
// 3 Write code to add your name to the end of the people array.
// people.push("Stas");
// 4 Write code that console.logs Mary’s index.
// idx = people.indexOf("Mary");
// console.log(idx)
// 5 Write code to make a copy of the people array using the slice method
// The copy should NOT include “Mary” OR your name.
// let newpeople = people.slice(0,3) // I exclude my name
// console.log(newpeople);
// 6 Write code that gives the index of “Foo”. Why does it return -1 ?
// idx = people.indexOf("Foo");
// console.log(idx) // idx = -1 coz "Foo" does not exist in the array, indexOf() method returns -1 when the specified element is not found in the array
// 7 Create a variable called last which value is the last element of the array.
// let list = people[3];
// console.log(list);

// Part 2 – Loops
// Using a loop, iterate through the people array and console.log each person.
// for (x in people) {
//     console.log(x, people[x]);
// }
// Using a loop, iterate through the people array and exit the loop after you console.log “Jason” .
// for (let i=0; i < people.length; i++){
//     console.log(people[i]);
//     if (people[i] == "Devon"){
//         break
//     }
// }
// console.log(people);

// Exercise 2 : Your Favorite Colors
// let color_arr = ['Blue', 'Green', 'Red', 'Black', 'White'];
// console.log(color_arr);
// console.log("My 1st choise is " + color_arr[0] + " My 2nd choise is " + color_arr[1] + " My 3d choise is " + color_arr[2] + " My 4th choise is " + color_arr[3] + " My 5th choise is " + color_arr[4])

// Exercise 3 : Repeat The Question
// 1 Prompt the user for a number. Check the data type you receive from the prompt (ie. Use the typeof method)
// let res = prompt('Please enter a number');
// console.log(res);
// console.log(typeof res);
// 2 While the number is smaller than 10 continue asking the user for a new number.
// while(res<10) {
//     res = prompt('Please enter a number');
// }

//  Exercise 4 : Building Management
// const building = {
//     numberOfFloors: 4,
//     numberOfAptByFloor: {
//         firstFloor: 3,
//         secondFloor: 4,
//         thirdFloor: 9,
//         fourthFloor: 2,
//     },
//     nameOfTenants: ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent:  {
//         sarah: [3, 990],
//         dan:  [4, 1000],
//         david: [1, 500],
//     },
// }
// Console.log the number of floors in the building.
// console.log(building.numberOfFloors)
// Console.log how many apartments are on the floors 1 and 3.
// console.log("number Of Apt By 1st Floor " + building.numberOfAptByFloor.firstFloor + " " + "number Of Apt By 4th Floor " + building.numberOfAptByFloor.thirdFloor)
// Console.log the name of the second tenant and the number of rooms he has in his apartment.
// console.log(building.nameOfTenants[1] + " has " + building.numberOfRoomsAndRent.dan[0] + " rooms in his apartment")
// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200
// let sum = (building.numberOfRoomsAndRent.sarah[1]+building.numberOfRoomsAndRent.david[1])
// console.log(sum)
// if (sum>building.numberOfRoomsAndRent.dan[1]){
//     building.numberOfRoomsAndRent.dan[1] = 1200;
// }
// console.log(building.numberOfRoomsAndRent.dan[1])

// Exercise 5 : Family
// let fam = {
//     mom: "Jane",
//     dad: "Joe",
//     son: "Jack"
// }
// keys
// for (x in fam) {
//     console.log(x)
// }
// values
// for (x in fam) {
//     console.log(fam[x])
// }

// Exercise 6 : Rudolf
// const details = {
//   my: "name",
//   is: "Rudolf",
//   the: "raindeer",
// };
// let str = "";
// for (let x in details) {
//   str += x + " " + details[x] + " "
// }
// console.log(str);

// Exercise 7 : Secret Group
// const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// names.sort();
// sect_arr = "";
// for (let i in names) {
//     sect_arr += names[i].charAt(0);
// }
// console.log(names);
// console.log(sect_arr);
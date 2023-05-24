// Exercise 1: Location
// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// }
// const {name, location: {country, city, coordinates: [lat, lng]}} = person;
// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
// forecast: I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)
// fact: I'm right





// Exercise 2: Display Student Info
// function displayStudentInfo(objUser){
//     const {first, last} = objUser;
//     // console.log(first);
//     // console.log(last);
//     return `Your full name is ${first} ${last}`;
// }
// console.log(displayStudentInfo({first: 'Elie', last:'Schoppik'}));





// Exercise 3: User & Id
// const users = {user1: 18273,
//     user2: 92833,
//     user3: 90315};

// 1
// Excepted output: [['user1', 18273], ['user2', 92833], ['user3', 90315]]
// newUsers = [];
// Object.entries(users).forEach((item) => {
//     newUsers.push(item)
// })
// console.log(newUsers);

// 2
// Excepted output: [['user1', 36546], ['user2', 185666], ['user3', 180630]]
// newUsers = [];
// Object.entries(users).forEach(([key, value]) => {
//     newUsers.push(key, value*2)
// })
// console.log(newUsers);





// Exercise 4: Person Class
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }
// const member = new Person('John');
// console.log(typeof member);
// forecast: Person object
// fact: object





// Exercise 5: Dog Class
// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// };
// // Analyze the options below. Which constructor will successfully extend the Dog class?
// // 1
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.size = size;
//   }
// };
// // 2
// class Labrador extends Dog {
//   constructor(name, size) {
//     super(name);
//     this.size = size;
//   }
// };
// // 3
// class Labrador extends Dog {
//   constructor(size) {
//     super(name);
//     this.size = size;
//   }
// };
// // 4
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.name = name;
//     this.size = size;
//   }
// };
// // forecast: 2





// Exercise 6: Challenges
// 1
// [2] === [2];
// forcast: true
// fact: false (arrays are objects in JavaScript, and objects are compared by reference, not by their contents)
// {} === {};
// forcast: false, coz it's obj
// fact: Uncaught SyntaxError: Unexpected token '==='

//2 
// const object1 = {number: 5}; 
// const object2 = object1; 
// const object3 = object2; 
// const object4 = {number: 5};

// object1.number = 4;
// console.log(object2.number); // 4 - we use obj, and we can change it. obj compared by ref, and when we change smth - another obj changed too
// console.log(object3.number); // 4 - same
// console.log(object4.number); // 5 - this is value that we define and we dont rewright it

//3 
// class Animal {
//     constructor(name, type, color) {
//         this.name = name
//         this.type = type
//         this.color = color
//     }
// }

// class Mammal extends Animal {
//     constructor(ame, type, color){
//         super(name, type, color)
//     }
//     sound(par){
//         console.log(`${par} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`);
//     }
// }

// const farmerCow = new Mammal('Lily', 'cow', 'brown and white');
// farmerCow.sound('MOOOOOOOOOOOOO')
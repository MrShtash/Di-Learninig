// Exercise1 : Analyzing
// ------1------
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];

// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result);
// forecast: result = ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']
// fact: I'm right

// ------2------
// const country = "USA";
// console.log([...country]);
// forecast: USA
// fact: ['U', 'S', 'A']

// ------Bonus------
// let newArray = [...[,,]];
// console.log(newArray);
// forecast: no data
// fact: [undefined, undefined]





// Exercise 2: Employees
// const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
//              { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
//              { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
//              { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
//              { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
//              { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
//              { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

// 1 — map(),  the output should be: const welcomeStudents = ["Hello Bradley", "Hello Chloe", "Hello Jonathan", "Hello Michael", "Hello Robert", "Hello Wes", "Hello Zach"]
// let welcomeStudents = users.map((item) => {
//     return (`Hello ${item.firstName}`)
// })
// console.log(welcomeStudents);

// 2 — filter Full Stack
// let filterArr = users.filter((item) => {
//     return item.role.includes('Full Stack');
// })
// console.log(filterArr);

// 3 bonus — connect map and filter
// let lName = filterArr.map((item) => {
//     return item.lastName
// })
// console.log(lName);





// Exercise 3: Star Wars
// const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
// let newEpic = epic.reduce((accumulator, currentvalue) => {
//     return accumulator + " " + currentvalue;
// }, "")
// console.log(newEpic);





// Exercise 4: Employees #2
const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];

let filterStudents = students.filter((item) => {
    return item.isPassed;
})
console.log(filterStudents);

// bonus
let congratsStudents = filterStudents.forEach((item, i, a) => {
    console.log(`Good job ${item.name}, you passed the course in Information Technology`)
})
console.log(congratsStudents);
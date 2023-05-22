// Exercise 1: Find The Sum
// let sum = (x,y) => x+y;
// console.log(sum(1,2));



// Exercise 2: Kg And Grams
// let kgWeight = 10;
// console.log(kgWeight);
// // let gramsWeight = function (x,y) {
// //     return x*y
// // }
// // console.log(gramsWeight(kgWeight, 1000));
// // the difference btw declaration and expression is rule, that in expression func can be saved in var
// const gramsWeight = (x,y) => x*y;
// console.log(gramsWeight(kgWeight, 1000))



// Exercise 3: Fortune Teller
// (function (numOfChildrens, parentsName, geoLocation, jobTitle) {
//     console.log(`You will be a ${jobTitle} in ${geoLocation}, and married to ${parentsName} with ${numOfChildrens} kids`)
// }('3', 'Mary', 'California', 'developers'));



// Exercise 4: Welcome
// (function(username, picture){
//     newLi = document.createElement('li')
//     liName = document.createTextNode(username)
//     newLi.append(liName)
//     document.querySelector('ul').appendChild(newLi)
//     img = document.createElement('img')
//     img.src = picture
//     img.style.height = '300px';img.style.width = '300px'
//     document.querySelector('ul').appendChild(img)
// })('Boss','https://funart.pro/uploads/posts/2021-12/1639611462_17-funart-pro-p-zhalobnii-kotik-zhivotnie-krasivo-foto-17.jpg')



// Exercise 5: Juice Bar
// 1
// let juiceSize = ['small', 'mediun', 'large']

// function makeJuice (juiceSize) {
//     function addIngredients (firstIngredient, secondIngredient, thirdIngredient) {
//         console.log(`The client wants a ${juiceSize} juice, containing ${firstIngredient}, ${secondIngredient}, ${thirdIngredient}`);
//         let juiceOrder = document.createElement('p');
//         juiceOrder.innerText = `The client wants a ${juiceSize} juice, containing ${firstIngredient}, ${secondIngredient}, ${thirdIngredient}`
//         document.querySelector('body').appendChild(juiceOrder)
//     }
//     addIngredients('ice', 'mint', 'soda');
// }
// makeJuice ("small") 

// 2
// let juiceSize = ['small', 'mediun', 'large']
// function makeJuice (juiceSize) {
//     let ingredients = [];
//     function addIngredients (firstIngredient, secondIngredient, thirdIngredient) {
//         // console.log(`The client wants a ${juiceSize} juice, containing ${firstIngredient}, ${secondIngredient}, ${thirdIngredient}`);
//         ingredients.push(firstIngredient, secondIngredient, thirdIngredient)
//         // let juiceOrder = document.createElement('p');
//         // juiceOrder.innerText = `The client wants a ${juiceSize} juice, containing ${firstIngredient}, ${secondIngredient}, ${thirdIngredient}`
//         // document.querySelector('body').appendChild(juiceOrder);
//         console.log(ingredients)
//     }
//     addIngredients('ice', 'mint', 'soda');
//     function displayJuice(ingredients) {
//         let juiceNewOrder = document.createElement('p');
//         juiceNewOrder.innerText = `The client wants a ${juiceSize} juice, containing ${ingredients}`
//         document.querySelector('body').appendChild(juiceNewOrder);
//     }
//     addIngredients('rum', 'lime', 'rum');
//     displayJuice(ingredients)
// }
// makeJuice ("small") 



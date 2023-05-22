let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

let displayGroceries = (groceries) => {
    groceries.fruits.forEach(item =>{
        console.log(item)
    })
}
displayGroceries(groceries);

let cloneGroceries = () => {
    let user = client;
    client = 'Betty'; // new place in memory
    console.log(user, client);
    let shopping = groceries; // shopping - looking to the same place
    groceries.totalPrice = '35$';
    groceries.payed = false;
    console.log(shopping, groceries);
}

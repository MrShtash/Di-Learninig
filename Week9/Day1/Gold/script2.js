const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);
const firstName=urlParams.get("first_name");
const lastName=urlParams.get("last_name");
console.log(firstName);
console.log(lastName);

let user = {
    'first_name': firstName,
    'last_name': lastName
}

let userJson = JSON.stringify(user);
let newpar = document.createElement('h2');
newpar.innerText = userJson;
document.querySelector('body').appendChild(newpar);
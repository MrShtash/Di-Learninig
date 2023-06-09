const ids = ['first', 'last', 'email', 'username', 'password']; // ids that we want listen to (inputs)
const divs = ids.map(id => document.getElementById(id)); // arr of html el
// console.log('divs:', divs);
const submitbutton = document.getElementById('submit');
const form = document.querySelector('form');
const messageBox = document.getElementById('message')
form?.addEventListener('submit', handleSubmit);

// const [first, last, email, username, password] = divs;
divs.forEach((div) => div?.addEventListener('input', handleChange)); // for each divs we had eventlistener on input, when its change - we call handleChange
const url = 'http://localhost:3001/register'

function handleSubmit(e) {
    e.preventDeault();
    // console.log('form submitted');
    // console.log('first:', first);
    const [first, last, email, username, password] = divs.map((div) => div.value); // get value from divs(inputs transform to value)
    const body = { // create body
        first, // first: first
        last, // last: last
        email, // email: email
        username, // username: username
        password // password: password
    };
    const options = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(body)
    };
    // console.log('body:', body);
    fetch(url, options) // call fetch by url
    .then((res) => res.json())
    .then((res) => (messageBox.innerText = res.message)) // when got response from server - display
    .catch(console.error)
    // .finally(()=>{
    //     divs.forEach(div => div.value = '')
    // });
    .finally (()=> form.reset());
}

// function handleChange(e) {
//     if (divs.some(div => div.value === '')) {
//         // console.log(('one field is empty'));
//         submitbutton.disabled = true;
//     }
//     else{
//         submitbutton.disabled = false;
//     }
// }
// or:
function handleChange(e) {
    submitbutton.disabled = isAnyFieldEmpty(); // disabled property to e/n every field is empty
}

function isAnyFieldEmpty(){
    return divs.some((div) => div.value === '');
}



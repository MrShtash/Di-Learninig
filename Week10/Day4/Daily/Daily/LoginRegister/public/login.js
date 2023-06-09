const form = document.querySelector('form');
const messageBox = document.getElementById('messagebox');
// const username = document.getElementById('username');
// const password = document.getElementById('password');
const [username, password] = ['username', 'password'].map((id) => document.getElementById(id));

const url = 'http://localhost:3001/login'
form?.addEventListener('submit', handleSubmit); // call func

function handleSubmit(e) {
    e.preventDeault();
    if (username.value === '' || password.value === '') return; // check username. return do nthng
    // console.log('ok');
    const options = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({password: password.value, username: username.value})
    };
    fetch(url, options)
        .then(res => res.json())
        .then(res => messageBox.textContent = res.message) // response and display message
        .catch(console.error)
        // .finally (()=> {
        //     [username, password].forEach((input) => (input.value = '')); // set form back to empty
        // })
        .finally (()=> form.reset());
}
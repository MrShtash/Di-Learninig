const form = document.getElementById('form');

form.addEventListener('submit', function(event){
    getLogInFormValue(event)
});

let username = document.getElementById('name');
username.setAttribute('placeholder', 'username');
let password = document.getElementById('password');
password.setAttribute('placeholder', 'password');

function  getLogInFormValue(event) {
    event.preventDefault();
    const data = {
        name: event.target.name.value,
        password: event.target.password.value,
        // csrfmiddlewaretoken: event.target.csrfmiddlewaretoken.value
    }
    console.log(data);
    fetch('http://127.0.0.1:8000/scriptum/login/', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'X-CSRFToken': event.target.csrfmiddlewaretoken.value
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
        event.target.name.value = '';
        event.target.password.value = '';
    console.log(data);
    })
};




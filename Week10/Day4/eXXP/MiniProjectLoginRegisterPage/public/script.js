let registerform = document.getElementById("registerform");
registerform.addEventListener("submit", sendData);
function sendData(event) {
  event.preventDefault();
  let first_name = document.getElementById("first_name").value;
  let last_name = document.getElementById("last_name").value;
  let email = document.getElementById("email").value;
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let userdata = {
    first_name,
    last_name,
    email,
    username,
    password
  };
  console.log("user", userdata);
  fetch("http://localhost:3001/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userdata),
  })
    .then((res) => res.json())
    .then((data) => {
    //   console.log(data);
    render(data)
    })
    .catch((err) => {
      console.log(err);
    });
}


let loginform = document.getElementById("loginform");
loginform.addEventListener("submit", sendDataLogin);
function sendDataLogin(event) {
  event.preventDefault();
  let username = document.getElementById("un").value;
  let password = document.getElementById("p").value;
  let data = {
    username,
    password,
  };
  console.log("user", data);
  fetch("http://localhost:3001/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
    //   console.log(data);
    render(data)
    })
    .catch((err) => {
      console.log(err);
    });
}

const render = data => {
    console.log(data);
    document.getElementById('root').innerHTML = data;
};
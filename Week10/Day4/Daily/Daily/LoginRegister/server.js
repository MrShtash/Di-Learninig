const express = require("express");
// const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
// const bodyParser = require("body-parser");
// const users_router = require("./routes/users.js");
const app = express();
const PORT = 3001;
const users = [];
// dotenv.config();
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "public/register.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "public/login.html"));
});

app.post("/register", createUser);
app.post("/login", loginUser);

// function isUserInArray(username) {
//     return users.some((user)=>user.username === username); // boolean, return true/false
// }

function getUserFromArray(username) { // give user in array or no find 
    return users.find((user) => user.username === username);
}

function isFieldEmpty(field) {
    return field == null || field.lenght === 0;
}

function sendErrorMessage(res, message) {
    res.status(400).send({message});
}

function loginUser(req, res){
    // const username = req.body.username;
    // const password = req.body.password;
    const {username, password} = req.body;
    // if (username == null || username.lenght === 0)
    //     return res.status(404).send({message: 'username cannot be empty'})
    // if (password == null || password.lenght === 0)
    //     return res.status(404).send({message: 'password cannot be empty'})
    if (isFieldEmpty(username)) return sendErrorMessage(res, 'username cannot be empty'); // HAVE NO IDEA WHY MESSAGES DONT DISPLAYED
    if (isFieldEmpty(password)) return sendErrorMessage(res, 'password cannot be empty'); // HAVE NO IDEA WHY MESSAGES DONT DISPLAYED
    const user = getUserFromArray(username);
    if (user == null) return sendErrorMessage(res, 'user not found'); // HAVE NO IDEA WHY MESSAGES DONT DISPLAYED
    if (user.password != password) return sendErrorMessage(res, 'wrong password'); // HAVE NO IDEA WHY MESSAGES DONT DISPLAYED
    // console.log('user found and password matches', user);
    res.send({message: `Hello ${username} welcome back again`}); // HAVE NO IDEA WHY MESSAGES DONT DISPLAYED
}

app.listen(PORT, () => console.log(`run on port ${PORT}`));

function isUserAlreadyInArray(username){
    return users.some(user => user.username === username)
    // console.log('check username:', username);
}

// app.use("/", express.static(__dirname + "/public"));
// app.use(cors());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

function createUser(req, res) {
    // console.log('request resieved', req.body);
    if (!isRequestValid(req.body)) // make sure that all info is correct
        return res.status(400).send({message: 'fill all info correctly'}); // HAVE NO IDEA WHY MESSAGES DONT DISPLAYED
    if (isUserAlreadyInArray(req.body.username)) {
        return res.status(400).send({message: 'user already exists'}); // HAVE NO IDEA WHY MESSAGES DONT DISPLAYED
    }
    const newUser = {
        username: req.body.username,
        password: req.body.password
    };
    users.push(newUser);
    console.log(users);
    res.send({message:'Your account is created now', user: newUser.username}); // HAVE NO IDEA WHY MESSAGES DONT DISPLAYED
}

function isRequestValid(body) { // we checkreq is valid - pass body
    const {first, last, email, username, password} = body;
    // if (first.length === 0) return false;
    // or
    if (isAnyFieldEmpty([first, last, email, username, password])) return false;
    if (password.lenght < 4)return false;
    if (!email.includes("@")) return false;
    return true;
}

function  isAnyFieldEmpty(inputs) {
    return inputs.some((input) => input === '' || input == null); // == null mean undefined
}

// app.listen(3001, () => {
//   console.log("run on port 3001");
// });

// app.use(users_router.router);
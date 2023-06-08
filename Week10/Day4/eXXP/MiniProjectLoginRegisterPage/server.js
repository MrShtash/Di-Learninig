const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
// const bodyParser = require("body-parser");
const users_router = require("./routes/users.js");
const app = express();
dotenv.config();

app.listen(3001, () => {
  console.log("run on port 3001");
});

app.use("/", express.static(__dirname + "/public"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// app.post('/formData', (req, res) => {
//     console.log(req.body); // post meth form
//     res.send(`${req.body.username} ${req.body.password}`)
// })

app.use(users_router.router);

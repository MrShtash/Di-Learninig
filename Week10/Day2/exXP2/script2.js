// const button = document.getElementById('submit')
// button.addEventListener('click', function() {
//     alert(`localhost:3000 says Hello from JavaScript`)
// })

const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  // console.log('req.params:', req.params)
  // res.sendFile(path.join(__dirname, "index2.html"));
});
app.listen(3000, () => {
  console.log("server is runing on port 3000");
});

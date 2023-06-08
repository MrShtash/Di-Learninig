const express = require("express");
const router = express.Router();

// const { } = require('../controllers/users.js')

// router.get('/api/users', , (req,res)=>{
//     (req,res)
// })

const {_register} = require('../controllers/users.js');


router.get('/')
router.post('/register', _register)

// router.post("/register", (req, res) => {
//   console.log("body", req.body);
// });

// router.post("/login", (req, res) => {
//   console.log("body", req.body);
// });

module.exports = {
  router,
};

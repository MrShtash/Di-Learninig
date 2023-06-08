const password = require('p4ssw0rd')
const {register, login} = require('../modules/users.js');

const _register = (req, res) => {
    let userInfo = {...req.body}
    userInfo.password = password.hash(userInfo.password)

    register(userInfo)
    .then(data => {
        console.log("data", data);
        res.json(`registration successful. \n hello ${data[0].username}. your id is: ${data[0].user_id}`)
    })
    .catch(err => {
        console.log("err", err);
    })
}

const _login = (req, res) => {
    let userInfo = {...req.body}
    userInfo.password = password.hash(userInfo.password)
    login(userInfo)
    .then(data => {
        res.json(`registration successful ${data[0].user_id}`)
    })
    .catch(err => {
        console.log(err);
        res.status(404).json({msg:err.message})
    })
}

module.exports = {
    _register,
    _login
}
const {db} = require('../config/db.js');

const register = user => {
    returndb('register')
    .insert(user)
    .returning('*')
}

const login = user => {
    return db('login')
    .insert(user)
    .returning('*')
}

module.exports = {
    register,
    login
}
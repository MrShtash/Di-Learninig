// 1
const express = require('express');
const app = express();
app.use(express.static('public'))

// const {page} = require('public./index.html')
app.use(express.static(path.join(__dirname, 'public')));

const user = {
        firstname: 'John',
        lastname: 'Doe'
    }

app.get('/api/exercise/', (req, res) => {
    // res.send(page);
    res.json(user)
    console.log(user);
});

// app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
    console.log('server is runing on port 3000');
})
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
// const users_router = require('./routes/rss.js');

const app = express();
dotenv.config();

app.get('/', (req, res) => {
    const data = {
        msg: 'Hello, this is Scriptum'
    };
    res.json(data)
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`server running on port ${process.env.PORT || 3000}`)
});

// app.set('view engine' , 'ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));
app.use(cors());
// app.use(express.json());
// app.use(users_router.router)
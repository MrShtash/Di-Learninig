// 3
const express = require('express');
const app = express();

app.get('/api/exercise/', (req, res) => {
    res.send("<h1>This is an HTML H1 Tag</h1>");
})

app.listen(3000, () => {
    console.log('server is runing on port 3000');
})
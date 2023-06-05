// 1
// fetch('http://localhost:3000/api/exercise/')
//     .then(response => response.json())
//     .then(data =>
//         {
//         console.log(data);
//         const info = document.getElementById('info');
//         info.textContent = JSON.stringify(data);
//     })
//     .catch(error =>
//         {
//         console.log('Error:', error);
//     });

// 2
const express = require('express');
const app = express();
const path = require('path');

app.get('/:id', (req, res) => {
    console.log('req.params:', req.params)
    // res.send(`id: ${req.params.id}`);
    res.json(req.params);
});
app.listen(3000, () => {
    console.log('server is runing on port 3000');
})

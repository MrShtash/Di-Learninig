const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json())

app.get('/api/hello', (req, res) => {
    res.send('Hello from Express')
});

app.post('/api/world', (req, res) => {
    res.send({message: `I received your POST request. This is what you sent me: ${req.body.message}`})
})

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
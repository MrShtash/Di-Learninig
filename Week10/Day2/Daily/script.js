const express = require('express');
const path = require('path');
const { hobbies } = require('./config/data.js');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get('/api/aboutMe/', (req, res) => {
    res.json(hobbies)
})

app.get('/api/aboutMe/:hobby_id', (req, res) => {
    const id = req.params.hobby_id;
    const hobby = hobbies.find(item => item.id == id)
    if(!hobby) {
        return res.status(404).json({message: 'Hobby not found'})
    }
    res.status(200).json(hobby)
});

app.get('/api/pic/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'pic.html'))
})

app.get('/api/form/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/api/formData', (req, res) => { // dont work
  const email = req.body.email;
  const message = req.body.message;
  res.send(`${email} sent you a message: "${message}"`);
});

app.listen(3000, () => {
    console.log('server is runing on port 3000');
})
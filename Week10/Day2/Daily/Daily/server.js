const express =  require('express');
const app = express();
app.listen(3000, () => {
    console.log('run on port 3001');
})

app.use('/', express.static(__dirname + '/public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/aboutMe/:hobby', (req, res) => {
    // res.sendFile(__dirname + '/public/about.html') // http://localhost:3001/aboutme
    const hobby = req.params.hobby
    if(isNaN(hobby)){
        return res.status(200).send(`this is my hobby: ${hobby}`)
    }
    res.status(404).send('hobby not found')
})

app.get('/pic', (req, res) => {
    res.sendFile(__dirname + '/public/myimage.html')
})

app.get('/form', (req, res) => {
    res.sendFile(__dirname + '/public/form.html')
})

app.post('/formData', (req, res) => { 
    console.log(req.body); // post meth form
    res.send(`${req.body.email} send you a message ${req.body.message}`)
})
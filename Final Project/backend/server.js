const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const {db} = require('./config/db.js');
// const users_router = require('./routes/rss.js');

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();

app.get('/api/data', (req, res) => {
    const data = {
        message: 'Hello, this is Scriptum'
    };
    res.json(data)
    console.log(data);
})

app.get("/api/getAllData", (req, res) => {
  const data = [
    {
      grades: [],
      sprints: [],
      specialists: [],
      companies: [],
      departments: [],
      groups: [],
      projects: [],
      categories: []
    },
  ];
  res.json(data);
});

// app.post('/api/saveData', (req, res) => {
//     const cash = req.body.cash;
//     const category = req.body.category;
//     const company = req.body.company;
//     const department = req.body.department;
//     const grade = req.body.grade;
//     const group = req.body.group;
//     const hour = req.body.hour;
//     const project = req.body.project;
//     const specialist = req.body.specialist;
//     const sprint = req.body.sprint;
//     const work = req.body.work;
// })


app.post('/api/saveGrade', (req, res) => {
    // grade.push(req.body);
    // res.send(grade);
    // res.status(201).json(grade)
    const {grade_type, cost} = req.body;
    
    db('grade')
    .insert({grade_type, cost})
    .then(() => {
        console.log('Grade saved successfully');
        res.status(201).json({message: 'Grade saved successfully'});
    })
    .catch(error => {
        console.log('Error saving grade: ', error);
        res.status(500).json({error: 'Error saving grade'});
    });
})

app.post('/api/saveDepartment', (req, res) => {
    const {d_name} = req.body;
    
    db('department')
    .insert({d_name})
    .then(() => {
        console.log('Department saved successfully');
        res.status(201).json({message: 'Department saved successfully'});
    })
    .catch(error => {
        console.log('Error saving Department: ', error);
        res.status(500).json({error: 'Error saving Department'});
    });
})

app.post('/api/saveGroupData', (req, res) => {
    const {group_name} = req.body;
    
    db('group_data')
    .insert({group_name})
    .then(() => {
        console.log('Group saved successfully');
        res.status(201).json({message: 'Group saved successfully'});
    })
    .catch(error => {
        console.log('Error saving Group: ', error);
        res.status(500).json({error: 'Error saving Group'});
    });
})


// app.get('/api/getSprints', (req, res) => {
//   const sprints = [
//     {
//         id: '',
//         title: ''
//     },
//   ];
//   res.json(sprints);
// });

app.listen(process.env.PORT || 3000, () => {
    console.log(`server running on port ${process.env.PORT || 3000}`)
});

// app.set('view engine' , 'ejs');
app.use(express.urlencoded({extended:true}));
// app.use(express.static(__dirname + '/public'));
// app.use(users_router.router)
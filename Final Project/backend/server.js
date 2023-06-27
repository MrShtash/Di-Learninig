const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
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
      grades: ["Junior", "Middle", "Senior"],
      sprints: ["S1", "S2"],
      specialists: ["John", "Maria"],
      companies: ["Apple", "Google"],
      departments: ["Development", "Subscription services"],
      groups: ["Designer", "Back-end Developer", "QA"],
      projects: ["Design", "DEBUG"],
      categories: ["A", "B", "C"]
    },
  ];
  res.json(data);
});

// app.get('/api/getSprints', (req, res) => {
//   const sprints = [
//     {
//         id: '',
//         title: ''
//     },
//   ];
//   res.json(sprints);
// });

// app.get('/api/getSpecialists', (req, res) => {
//   const sprints = [
//     {
//         id: '',
//         title: ''
//     },
//   ];
//   res.json(sprints);
// });

// app.get('/api/getCompanies', (req, res) => {
//   const sprints = [
//     {
//         id: '',
//         title: ''
//     },
//   ];
//   res.json(sprints);
// });

// app.get('/api/getDepartments', (req, res) => {
//   const sprints = [
//     {
//         id: '',
//         title: ''
//     },
//   ];
//   res.json(sprints);
// });

// app.get('/api/getGrades', (req, res) => {
//   const sprints = [
//     {
//         id: '',
//         title: ''
//     },
//   ];
//   res.json(sprints);
// });

// app.get('/api/getGroups', (req, res) => {
//   const sprints = [
//     {
//         id: '',
//         title: ''
//     },
//   ];
//   res.json(sprints);
// });

// app.get('/api/getProjects', (req, res) => {
//   const sprints = [
//     {
//         id: '',
//         title: ''
//     },
//   ];
//   res.json(sprints);
// });


// app.get('/api/getCategories', (req, res) => {
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
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const {db} = require('./config/db.js');
// const users_router = require('./routes/rss.js');

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();

// app.get("/test",async (req,res)=>{
//      await db.select().from('grade') 
//         .then((grades) => {
//             // console.log(grades, data);
//             console.log(grades)
//             // data.grades = grades; 
//             // res.json(data); 
//             res.json(grades)
//         })
//         .catch((error) => {
//             console.log("Error getting data: ", error);
//             res.status(500).json({error: "Error getting data"});
//         });
// })

// app.get('/api/data', (req, res) => {
//     const data = {
//         message: 'Hello, this is Scriptum'
//     };
//     res.json(data)
//     console.log(data);
// })

app.get("/api/getAllData", async (req, res) => {
  const data = 
    {
        cashs: [],
        categories: [],
        companies: [],
        departments: [],
        grades: [],
        groups: [],
        hours: [],
        projects: [],
        project_departments: [],
        project_specialists: [],
        specialists: [],
        sprints: [],
        sprint_specialists: [],
        works: [],
    };
//   res.json(data);
    await db.select().from('grade') 
        .then((grades) => {
            // console.log(grades, data);
            data.grades = grades; 
            // res.json(data); 
        })
        .catch((error) => {
            console.log("Error getting data: ", error);
            res.status(500).json({error: "Error getting grades"});
        });

    await db.select().from('department') 
        .then((departments) => {
            // console.log(department, data);
            data.departments = departments; 
            // res.json(data); 
        })
        .catch((error) => {
            console.log("Error getting data: ", error);
            res.status(500).json({error: "Error getting departments"});
        });

    await db.select().from('group_data') 
        .then((groups) => {
            // console.log(group_data, data);
            data.groups = groups; 
            // res.json(data); 
        })
        .catch((error) => {
            console.log("Error getting data: ", error);
            res.status(500).json({error: "Error getting groups"});
        });

        await db.select().from('specialist') 
        .then((specialists) => {
            data.specialists = specialists; 
        })
        .catch((error) => {
            console.log("Error getting data: ", error);
            res.status(500).json({error: "Error getting specialists"});
        });

        await db.select().from('category') 
        .then((categories) => {
            data.categories = categories; 
        })
        .catch((error) => {
            console.log("Error getting data: ", error);
            res.status(500).json({error: "Error getting categories"});
        });

        await db.select().from('company') 
        .then((companies) => {
            data.companies = companies; 
        })
        .catch((error) => {
            console.log("Error getting data: ", error);
            res.status(500).json({error: "Error getting companies"});
        });

        await db.select().from('project') 
        .then((projects) => {
            data.projects = projects; 
        })
        .catch((error) => {
            console.log("Error getting data: ", error);
            res.status(500).json({error: "Error getting projects"});
        });

        await db.select().from('sprint') 
        .then((sprints) => {
            data.sprints = sprints; 
        })
        .catch((error) => {
            console.log("Error getting data: ", error);
            res.status(500).json({error: "Error getting sprints"});
        });

        await db.select().from('work') 
        .then((works) => {
            data.works = works; 
        })
        .catch((error) => {
            console.log("Error getting data: ", error);
            res.status(500).json({error: "Error getting works"});
        });

        await db.select().from('cash') 
        .then((cashs) => {
            data.cashs = cashs; 
        })
        .catch((error) => {
            console.log("Error getting data: ", error);
            res.status(500).json({error: "Error getting cash"});
        });

        await db.select().from('hour') 
        .then((hours) => {
            data.hours = hours; 
        })
        .catch((error) => {
            console.log("Error getting data: ", error);
            res.status(500).json({error: "Error getting hours"});
        });

        res.json(data)
});

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

app.post('/api/saveCash', (req, res) => {
    const {cash} = req.body;
    
    db('cash')
    .insert({cash})
    .then(() => {
        console.log('Cash saved successfully');
        res.status(201).json({message: 'Cash saved successfully'});
    })
    .catch(error => {
        console.log('Error saving Cash: ', error);
        res.status(500).json({error: 'Error saving Cash'});
    });
})

app.post('/api/saveHour', (req, res) => {
    const {hour, grade} = req.body;
    
    db('hour')
    .insert({hour, grade_id: grade})
    .then(() => {
        console.log('Hour saved successfully');
        res.status(201).json({message: 'Hour saved successfully'});
    })
    .catch(error => {
        console.log('Error saving Hour: ', error);
        res.status(500).json({error: 'Error saving Hour'});
    });
})

app.post('/api/saveCategory', (req, res) => {
    const {name} = req.body;
    
    db('category')
    .insert({name})
    .then(() => {
        console.log('Category saved successfully');
        res.status(201).json({message: 'Category saved successfully'});
    })
    .catch(error => {
        console.log('Error saving Category: ', error);
        res.status(500).json({error: 'Error saving Category'});
    });
})

app.post('/api/saveSpecialist', (req, res) => {
    const {username, f_name, l_name, email, password, grade, department, group, status} = req.body;
    
    db('specialist')
    .insert({username, f_name, l_name, email, password, grade_id: grade, department_id: department, group_id: group, status})
    .then(() => {
        console.log('Specialist saved successfully');
        res.status(201).json({message: 'Specialist saved successfully'});
    })
    .catch(error => {
        console.log('Error saving Specialist: ', error);
        res.status(500).json({error: 'Error saving Specialist'});
    });
})

app.post('/api/saveCompany', (req, res) => {
    const {name, address, email, phone, contact_name, web_site, deposit, category, description} = req.body;
    
    db('company')
    .insert({name, address, email, phone, contact_name, web_site, deposit, category_id: category, description})
    .then(() => {
        console.log('Company saved successfully');
        res.status(201).json({message: 'Company saved successfully'});
    })
    .catch(error => {
        console.log('Error saving Company: ', error);
        res.status(500).json({error: 'Error saving Company'});
    });
})

app.post('/api/saveProject', (req, res) => {
    const {name, company, s_date, e_date, deposit, description, specialist, department} = req.body;
    
    db.transaction((trx) => {
        trx('project')
            .insert({name, company_id: company, s_date, e_date, deposit, description})
            .returning('project_id')
            .then((projectIds) => {
                const projectId = projectIds[0];

                const departmentData = department.map((departmentId) => ({
                    department_id: departmentId,
                    project_id: projectId.project_id,
                }));

                const specialistData = specialist.map((specialistId) => ({
                    specialist_id: specialistId,
                    project_id: projectId.project_id,
                }));

                return Promise.all([
                trx('project_department').insert(departmentData),
                trx('project_specialist').insert(specialistData),
                ]);
            })
            .then(() => {
                trx.commit();
                console.log('Project saved successfully');
                res.status(201).json({ message: 'Project saved successfully' });
            })
            .catch((error) => {
                trx.rollback();
                console.log('Error saving Project: ', error);
                res.status(500).json({ error: 'Error saving Project' });
            });
            })
            .catch((error) => {
                console.log('Transaction error: ', error);
                res.status(500).json({ error: 'Error saving Project' });
            });
});

app.post('/api/saveSprint', (req, res) => {
    const {project, date_start, date_end, deadline, title, description, result, specialist} = req.body;
    
    db.transaction((trx) => {
        trx('sprint')
            .insert({project_id: project, date_start, date_end: null, deadline, title, description, result: null})
            .returning('sprint_id')
            .then((sprintIds) => {
                const sprintId = sprintIds[0].sprint_id;

            const specialistData = specialist.map((specialistId) => ({
                specialist_id: specialistId.value,
                sprint_id: sprintId,
            }));

    return trx('sprint_specialist').insert(specialistData);
    })
    .then(() => {
        trx.commit();
        console.log('Sprint saved successfully');
        res.status(201).json({ message: 'Sprint saved successfully' });
    })
      .catch((error) => {
        trx.rollback();
        console.log('Error saving Sprint: ', error);
        res.status(500).json({ error: 'Error saving Sprint' });
    });
  })
    .catch((error) => {
      console.log('Transaction error: ', error);
      res.status(500).json({ error: 'Error saving Sprint' });
    });
});

app.post('/api/saveWork', (req, res) => {
    const {title, description, hours, specialist, date_creation, date_complete, deadline, result, sprint} = req.body;
    
    db('work')
    .insert({title, description, hours, specialist_id: specialist, date_creation, date_complete, deadline, result, sprint})
    .then(() => {
        console.log('Work saved successfully');
        res.status(201).json({message: 'Work saved successfully'});
    })
    .catch(error => {
        console.log('Error saving Work: ', error);
        res.status(500).json({error: 'Error saving Work'});
    });
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`server running on port ${process.env.PORT || 3000}`)
});

app.put('/api/updateWork/:id', async (req, res) => {
    const workId = req.params.id;
    const {title, description, hours, specialist, date_creation, date_complete, deadline, result, sprint} = req.body;

    try {
        const changeWork = await db('work')
        .where('work_id', workId)
        .update(req.body);
        
        if (changeWork === 0) {
        return res.status(404).json({error: 'Work not found'});
        }
        
        res.json({message: 'Work updated successfully'});
        } catch (error) {
            console.log('Error updating work: ', error);
            res.status(500).json({error: 'Error updating work'});
        }
});

app.put('/api/updateSprint/:id', async (req, res) => {
    const sprintId = req.params.id;
    const {project, date_start, date_end, deadline, title, description, result, specialist} = req.body;

    try {
        const changeSprint = await db('sprint')
        .where('sprintId', workId)
        .update(req.body);
        
        if (changeSprint === 0) {
        return res.status(404).json({error: 'Sprint not found'});
        }
        
        res.json({message: 'Sprint updated successfully'});
        } catch (error) {
            console.log('Error updating Sprint: ', error);
            res.status(500).json({error: 'Error updating Sprint'});
        }
});

// app.set('view engine' , 'ejs');
app.use(express.urlencoded({extended:true}));
// app.use(express.static(__dirname + '/public'));
// app.use(users_router.router)
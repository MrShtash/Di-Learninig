import React, {useState, useEffect} from 'react';

function ProjectForm() {
  const [formData, setFormData] = useState({
    p_name: '',
    company: '',
    s_date: '',
    e_date: '',
    deposit: '',
    description: '',
    specialist: ''
  });

  const [companies, setCompanies] = useState([]);
  const [specialists, setSpecialists] = useState([]);
  const [departments, setDepartments] = useState([]);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('/api/saveData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Project saved successfully: ', data);
      })
      .catch(error => {
        console.log('Error saving data: ', error);
      });
  };

  useEffect(() => {
    fetch("/api/getAllData") // NEED CORRECT URL
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setCompanies(data.companies);
        setDepartments(data.departments);
        setSpecialists(data.specialists);
      })
      .catch((error) => {
        console.log("Error getting data: ", error);
      });
  }, []);
  
  return (
    <div>
      <h1>Project Page</h1>
      <form onSubmit = {handleSubmit}>
        <label>
          Name: 
          <input type = "text"
                  name = "p_name"
                  value = {formData.p_name}
                  onChange = {handleChange}
                  placeholder = "Project Name"/>
        </label>
        <br />
        <label>
          Company: 
        <select name = "company"
                  id = "company"
                  value = {formData.company}
                  onChange = {handleChange}>
          <option value = "">--Please choose a company--</option>
          {companies.map((company, index) => (
              <option key = {index} value = {company.id}>
                {company}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Date Start: 
          <input type = "date"
                  name = "s_date"
                  value = {formData.s_date}
                  onChange = {handleChange}
                  placeholder = "Date Start"/>
        </label>
        <br />
        <label>
          Date End: 
          <input type = "date"
                  name = "e_date"
                  value = {formData.e_date}
                  onChange = {handleChange}
                  placeholder = "Date End"/>
        </label>
        <br />
        <label>
          Deposit: 
          <input type = "number"
                  name = "deposit"
                  value = {formData.deposit}
                  onChange = {handleChange}
                  placeholder = "Deposit"/>
        </label>
        <br />
        <label>
          Description: 
          <input type = "text"
                  name = "description"
                  value = {formData.description}
                  onChange = {handleChange}
                  placeholder = "Description"/>
        </label>
        <br />
        <label>
          Department: 
          <select name = "department"
                  id = "department"
                  value = {formData.department}
                  onChange = {handleChange}
                  multiple>
          <option value = "">--Please choose a Department--</option>
          {departments.map((department, index) => (
              <option key = {index} value = {department.id}>
                {department}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Specialists: 
        <select name = "specialist"
                  id = "specialist"
                  value = {formData.specialist}
                  onChange = {handleChange}
                  multiple>
          <option value = "">--Please choose a specialist--</option>
           {specialists.map((specialist, index) => (
              <option key = {index} value = {specialist.id}>
                {specialist}
              </option>
            ))}
          </select>
        </label>
        <br />
        <button type = "submit">Create Project</button>
      </form>
    </div>
  );
}

export default ProjectForm;
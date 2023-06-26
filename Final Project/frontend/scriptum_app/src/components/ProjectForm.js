import React, {useState} from 'react';

function ProjectForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    s_date: '',
    e_date: '',
    deposit: '',
    description: '',
    specialist: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
        console.log('Project saved successfully:', data);
      })
      .catch(error => {
        console.error('Error saving data:', error);
      });
  };

  return (
    <div>
      <h1>Project Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name: 
          <input
            type="text"
            name="p_name"
            value={formData.p_name}
            onChange={handleChange}
            placeholder = "Project Name"
          />
        </label>
        <br />
        <label>
          Company: 
        <select
            type=""
            name="company"
            id=""
            value={formData.company}
            onChange={handleChange}
          >
          <option value="">--Please choose a company--</option>
          </select>
        </label>
        <br />
        <label>
          Date Start: 
          <input
            type=""
            name="s_date"
            value={formData.s_date}
            onChange={handleChange}
            placeholder = "Date Start"
          />
        </label>
        <br />
        <label>
          Date End: 
          <input
            type=""
            name="e_date"
            value={formData.e_date}
            onChange={handleChange}
            placeholder = "Date End"
          />
        </label>
        <br />
        <label>
          Deposit: 
          <input
            type=""
            name="deposit"
            value={formData.deposit}
            onChange={handleChange}
            placeholder = "Deposit"
          />
        </label>
        <br />
        <label>
          Description: 
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder = "Description"
          />
        </label>
        <br />
    
        <label>
          Specialists: 
        <select
            type=""
            name="specialist"
            id=""
            value={formData.specialist}
            onChange={handleChange}
          >
          <option value="">--Please choose a specialist--</option>
          </select>

        </label>
        <br />

        <button type="submit">Create Project</button>
      </form>
    </div>
  );
}

export default ProjectForm;
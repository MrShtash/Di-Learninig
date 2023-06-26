import React, {useState} from 'react';

function SprintForm() {
  const [formData, setFormData] = useState({
    project: '',
    title: '',
    description: '',
    s_date: '',
    e_date: '',
    deadline: '',
    result: '',
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
        console.log('Sprint saved successfully:', data);
      })
      .catch(error => {
        console.error('Error saving data:', error);
      });
  };

  return (
    <div>
      <h1>Sprint Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Projec: 
          <select
            type=""
            name="project"
            id=""
            value={formData.project}
            onChange={handleChange}
          >
          <option value="">--Please choose a project--</option>
          </select>
        </label>
        <br />

        <label>
          Title: 
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder = "Title"
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
          Deadline: 
          <input
            type="text"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            placeholder = "Deadline"
          />
        </label>

        <br />
        <label>
          Result: 
          <input
            type="text"
            name="result"
            value={formData.result}
            onChange={handleChange}
            placeholder = "Result"
          />
        </label>
        <br />
        <label>
          Specialist: 
        <select
            type=""
            name="specialist"
            id=""
            value={formData.specialist}
            onChange={handleChange}
            placeholder = "Specialist"
          >
          <option value="">--Please choose a Specialist--</option>
          </select>
        </label>
        
        <br />
        <button type="submit">Create Sprint</button>
      </form>
    </div>
  );
}

export default SprintForm;
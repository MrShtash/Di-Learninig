import React, {useState} from 'react';

function WorkForm() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    hours: '',
    specialist: '',
    s_date: '',
    e_date: '',
    deadline: '',
    result: '',
    sprint: ''
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
        console.log('Work saved successfully:', data);
      })
      .catch(error => {
        console.error('Error saving data:', error);
      });
  };

  return (
    <div>
      <h1>Work Page</h1>
      <form onSubmit={handleSubmit}>
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
         Hours: 
          <input
            type=""
            name="hours"
            value={formData.hours}
            onChange={handleChange}
            placeholder = "Hours"
          />
        </label>
        <br />
        <label>
          Specialist: 
          <select
            name="specialist"
            id="specialist"
            value={formData.specialist}
            onChange={handleChange}
          >
          <option value="">--Please choose a Specialist--</option>
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
          Sprint: 
          <select
            name="sprint"
            id="sprint"
            value={formData.sprint}
            onChange={handleChange}
          >
          <option value="">--Please choose a Sprint--</option>
          </select>
        </label>
        <br />
        <button type="submit">Create Work</button>
      </form>
    </div>
  );
}

export default WorkForm;
import React, {useState} from 'react';

function HourForm() {
  const [formData, setFormData] = useState({
    hour: '',
    grade: ''
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
        console.log('Hour saved successfully:', data);
      })
      .catch(error => {
        console.error('Error saving data:', error);
      });
  };

  return (
    <div>
      <h1>Hour Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Hour: 
          <input
            type=""
            name="hour"
            value={formData.hour}
            onChange={handleChange}
            placeholder = "Hour"
          />
        </label>
        <br />
       

        <label>
          Grade: 
        <select
            type=""
            name="grade"
            id=""
            value={formData.grade}
            onChange={handleChange}
          >
          <option value="">--Please choose a grade--</option>
          </select>

        </label>
        <br />

        <button type="submit">Create Hour Cost</button>
      </form>
    </div>
  );
}

export default HourForm;
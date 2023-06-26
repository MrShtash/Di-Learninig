import React, {useState} from 'react';

function CashForm() {
  const [formData, setFormData] = useState({
    cash: '',
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
        console.log('Cash saved successfully:', data);
      })
      .catch(error => {
        console.error('Error saving data:', error);
      });
  };

  return (
    <div>
      <h1>Cash Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Cash: 
          <input
            type=""
            name="cash"
            value={formData.cash}
            onChange={handleChange}
            placeholder = "Cash"
          />
        </label>
        <br />
       

        <label>
          Cash: 
        <select
            type=""
            name="cash"
            id=""
            value={formData.cash}
            onChange={handleChange}
          >
          <option value="">--Please choose a cash--</option>
          </select>
        </label>
        <br />

        <button type="submit">Create Cash</button>
      </form>
    </div>
  );
}

export default CashForm;
import React, {useState} from 'react';

function GradeForm() {
  const [formData, setFormData] = useState({
    grade: '',
    cost: ''
  });

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
        console.log('Grade saved successfully:', data);
      })
      .catch(error => {
        console.log('Error saving data: ', error);
      });
  };

  return (
    <div>
      <h1>Grade Page</h1>
      <form onSubmit = {handleSubmit}>
        <label>
          Grade: 
          <input type = "text"
                  name = "grade"
                  value = {formData.grade}
                  onChange = {handleChange}
                  placeholder = "Grade"/>
        </label>
        <br />
        <label>
          Cost: 
          <input type = "number"
                  name = "cost"
                  value = {formData.cost}
                  onChange = {handleChange}
                  placeholder = "Cost"/>
        </label>
        <br />
        <button type = "submit">Create Grade</button>
      </form>
    </div>
  );
}

export default GradeForm;
import React, {useState} from 'react';

function DepartmentForm() {
  const [formData, setFormData] = useState({
    d_name: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('/api/saveDepartment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Department saved successfully:', data);
      })
      .catch(error => {
        console.log('Error saving data: ', error);
      });
  };

  return (
    <div>
      <h1>Department Page</h1>
      <form onSubmit = {handleSubmit}>
        <label>
          Department Name: 
          <input type = "text"
                  name = "d_name"
                  value = {formData.d_name}
                  onChange = {handleChange}
                  placeholder = "Department name"/>
        </label>
        <br />
        <button type = "submit">Create Department</button>
      </form>
    </div>
  );
}

export default DepartmentForm;
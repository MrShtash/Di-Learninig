import React, {useState} from 'react';

function GroupForm() {
  const [formData, setFormData] = useState({
    group: '',
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
        console.log('Group saved successfully:', data);
      })
      .catch(error => {
        console.log('Error saving data: ', error);
      });
  };

  return (
    <div>
      <h1>Group Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Group: 
          <input type = "text"
                  name = "group"
                  value = {formData.group}
                  onChange = {handleChange}
                  placeholder = "Group"/>
        </label>
        <br />
        <button type = "submit">Create Group Item</button>
      </form>
    </div>
  );
}

export default GroupForm;
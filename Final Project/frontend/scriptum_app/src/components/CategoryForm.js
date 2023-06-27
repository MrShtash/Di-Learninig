import React, {useState} from 'react';

function CategoryForm() {
  const [formData, setFormData] = useState({
    category: '',
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
        console.log('Category saved successfully:', data);
      })
      .catch(error => {
        console.log('Error saving data: ', error);
      });
  };

  return (
    <div>
      <h1>Category Page</h1>
      <form onSubmit = {handleSubmit}>
        <label>
          Category Name: 
          <input type = "text"
                  name = "category"
                  value = {formData.category}
                  onChange = {handleChange}
                  placeholder = "Category name"/>
        </label>
        <br />
        <button type = "submit">Create Category</button>
      </form>
    </div>
  );
}

export default CategoryForm;
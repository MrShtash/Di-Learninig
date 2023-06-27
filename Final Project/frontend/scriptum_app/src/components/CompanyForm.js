import React, {useState, useEffect} from 'react';

function CompanyForm() {
  const [formData, setFormData] = useState({
    c_name: '',
    address: '',
    email: '',
    phone: '',
    cont_name: '',
    website: '',
    deposit: '',
    c_description: '',
    category: ''
  });

  const [categories, setCategories] = useState([]);

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
        console.log('Company saved successfully:', data);
      })
      .catch(error => {
        console.log('Error saving data: ', error);
      });
  };

  useEffect(() => {
    fetch('/api/getCategories') // NEED CORRECT URL
      .then(response => response.json())
      .then(data => {
        setCategories(data);
      })
      .catch(error => {
        console.log('Error getting categories:', error);
      });
  }, []);

  return (
    <div>
      <h1>Company Page</h1>
      <form onSubmit = {handleSubmit}>
        <label>
        Name: 
          <input type = "text"
                  name = "c_name"
                  value = {formData.c_name}
                  onChange= {handleChange}
                  placeholder = "Company Name"/>
        </label>
        <br />
        <label>
          Address:  
          <input type = "text"
                  name = "address"
                  value = {formData.address}
                  onChange = {handleChange}
                  placeholder = "Address"/>
        </label>
        <br />
        <label>
          Email: 
          <input type = "email"
                  name = "email"
                  value = {formData.email}
                  onChange = {handleChange}
                  placeholder = "Email"/>
        </label>
        <br />
        <label> 
          Phone: 
          <input type = "tel"
                  name = "phone"
                  value = {formData.phone}
                  onChange = {handleChange}
                  placeholder = "Phone"/>
        </label>
        <br />
        <label>
          Contact name: 
          <input type = "text"
                  name = "cont_name"
                  value = {formData.cont_name}
                  onChange = {handleChange}
                  placeholder = "Contact Name"/>
        </label>
        <br />
        <label>
          Website:
          <input type = "url"
                  name = "website"
                  value = {formData.website}
                  onChange = {handleChange}
                  placeholder = "Website"/>
        </label>
        <br />
        <label>
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
                  name = "c_description"
                  value = {formData.c_description}
                  onChange = {handleChange}
                  placeholder = "Description"/>
        </label>
        <br />
          Category: 
        <select name = "category"
                  id = "category"
                  value = {formData.category}
                  onChange = {handleChange}>
          <option value = "">--Please choose a category--</option>
          {categories.map(category => (
              <option key = {category.id} value = {category.id}>
                {category.name}
              </option>
            ))}
        </select>
        </label>
        <br />
        <button type = "submit">Create Company</button>
      </form>
    </div>
  );
}

export default CompanyForm;
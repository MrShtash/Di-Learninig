import React, {useState} from 'react';

function CompanyForm() {
  const [formData, setFormData] = useState({
    c_name: '',
    address: '',
    email: '',
    phone: '',
    cont_name: '',
    website: '',
    deposit: '',
    с_description: '',
    category: ''
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
        console.log('Company saved successfully:', data);
      })
      .catch(error => {
        console.error('Error saving data:', error);
      });
  };

  return (
    <div>
      <h1>Company Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
        Name: 
          <input
            type="text"
            name="c_name"
            value={formData.c_name}
            onChange={handleChange}
            placeholder = "Company Name"
          />
        </label>
        <br />
        <label>
          Address: 
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder = "Address"
          />
        </label>
        <br />
        <label>
          Email: 
          <input
            type=""
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder = "Email"
          />
        </label>
        <br />
        <label>
          Phone: 
          <input
            type=""
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder = "Phone"
          />
        </label>
        <br />
        <label>
          Contact name: 
          <input
            type="text"
            name="cont_name"
            value={formData.cont_name}
            onChange={handleChange}
            placeholder = "Contact Name"
          />
        </label>
        <br />
        <label>
          Website:
          <input
            type=""
            name="website"
            value={formData.website}
            onChange={handleChange}
            placeholder = "Website"
          />
        </label>
        <br />
        <label>
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
            name="с_description"
            value={formData.с_description}
            onChange={handleChange}
            placeholder = "Description"
          />
        </label>
        <br />
          Category: 
        <select
            name="category"
            id="category"
            value={formData.category}
            onChange={handleChange}
          >
          <option value="">--Please choose a category--</option>
          </select>
        </label>
        <br />
        <button type="submit">Create Company</button>
      </form>
    </div>
  );
}

export default CompanyForm;
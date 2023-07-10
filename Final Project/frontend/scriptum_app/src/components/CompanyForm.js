import React, {useState, useEffect} from 'react';
import NavBar from './NavBar';


function CompanyForm() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
    contact_name: '',
    web_site: '',
    deposit: '',
    description: '',
    category: ''
  });

  const [categories, setCategories] = useState([]);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('/api/saveCompany', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Company saved successfully: ', data);
      })
      .catch(error => {
        console.log('Error saving data: ', error);
      });
  };

  useEffect(() => {
    fetch("/api/getAllData")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setCategories(data.categories);
      })
      .catch((error) => {
        console.log("Error getting data: ", error);
      });
  }, []);

  return (
    <div>
      <NavBar/>
      <h1>Company Page</h1>
      <form onSubmit = {handleSubmit}>
        <label>
        Name: 
          <input type = "text"
                  name = "name"
                  value = {formData.name}
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
                  name = "contact_name"
                  value = {formData.contact_name}
                  onChange = {handleChange}
                  placeholder = "Contact Name"/>
        </label>
        <br />
        <label>
          Website:
          <input type = "url"
                  name = "web_site"
                  value = {formData.web_site}
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
                  name = "description"
                  value = {formData.description}
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
          {categories.map((category, index) => (
              <option key = {index} value = {category.category_id}>
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
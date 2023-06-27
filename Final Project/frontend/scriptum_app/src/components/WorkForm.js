import React, {useState, useEffect} from 'react';

function WorkForm() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    hour: '',
    specialist: '',
    s_date: '',
    e_date: '',
    deadline: '',
    result: '',
    sprint: ''
  });

  const [specialists, setSpecialists] = useState([]);
  const [sprints, setSprints] = useState([]);

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
        console.log('Work saved successfully: ', data);
      })
      .catch(error => {
        console.log('Error saving data: ', error);
      });
  };

  useEffect(() => {
    fetch("/api/getAllData") // NEED CORRECT URL
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setSpecialists(data[0].specialists);
        setSprints(data[0].sprints);
      })
      .catch((error) => {
        console.log("Error getting data: ", error);
      });
  }, []);

  return (
    <div>
      <h1>Work Page</h1>
      <form onSubmit = {handleSubmit}>
        <label>
         Title: 
          <input type = "text"
                  name = "title"
                  value = {formData.title}
                  onChange = {handleChange}
                  placeholder = "Title"/>
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
         <label>
         Hours: 
          <input type = "number"
                  name = "hour"
                  value = {formData.hour}
                  onChange = {handleChange}
                  placeholder = "Hours"/>
        </label>
        <br />
        <label>
          Specialist: 
          <select name = "specialist"
                  id = "specialist"
                  value = {formData.specialist}
                  onChange = {handleChange}>
          <option value = "">--Please choose a Specialist--</option>
          {specialists.map((specialist, index) => (
              <option key = {index} value = {specialist.id}>
                {specialist}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Date Start: 
          <input type = "date"
                  name = "s_date"
                  value = {formData.s_date}
                  onChange = {handleChange}
                  placeholder = "Date Start"/>
        </label>
        <br />
        <label>
          Date End: 
          <input type = "date"
                  name = "e_date"
                  value = {formData.e_date}
                  onChange = {handleChange}
                  placeholder = "Date End"/>
        </label>
        <br />
        <label>
          Deadline: 
          <input type = "date"
                  name = "deadline"
                  value = {formData.deadline}
                  onChange = {handleChange}
                  placeholder = "Deadline"/>
        </label>
        <br />
        <label>
          Result: 
          <input type = "text"
                  name = "result"
                  value = {formData.result}
                  onChange = {handleChange}
                  placeholder = "Result"/>
        </label>
        <br />
        <label>
          Sprint: 
          <select name= "sprint"
                  id = "sprint"
                  value = {formData.sprint}
                  onChange = {handleChange}>
          <option value = "">--Please choose a Sprint--</option>
          {sprints.map((sprint, index) => (
              <option key = {index} value = {sprint.id}>
                {sprint}
              </option>
            ))}
          </select>
        </label>
        <br />
        <button type = "submit">Create Work</button>
      </form>
    </div>
  );
}

export default WorkForm;
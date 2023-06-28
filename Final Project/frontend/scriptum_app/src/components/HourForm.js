import React, {useState, useEffect} from 'react';
// import GradeForm from './GradeForm';

function HourForm() {
  const [formData, setFormData] = useState({
    hour: '',
    grade: '' // add grade
  });

  const [grades, setGrades] = useState([]);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('/api/saveHour', {
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
        console.log('Error saving data: ', error);
      });
  };

  useEffect(() => {
    fetch("/api/getAllData") 
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setGrades(data.grades);
      })
      .catch((error) => {
        console.log("Error getting data: ", error);
      });
  }, [])

  return (
    <div>
      <h1>Hour Page</h1>
      <form onSubmit = {handleSubmit}>
        <label>
          Hour: 
          <input type = "number"
                  name = "hour"
                  value = {formData.hour}
                  onChange = {handleChange}
                  placeholder = "Hour"/>
        </label>
        <br />
        <label>
          Grade: 
        <select name = "grade"
                  id = "grade"
                  value = {formData.grade}
                  onChange = {handleChange}>
          <option value = "">--Please choose a grade--</option>
          {grades.map((grade, index) => (
              <option key = {index} value = {grade.grade_id}>
                {grade.grade_type}
              </option>
            ))}
          </select>
        </label>
        <br />
        <button type = "submit">Create Hour Cost</button>
      </form>
    </div>
  );
}

export default HourForm;
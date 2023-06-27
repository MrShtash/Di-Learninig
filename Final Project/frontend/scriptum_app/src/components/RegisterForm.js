import React, {useState, useEffect} from "react";

function RegisterForm() {
  const [formData, setFormData] = useState({
    f_name: "",
    l_name: "",
    username: "",
    email: "",
    password: "",
    grade: "",
    department: "",
    group: "",
    status: "",
  });

  const [grades, setGrades] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [groups, setGroups] = useState([]);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/api/saveData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Specialist saved successfully: ", data);
      })
      .catch((error) => {
        console.log("Error saving data: ", error);
      });
  };

  useEffect(() => {
    fetch("/api/getAllData") // NEED CORRECT URL
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setGrades(data[0].grades);
        setDepartments(data[0].departments);
        setGroups(data[0].groups);
      })
      .catch((error) => {
        console.log("Error getting data: ", error);
      });
  }, []);

  return (
    <div>
      <h1>Register Page</h1>
      <form onSubmit = {handleSubmit}>
        <label>
          First Name:
          <input type = "text"
                  name = "f_name"
                  value = {formData.f_name}
                  onChange = {handleChange}
                  placeholder = "First Name"/>
        </label>
        <br />
        <label>
          Last Name:
          <input type = "text"
                  name = "l_name"
                  value = {formData.l_name}
                  onChange = {handleChange}
                  placeholder = "Last Name"/>
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
          Username:
          <input type = "text"
                  name = "username"
                  value = {formData.username}
                  onChange = {handleChange}
                  placeholder = "Username"/>
        </label>
        <br />
        <label>
          Password:
          <input type = "password"
                  name = "password"
                  value = {formData.password}
                  onChange = {handleChange}
                  placeholder = "Password"/>
        </label>
        <br />
        <label>
          Grade:
          <select name = "grade"
                    id = "grade"
                    value = {formData.grade}
                    onChange = {handleChange}
                    placeholder = "Group">
            <option value="">--Please choose a grade--</option>
            {grades.map((grade, index) => (
              <option key = {index} value = {grade.id}>
                {grade}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Department:
          <select name = "department"
                    id = "department"
                    value = {formData.department}
                    onChange = {handleChange}>
            <option value = "">--Please choose a department--</option>
            {departments.map((department, index) => (
              <option key = {index} value = {department.id}>
                {department}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Group:
          <select name = "group"
                    id = "group"
                    value = {formData.group}
                    onChange = {handleChange}>
            <option value = "">--Please choose a group--</option>
            {groups.map((group, index) => (
              <option key = {index} value = {group.id}>
                {group}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Status:
          <select name = "status"
                    id = "status"
                    value = {formData.status}
                    onChange = {handleChange}>
            <option value = "">--Please choose a status--</option>
            <option value = "active">Active</option>
            <option value = "inactive">Inactive</option>
          </select>
        </label>
        <br />
        <button type = "submit">Create Specialist</button>
      </form>
    </div>
  );
}

export default RegisterForm;

import React, { useState, useEffect } from "react";
import axios from "axios";
// import CashForm from './CashForm';
// import CompanyForm from './CompanyForm';
// import SprintForm from './SprintForm';
// import ProjectForm from './ProjectForm';
// import WorkForm from './WorkForm';
// import Form from './CalculateSpecialistForm';
// import NavBar from './NavBar';

// function ManagerComponent() {
//   return (
//     <div>
//       {/* <NavBar/>
//         <CashForm/>;
//         <CompanyForm/>;
//         <SprintForm/>;
//         <ProjectForm/>;
//         <WorkForm/>;
//         <Form/>; */}
//     </div>
//   );
// }

function ManagerComponent({ specialistData }) {
  console.log(specialistData);
  const [departmentName, setDepartmentName] = useState("");
  const [departmentData, setDepartmentData] = useState([]);

  // useEffect(() => {
  //   if (specialistData && specialistData.department_id) {
  //     axios.get(`/api/getAllData/${specialistData.department_id}`)
  //       .then(response => {
  //         const department = response.data;
  //         setDepartmentName(department.d_name);
  //       })
  //       .catch(error => console.log('Error getting data:', error));
  //   }
  // }, [specialistData]);

  // useEffect(() => {
  //   if (specialistData && specialistData.department_id) {
  //     const departmentId = specialistData.department_id;
  //     axios.get(`/api/getAllData/${departmentId}`)
  //       .then(response => {
  //         const department = response.data;
  //         setDepartmentName(department.d_name);
  //       })
  //       .catch(error => console.log('Error getting department:', error));
  //   }
  // }, [specialistData]);

  //   useEffect(() => {
  //   if (specialistData && specialistData.department_id) {
  //     const departmentId = specialistData.department_id;

  //     // const department = departments.find(
  //     //   (department) => {return department.department_id === departmentId});
  //     const department = departmentData.find(department => department.department_id === departmentId);
  //     if (department) {
  //       setDepartmentData(department);
  //     }
  //   }
  // }, [specialistData, departments]);

  useEffect(() => {
    if (specialistData && specialistData.department_id) {
      const departmentId = specialistData.department_id;
      axios
        .get(`/api/getAllData/`)
        .then((response) => {
          const department = response.data.departments.filter(
            (value) => value.department_id == departmentId
          );
          console.log("Dima department =>", department);
          setDepartmentData(department[0]);
        })
        .catch((error) => console.log("Error getting department:", error));
    }
  }, [specialistData]);

  useEffect(() => {
    if (departmentData && departmentData.length > 0) {
      const department = departmentData.find(
        (department) =>
          department.department_id === specialistData.department_id
      );
      if (department) {
        setDepartmentName(department.d_name);
      }
    }
  }, [departmentData, specialistData.department_id]);

  return (
    <div>
      <>testtesttest</>
      {specialistData && (
        <div>
          <h2>First Name: {specialistData.f_name}</h2>
          <h2>Last Name: {specialistData.l_name}</h2>
          <h2>
            Department: {specialistData.department_id} {departmentData.d_name}
          </h2>
          {/* <h2>Department: {specialistData.department_id} {departmentData?.d_name}</h2> */}
          <h2>Status: {specialistData.status}</h2>
        </div>
      )}
    </div>
  );
}

export default ManagerComponent;

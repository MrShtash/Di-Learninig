import React, {useState, useEffect} from 'react';
import axios from "axios";
import RegisterForm from './RegisterForm';
import GradeForm from './GradeForm';
import HourForm from './HourForm';
import CashForm from './CashForm';
import GroupForm from './GroupForm';
import DepartmentForm from './DepartmentForm';
import CompanyForm from './CompanyForm';
import CategoryForm from './CategoryForm';
import SprintForm from './SprintForm';
import ProjectForm from './ProjectForm';
import WorkForm from './WorkForm';
import Form from './CalculateSpecialistForm';

function AdminComponent({specialistData}) {
  // console.log(specialistData);
  const [departmentName, setDepartmentName] = useState("");
  const [departmentData, setDepartmentData] = useState([]);

  useEffect(() => {
    if (specialistData && specialistData.department_id) {
      const departmentId = specialistData.department_id;
      axios
        .get(`/api/getAllData/`)
        .then((response) => {
          const department = response.data.departments.filter(
            (value) => value.department_id == departmentId
          );
          // console.log("Your department =>", department);
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
      {specialistData && (
        <div>
          <h2>First Name: {specialistData.f_name}</h2>
          <h2>Last Name: {specialistData.l_name}</h2>
          <h2>
            Department: {specialistData.department_id} {departmentData.d_name}
          </h2>
          <h2>Status: {specialistData.status}</h2>
        </div>
      )}
        {/* <RegisterForm/>;
        <GradeForm/>;
        <HourForm/>;
        <CashForm/>;
        <GroupForm/>;
        <DepartmentForm/>;
        <CompanyForm/>;
        <CategoryForm/>;
        <SprintForm/>;
        <ProjectForm/>;
        <WorkForm/>;
        <Form/>; */}
    </div>
  );
}

export default AdminComponent;
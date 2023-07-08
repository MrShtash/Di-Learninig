import React, {useState} from 'react';
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

function AdminComponent() {


  return (
    <div>
        {/* <ul>
            {data.groups.map((group) => (
                <li key={group.group_id}>{group.group_name}</li>
            ))}
        </ul> */}

        <RegisterForm/>;
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
        <Form/>;

    </div>
  );
}

export default AdminComponent;
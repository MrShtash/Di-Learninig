import React, {useState} from 'react';
import CashForm from './CashForm';
import CompanyForm from './CompanyForm';
import SprintForm from './SprintForm';
import ProjectForm from './ProjectForm';
import WorkForm from './WorkForm';
import Form from './CalculateSpecialistForm';
import NavBar from './NavBar';

function ManagerComponent() {


  return (
    <div>
      <NavBar/>
        <CashForm/>;
        <CompanyForm/>;
        <SprintForm/>;
        <ProjectForm/>;
        <WorkForm/>;
        <Form/>;
    </div>
  );
}

export default ManagerComponent;
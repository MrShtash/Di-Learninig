import React, {useEffect, useState} from 'react';
// import LoginForm from './LoginForm';
// import RegisterForm from './RegisterForm';
// import GradeForm from './GradeForm';
// import HourForm from './HourForm';
// import CashForm from './CashForm';
// import GroupForm from './GroupForm';
// import DepartmentForm from './DepartmentForm';
// import CompanyForm from './CompanyForm';
// import CategoryForm from './CategoryForm';
// import SprintForm from './SprintForm';
// import ProjectForm from './ProjectForm';
// import WorkForm from './WorkForm';

import Form from './CalculateSpecialistForm';

// import CalculationPage from './CalculateSpecialistForm';
// import CalculationForm from './CategoryForm';

function Scriptum_test() {
    const [message, setMessage] = useState('');
    useEffect(() => {
        fetch(`/api/data`)
        .then(response => {
            // console.log(response)
            return response.json()})
        .then(data => {
            // console.log(data)
            setMessage(data.message)
        })
        .catch(error => console.log(error));
        
    }, [])

    return(
        <div>
            <h1>{message}</h1>
            {/* <LoginForm/><br />
            <RegisterForm/><br />
            <GradeForm/><br />
            <HourForm/><br />
            <CashForm/><br />
            <GroupForm/><br />
            <DepartmentForm/><br />
            <CompanyForm/><br />
            <CategoryForm/><br />
            <SprintForm/><br />
            <WorkForm/><br />
            <ProjectForm/><br /> */}
            <Form/><br />
        </div>
    )
}

export default Scriptum_test
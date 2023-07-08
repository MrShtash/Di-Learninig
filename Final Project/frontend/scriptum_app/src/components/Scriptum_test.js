import React, {useEffect, useState} from 'react';
import axios from 'axios';
import AdminComponent from './AdminComponents';
import UserComponent from './UserComponents';
import ManagerComponent from './ManagerComponents';
import LoginForm from './LoginForm';
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
// import Form from './CalculateSpecialistForm';
import NavBar from './NavBar';

// import CalculationPage from './CalculateSpecialistForm';
// import CalculationForm from './CategoryForm';

function Scriptum_test() {
    const [group_id, setGroup_id] = useState('');
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

    useEffect(() => { // take info about user group
        const group_id = localStorage.getItem('group_id');
        setGroup_id(group_id);
    }, []);

    return(
        <div>
            <h1>{message}</h1>
            <NavBar groupId={group_id}/>
                {group_id === '13' && <AdminComponent />}
                {(group_id === '7'
                    || group_id === '8')
                    && <ManagerComponent />}
                {(group_id === '1'
                    || group_id === '2'
                    || group_id === '3'
                    || group_id === '4'
                    || group_id === '5'
                    || group_id === '6'
                    || group_id === '9'
                    || group_id === '10'
                    || group_id === '11'
                    || group_id === '12')
                    && <UserComponent />}
        </div>
    )
}

export default Scriptum_test
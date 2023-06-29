import logo from './logo.svg';
import './App.css';
import Scriptum_test from './components/Scriptum_test';
import NavBar from './components/NavBar';
import LoginForm from './components/LoginForm';
import CompanyForm from './components/CompanyForm';
import CashForm from './components/CashForm';
import HourForm from './components/HourForm';
import CategoryForm from './components/CategoryForm';
import DepartmentForm from './components/DepartmentForm';
import GradeForm from './components/GradeForm';
import GroupForm from './components/GroupForm';
import ProjectForm from './components/ProjectForm';
import RegisterForm from './components/RegisterForm';
import SprintForm from './components/SprintForm';
import WorkForm from './components/WorkForm';
import {
      Route,
      Link,
      Routes
    } from "react-router-dom";


function App() {
  return (
    <div>
      {/* <Scriptum_test/> */}
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<LoginForm />} />
        <Route path="/cash" element={<CashForm />} />
        <Route path="/company" element={<CompanyForm />} />
        <Route path="/hour" element={<HourForm />} />
        <Route path="/category" element={<CategoryForm />} />
        <Route path="/department" element={<DepartmentForm />} />
        <Route path="/grade" element={<GradeForm />} />
        <Route path="/group" element={<GroupForm />} />
        <Route path="/project" element={<ProjectForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/sprint" element={<SprintForm />} />
        <Route path="/work" element={<WorkForm />} />
    </Routes>
    </div>
  );
}

export default App;
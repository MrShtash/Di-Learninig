import {useState, createContext} from 'react';
import './App.css';
// import Scriptum_test from './components/Scriptum_test';
// import {Auth} from './auth/Auth'
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
// import Admin from './components/Admin';
import WorkForm from './components/WorkForm';
import {
      BrowserRouter as Router,
      Switch,
      Route,
      Link,
      Routes,
      useNavigate
    } from "react-router-dom";

export const AppContext = createContext(null);

function App() {
  const [accessToken,setAccessToken] = useState('')
  return (
    <AppContext.Provider value={{accessToken,setAccessToken}} >
      <div>
          {/* <Scriptum_test/> */}
          <NavBar/>
            <Routes>
              {/* <Router> */}
                {/* <div> */}
                {/* <Switch> */}
                  {/* <Route path='/admin' element={<Auth><Admin /></Auth>} /> */}
                  <Route exact path="/" element={<LoginForm title="login"/>} />
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
                {/* </Switch> */}
                {/* </div> */}
              {/* </Router> */}
          </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
import {useState, createContext} from 'react';
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
          {/* <NavBar/> */}
          {/* <Scriptum_test/> */}
            <Routes>
              <Route>
                {/* <Switch> */}
                  <Route exact path="/" element={<LoginForm/>} />
                  <Route path="/protected/*" element={<Scriptum_test />} />
                  <Route path="/protected/cash" element={<CashForm />} />
                  <Route path="/protected/company" element={<CompanyForm />} />
                  <Route path="/protected/hour" element={<HourForm />} />
                  <Route path="/protected/category" element={<CategoryForm />} />
                  <Route path="/protected/department" element={<DepartmentForm />} />
                  <Route path="/protected/grade" element={<GradeForm />} />
                  <Route path="/protected/group" element={<GroupForm />} />
                  <Route path="/protected/project" element={<ProjectForm />} />
                  <Route path="/protected/register" element={<RegisterForm />} />
                  <Route path="/protected/sprint" element={<SprintForm />} />
                  <Route path="/protected/work" element={<WorkForm />} />
                  {/* <Route path="*" element={<NotFoundComponent />} /> */}
                {/* </Switch> */}
              </Route>
          </Routes>
      </div>
     </AppContext.Provider>
  );
}

export default App;
import React from 'react';
import {Link} from "react-router-dom";
import {useNavigate} from 'react-router-dom';
// import Button from '@mui/material/Button';
// import Stack from '@mui/material/Stack';
import axios from 'axios';

function NavBar() {
  return (
    <div>
        <ul>
            <li>
                <Link to="/">Login</Link>
            </li>
            <li>
                <Link to="/cash">Cash</Link>
            </li>
            <li>
                <Link to="/company">Company</Link>
            </li>
            <li>
                <Link to="/hour">Hour</Link>
            </li>
            <li>
                <Link to="/category">Category</Link>
            </li>
            <li>
                <Link to="/department">Department</Link>
            </li>
            <li>
                <Link to="/grade">Grade</Link>
            </li>
            <li>
                <Link to="/group">Group</Link>
            </li>
            <li>
                <Link to="/project">Project</Link>
            </li>
            <li>
                <Link to="/register">Register</Link>
            </li>
            <li>
                <Link to="/sprint">Sprint</Link>
            </li>
            <li>
                <Link to="/work">Work</Link>
            </li>
        </ul>
    </div>
  );
}

// const NavBar = (props) => {
//   const navigate = useNavigate()

//   const logout = async () => {
//     try {
//       const response = await axios.delete('/logout', {}, {
//         withCredentials: true,
//         headers:{
//           'Content-Type': 'application/json'
//         }
//       });
//       console.log('register=>', response);
//       if(response.status === 200 || response.status === 204){
//         navigate('/login')
//       }
//     } catch (e) {
//       console.log(e);
//     }
//   }
//   return(
//     <div>
//       <Stack spacing={2} direction="row">
//         <Button component={Link} to='/login'>Login</Button>
//         {/* <Button component={Link} to='/admin' >Admin</Button> */}
//         <Button component={Link} to="/cash">Cash</Button>
//         <Button component={Link} to="/company">Company</Button>
//         <Button component={Link} to="/hour">Hour</Button>
//         <Button component={Link} to="/category">Category</Button>
//         <Button component={Link} to="/grade">Grade</Button>
//         <Button component={Link} to="/department">Department</Button>
//         <Button component={Link} to="/project">Project</Button>
//         <Button component={Link} to="/register">Register</Button>
//         <Button component={Link} to="/sprint">Sprint</Button>
//         <Button component={Link} to="/work">Work</Button>

//         <Button onClick={logout}>Logout</Button>
//       </Stack>
//     </div>
//   )
// }

export default NavBar;
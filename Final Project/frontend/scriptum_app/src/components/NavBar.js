import React from 'react';
import {Link} from "react-router-dom";
// import {useNavigate} from 'react-router-dom';
// import Button from '@mui/material/Button';
// import Stack from '@mui/material/Stack';
import axios from 'axios';

function NavBar(props) {
  return (
    <div>
        <ul>
            {props.groupId == 13 && (
            <>
                {/* <li>
                    <Link to="/">Login</Link>
                </li> */}
                <li>
                    <Link to="/protected/cash">Cash</Link>
                </li>
                <li>
                    <Link to="/protected/company">Company</Link>
                </li>
                <li>
                    <Link to="/protected/hour">Hour</Link>
                </li>
                <li>
                    <Link to="/protected/category">Category</Link>
                </li>
                <li>
                    <Link to="/protected/department">Department</Link>
                </li>
                <li>
                    <Link to="/protected/grade">Grade</Link>
                </li>
                <li>
                    <Link to="/protected/group">Group</Link>
                </li>
                <li>
                    <Link to="/protected/project">Project</Link>
                </li>
                <li>
                    <Link to="/protected/register">Register</Link>
                </li>
                <li>
                    <Link to="/protected/sprint">Sprint</Link>
                </li>
                <li>
                    <Link to="/protected/work">Work</Link>
                </li>
            </>
            )}
                {(props.groupId == 7 || props.groupId == 8) && (
            <>
                {/* <li>
                    <Link to="/">Login</Link>
                </li> */}
                <li>
                    <Link to="/protected/cash">Cash</Link>
                </li>
                <li>
                    <Link to="/protected/company">Company</Link>
                </li>
                <li>
                    <Link to="/protected/project">Project</Link>
                </li>
                <li>
                    <Link to="/protected/sprint">Sprint</Link>
                </li>
                <li>
                    <Link to="/protected/work">Work</Link>
                </li>
            </>
            )}
                {(props.groupId === '1'
                    || props.groupId === '2'
                    || props.groupId === '3'
                    || props.groupId === '4'
                    || props.groupId === '5'
                    || props.groupId === '6'
                    || props.groupId === '9'
                    || props.groupId === '10'
                    || props.groupId === '11'
                    || props.groupId === '12') && (
            <>
                <li>
                    <Link to="/protected/work">Work</Link>
                </li>
            </>
            )}
            
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
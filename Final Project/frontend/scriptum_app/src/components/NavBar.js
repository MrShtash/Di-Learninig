import React from 'react';
import {Link} from "react-router-dom";

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

export default NavBar;
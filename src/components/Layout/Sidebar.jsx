import React from 'react';
import { NavLink } from 'react-router-dom';


function Sidebar() {
    const linkstyle = ({ isActive }) => {
        isActive ? "sidebar-link active-link" : "sidebar-link";
    }
    return (
        <div className="sidebar">
            <div className="logo">Admin</div>
            <nav>
                <NavLink to="/" className={linkstyle}>Dashboard</NavLink>
                <NavLink to="/users" className={linkstyle}>Users</NavLink>
                <NavLink to="/settings" className={linkstyle}>Settings</NavLink>
            </nav>
        </div>
    )
}

export default Sidebar;
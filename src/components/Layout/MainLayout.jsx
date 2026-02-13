import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';


function MainLayout() {
    return (
        <div className="dashboard-grid">
            <Sidebar />

            <div className="content">
                {/* THE OUTLET: This is where the child pages (Dashboard/Users) render */}
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout;
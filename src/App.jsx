import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import Dashboard from './components/Pages/Dashboard';
import Users from './components/Pages/Users';
import Settings from './components/Pages/Settings';
import Sidebar from './components/Layout/Sidebar';

import './App.css';
import MainLayout from './components/Layout/MainLayout';
import UserDetails from './components/Pages/UserDetails';

function App(){
 return(
  <Router>
    <Routes>
   <Route path="/" element={<MainLayout />}>
          
          {/* THE CHILDREN (Go INSIDE the Parent) */}
          <Route index element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Settings />} />
          <Route path="users/:id" element={<UserDetails />} />
          
        </Route>
   </Routes>
  </Router>
 )
}

export default App;
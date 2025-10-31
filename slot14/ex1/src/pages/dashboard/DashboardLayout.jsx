import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function DashboardLayout() {
  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar */}
      <nav style={{ width: '200px', borderRight: '1px solid gray', padding: '1rem' }}>
        <h4>Dashboard</h4>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><NavLink to="/dashboard" end>Home</NavLink></li>
          <li><NavLink to="settings">Settings</NavLink></li>
          <li><NavLink to="reports">Reports</NavLink></li>
        </ul>
      </nav>

      {/* Main content */}
      <main style={{ padding: '1rem', flex: 1 }}>
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;

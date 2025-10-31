import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
      <NavLink 
        to="/" 
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        Trang Chủ
      </NavLink>

      <NavLink 
        to="/san-pham" 
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        Sản Phẩm
      </NavLink>

      <NavLink 
        to="/lien-he" 
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        Liên Hệ
      </NavLink>
    </nav>
  );
}
export default Navbar;
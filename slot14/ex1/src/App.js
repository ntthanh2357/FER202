import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';

// Pages (cấp cao)
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Contact from './pages/Contact';

// Dashboard (nested routes)
import DashboardLayout from './pages/dashboard/DashboardLayout';
import DashboardHome from './pages/dashboard/DashboardHome';
import Settings from './pages/dashboard/Settings';
import Reports from './pages/dashboard/Reports';

function App() {
  return (
    <div className="App" style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      {/* Thanh điều hướng chung */}
      <Navbar />

      {/* Cấu hình các tuyến đường (route) */}
      <Routes>
        {/* --- Các route chính --- */}
        <Route path="/" element={<Home />} />
        <Route path="/san-pham" element={<Products />} />
        <Route path="/san-pham/:productId" element={<ProductDetail />} />
        <Route path="/lien-he" element={<Contact />} />

        {/* --- Các route lồng nhau cho Dashboard --- */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          {/* index nghĩa là /dashboard */}
          <Route index element={<DashboardHome />} />
          <Route path="settings" element={<Settings />} />
          <Route path="reports" element={<Reports />} />
        </Route>

        {/* --- Route 404 (tùy chọn) --- */}
        <Route path="*" element={<h2>404 - Không tìm thấy trang</h2>} />
      </Routes>
    </div>
  );
}

export default App;

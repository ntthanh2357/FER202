import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // import CSS của Bootstrap
import './App.css';

// Import component bạn vừa tạo
import FormComponent from './FormComponent';

function App() {
  return (
    <div className="App" style={{ padding: '40px' }}>
      <h1 style={{ textAlign: 'center', color: '#0d47a1', marginBottom: '40px' }}>
        Bài Tập React useState - Form Component
      </h1>

      {/* Gọi component FormComponent */}
      <FormComponent />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import CSS của React Bootstrap
import LightSwitch from './LightSwitch'; // Import component công tắc đèn

function App() {
  return (
    <div className="App" style={{ textAlign: 'center', padding: '40px' }}>
      <header className="App-header" style={{ marginBottom: '30px' }}>
        <h1>Ứng Dụng Công Tắc Đèn</h1>
        <p style={{ fontSize: '18px', color: '#555' }}>
          Bấm nút bên dưới để bật hoặc tắt đèn 💡
        </p>
      </header>

      <main>
        <LightSwitch />  {/* Component công tắc đèn */}
      </main>
    </div>
  );
}

export default App;

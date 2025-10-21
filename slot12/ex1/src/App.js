import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import CounterComponent from './CounterComponent'; // Import component bạn đã tạo

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ứng dụng Bộ Đếm Số</h1>
      </header>

      <main style={{ marginTop: '30px' }}>
        <CounterComponent />  {/* Gọi component bộ đếm */}
      </main>
    </div>
  );
}

export default App;

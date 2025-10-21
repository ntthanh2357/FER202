import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Đảm bảo giao diện Bootstrap hoạt động
import QuestionBank from './QuestionBank';     // Import đúng tên component

function App() {
  return (
    <div className="App">
      <h1 className="text-center mt-4">React Quiz App</h1>
      <QuestionBank />   {/* Gọi component Quiz */}
    </div>
  );
}

export default App;

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      {/* Header */}
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-3">
          <h1 className="display-6">Let's test the grid!</h1>
        </div>
      </div>

      {/* Navbar */}
      <ul className="nav mb-4">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Active
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>

      {/* Grid */}
      <div className="container text-center mb-4">
        <div className="row mb-2">
          <div className="col bg-secondary bg-opacity-25 border">First col</div>
          <div className="col bg-secondary bg-opacity-25 border">Second col</div>
        </div>
        <div className="row mb-2">
          <div className="col bg-secondary bg-opacity-25 border">col</div>
          <div className="col bg-secondary bg-opacity-25 border">col</div>
          <div className="col bg-secondary bg-opacity-25 border">col</div>
        </div>
        <div className="row mb-2">
          <div className="col bg-secondary bg-opacity-25 border">col</div>
          <div className="col bg-secondary bg-opacity-25 border">col</div>
          <div className="col bg-secondary bg-opacity-25 border">col</div>
          <div className="col bg-secondary bg-opacity-25 border">col</div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-secondary bg-opacity-25 text-center p-3">
        <h4 className="m-0">Created by ABC!</h4>
      </footer>
    </div>
  );
}

export default App;
